const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let storedName = '';

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Welcome</title>
    </head>
    <body>
      <h1>Welcome</h1>
      <p>Please enter your name to receive a greeting.</p>
      <form action="/greet" method="POST">
        <input type="text" name="name" placeholder="Enter your name" required />
        <br/><br/>
        <button type="submit">Get Greeting</button>
      </form>
    </body>
    </html>
  `);
});

app.post('/greet', (req, res) => {
  const { name } = req.body;
  storedName = name;
  res.redirect('/greeting');
});

app.get('/greeting', (req, res) => {
  if (!storedName) {
    return res.redirect('/');
  }
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Greeting</title>
    </head>
    <body>
      <h1>Hello, ${storedName}!</h1>
      <a href="/">Go Back</a>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
