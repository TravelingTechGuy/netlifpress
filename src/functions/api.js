import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());

app.get('/.netlify/functions/api', (req, res) => {
  return res.send('you called the GET method');
});

app.post('/.netlify/functions/api', (req, res) => {
  let data = req.body;
  return res.send(`you called the POST method with ${JSON.stringify(data)}`);
});

app.put('/.netlify/functions/api', (req, res) => {
  let data = req.body;
  return res.send(`you called the PUT method with ${JSON.stringify(data)}`);
});

app.delete('/.netlify/functions/api', (req, res) => {
  let data = req.body;
  return res.send(`you called the DELETE method with ${JSON.stringify(data)}`);
});


export const handler = serverless(app);
