const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./furniture-shop.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the furniture-shop database.');
});

async function readGoods() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM goods';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error('Error while reading items:', err.message);
        reject(err);
      } else {
        resolve(rows); 
      }
    });
  });
}

async function readOrders() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM orders';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error('Error while reading orders:', err.message);
        reject(err);
      } else {
        resolve(rows); 
      }
    });
  });
}

async function readCategories() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM categories';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error('Error while reading categories:', err.message);
        reject(err);
      } else {
        resolve(rows); 
      }
    });
  });
}

async function addOrUpdateOrder(name, price, image) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO orders (name, price, image, amount) VALUES (?, ?, ?, 1)';
    db.run(sql, [name, price, image], function(err) {
      if (err) {
        console.error('Error while inserting order:', err.message);
        reject(err);
      } else {
        resolve({ id: this.lastID, name, price, image, amount: 1 });
      }
    });
  });
}

async function deleteOrder(id) {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM orders WHERE id = ?';
    db.run(sql, [id], function(err) {
      if (err) {
        console.error('Error while deleting order:', err.message);
        reject(err);
      } else {
        resolve({ message: `Order with id ${id} deleted successfully`, changes: this.changes });
      }
    });
  });
}

module.exports = { readGoods, readOrders, readCategories, addOrUpdateOrder, deleteOrder };
