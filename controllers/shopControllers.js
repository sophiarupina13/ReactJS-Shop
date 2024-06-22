const { readGoods, readOrders, readCategories, addOrUpdateOrder, deleteOrder } = require('../services/shopServices.js');

async function getGoods(req, res) {
  try {
    const goods = await readGoods(); 
    res.json({ "message": "success", "data": goods }); 
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ "error": err.message });
  }
}

async function getOrders(req, res) {
  try {
    const goods = await readOrders(); 
    res.json({ "message": "success", "data": goods }); 
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ "error": err.message });
  }
}

async function getCategories(req, res) {
  try {
    const goods = await readCategories(); 
    res.json({ "message": "success", "data": goods }); 
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ "error": err.message });
  }
}

async function addOrder(req, res) {
  try {
    const { name, price, image } = req.body;
    const order = await addOrUpdateOrder(name, price, image);
    res.json({ "message": "success", "data": order }); 
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ "error": err.message });
  }
}

async function removeOrder(req, res) {
  try {
    const { id } = req.body;
    const result = await deleteOrder(id);
    res.json({ "message": "success", "data": result }); 
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ "error": err.message });
  }
}

module.exports = { getGoods, getOrders, getCategories, addOrder, removeOrder };
