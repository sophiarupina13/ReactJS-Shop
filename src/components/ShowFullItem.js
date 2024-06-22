import React from 'react'

const ShowFullItem = ({ item, onAdd, onShowItem }) => {
  return (
    <div className='full-item'>
      <div>
        <button className='close' onClick={() => onShowItem(item)}>✕</button>
        <img className="image" src={`../img/${item.image}`} alt={item.name}></img>
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <b className="price">Цена: {item.price}₽</b>
        <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
      </div>
    </div>
  )
}
export default ShowFullItem