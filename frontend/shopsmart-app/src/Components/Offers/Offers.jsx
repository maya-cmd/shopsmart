import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='Offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only on Best Sellers Products</p>
            <button>Check now</button>

        </div>
        <div className='Offers-right'>
            <img src={exclusive_image} alt="" />

        </div>

    </div>
  )
}

export default Offers