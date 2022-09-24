import React, { useState } from 'react'

const Hook = () => {

    const [count ,setCount] =useState(0)
  return (
    <div>hook

        <button onClick={()=> setCount(count+2) }>{count}</button>
    </div>
  )
}

export default Hook