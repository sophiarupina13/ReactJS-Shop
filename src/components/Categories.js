import React, { useState, useEffect } from 'react'

const Categories = ({ chooseCategory }) => {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories')
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setCategories(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='categories'>
      {categories.map(el => (
          <div key={el.key} onClick={() => chooseCategory(el.name)}>{el.name}</div>
      ))}
    </div>
  )
}

export default Categories