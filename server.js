const { getGoods, getOrders, getCategories, addOrder, removeOrder } = require('./controllers/shopControllers.js')
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = "127.0.0.1";

app.use(cors());
app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.json());

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/src/img/apartment.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'img','apartment.jpg'));
});

app.get('/src/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.css'));
});

// бд
app.get('/items', (req, res) => {
  getGoods(req,res);
});

app.get('/orders', (req, res) => {
  getOrders(req,res);
});

app.get('/categories', (req, res) => {
  getCategories(req,res);
});

app.post('/add-order', (req, res) => {
  addOrder(req,res);
});

app.delete('/delete-order', (req, res) => {
  removeOrder(req,res);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
