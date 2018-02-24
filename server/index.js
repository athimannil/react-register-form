import express from 'express';

let app = express();

app.get('/*', (req, res) => {
  res.send("Your server is ready");
});

app.listen(3000, () => console.log('Server runs on localhost:3000'));
