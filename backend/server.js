import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { productList } from './data/products.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/api/products', (req, res) => {
  res.send(productList);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});