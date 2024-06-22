import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = ({ orders, onDelete }) => {
  let sum = 0;
  orders.forEach(el => sum += Number.parseFloat(el.price))
  return (
    <div>
      {orders.map(order => (
      <Order onDelete={onDelete} key={order.id} item={order}/>
      ))}
      <p className='sum'>Общая сумма {new Intl.NumberFormat().format(sum)}₽:</p>
    </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h3>
        Тут совсем пусто...
      </h3>
    </div>
  )
}

export default function Header( {orders, onDelete} ) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className='header-container'>
        <span className='logo'>
          House Staff
        </span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        
        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ?
            showOrders({ orders, onDelete }) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'>
      </div>
    </header>
  )
}
