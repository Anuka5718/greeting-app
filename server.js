const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let storedName = '';

// POST /greet — receive name, store it, return it as JSON
app.post('/greet', (req, res) => {
  const { name } = req.body;
  storedName = name;
  res.json({ name: storedName });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
