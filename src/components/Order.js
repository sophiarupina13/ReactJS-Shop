import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {

    const { item, onDelete } = this.props;

    return (
      <div className='item'>
            <img className="image" src={`../img/${item.image}`} alt={item.name}></img>
            <h2 className="name">{item.name}</h2>
            <b className="price">Цена: {item.price}₽</b>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id) }/>
      </div>
    )
  }
}

export default Order