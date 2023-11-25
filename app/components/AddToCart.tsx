'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div data-theme="mytheme">    
     <button className='btn btn-outline btn-primary' onClick={() => console.log('Click')}>Add to Cart</button> 
     <button className="btn btn-secondary">Primary Button</button>
  
    </div>
  )
}

export default AddToCart