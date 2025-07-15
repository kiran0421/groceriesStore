const express = require('express');
const app = express();
const cors = require('cors');

const port = 8080;
app.use(cors());
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});