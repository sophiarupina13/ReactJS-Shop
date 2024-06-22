import React from "react";

const Items = ({ items, onAdd, onShowItem }) => {
  return (
    <main>
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="item">
            <img className="image" src={`../img/${item.image}`} alt={item.name} onClick={() => onShowItem(item)}></img>
            <h2 className="name">{item.name}</h2>
            <p className="description">{item.description}</p>
            <b className="price">Цена: {item.price}₽</b>
            <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Items;
