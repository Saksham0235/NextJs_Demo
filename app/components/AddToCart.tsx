'use client'
import React, { useState } from 'react'

const AddToCart = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button  onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default AddToCart
