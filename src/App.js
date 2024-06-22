import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

const App = () => {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    fetch('/items')
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setItems(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  useEffect(() => {
    fetch('/orders')
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setOrders(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

const addToOrder = (item) => {
  let isInArray = false;
  orders.forEach(el => {
    if (el.id === item.id)
      isInArray = true
  })
  if (!isInArray) {
    fetch('/add-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: item.name, price: item.price, image: item.image }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "success") {
        setOrders([...orders, data.data]);
      }
    })
    .catch(error => console.error('Error adding order:', error));
  }
};

const deleteOrder = (id) => {
  fetch('/delete-order', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === "success") {
      setOrders(orders.filter(order => order.id !== id));
    }
  })
  .catch(error => console.error('Error deleting order:', error));
}

const chooseCategory = (category) => {
  if (category === 'Всё') {
    setCurrentItems(items);
    return;
  }
  setCurrentItems(items.filter(el => el.category === category))
}

const onShowItem = (item) => {
  setFullItem(item);
  setShowFullItem(!showFullItem);
}

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
      <Footer />
    </div>
  );
};

export default App;
