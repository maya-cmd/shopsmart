import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>

        </div>
        <div className='descriptionbox-description'>
            <p>This is an online platform designed to simplify and enhance your 
                shopping experience by connecting you with a curated selection of 
                products. Whether you’re looking for the latest trends, essential 
                items, or unique finds, our platform offers a seamless way to discover 
                and purchase high-quality products from trusted vendors. With user-friendly 
                navigation, secure payment options, and personalized recommendations, 
                shopping has never been easier. Dive in, explore our collections, and enjoy 
                a modern, convenient approach to online shopping tailored just for you.
            </p>

        </div>

    </div>
  )
}

export default DescriptionBox