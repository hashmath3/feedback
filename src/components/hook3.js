import React, { useState } from 'react'

const Hook3 = () => {
    const [items ,setItems] =useState([])
    const addItem =()=>{
        setItems([...items,{ id:items.length ,
            value: Math.floor(Math.random()*10)+1}])
    }
  return (
    <div>
        <button onClick={addItem}>add</button>
        <ul>
            {items.map(items=>(<li key={items.id}>{items.value}</li>))}
        </ul>
    </div>
  )
}

export default Hook3