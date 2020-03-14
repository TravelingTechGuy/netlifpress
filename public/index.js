const showResult = text => document.getElementById('result').innerText = text;

const callAPI = async (method, params = {}) => {
  try {
    showResult('');
    let options = Object.assign({method}, method === 'GET' ? {} :
      {
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'}
      }
    );
    console.log(options)
    let response = await fetch('/.netlify/functions/api', options);
    if(!response.ok) {
      console.error(response.statusText);
    }
    else {
      let body = await response.text();
      showResult(body);
    }
  }
  catch(err) {
    console.error(err);
  }
};

const post = () => callAPI('POST', {first: 'Mike', last: 'Smith'});
const get = () => callAPI('GET');
const put = () => callAPI('PUT', {id: 1001});
const del = () => callAPI('DELETE', {id: 1001});
