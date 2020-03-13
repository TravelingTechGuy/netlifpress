import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/.netlify/functions/api', (req, res) => {
  return res.send('get');
});

app.post('/.netlify/functions/api', (req, res) => {
  return res.send('post');
});

app.delete('/.netlify/functions/api', (req, res) => {
  return res.send('delete');
});

app.put('/.netlify/functions/api', (req, res) => {
  return res.send('put');
});

export const handler = serverless(app);
