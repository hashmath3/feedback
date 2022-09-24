import React, { useState } from 'react'

const Hook2 = () => {
    const [name ,setName] =useState({firstname:'', lastname:''}) 
  return (
    <div><form>
        <input type='text' value={name.firstname} onChange ={e =>setName({... name ,firstname : e.target.value})}></input>
        <input type='text' value={name.lastname} onChange ={e =>setName({... name,lastname : e.target.value})}></input>
        <h1>{name.firstname}</h1>
        <h2>{name.lastname}</h2>
    </form>

    </div>
  )
}

export default Hook2