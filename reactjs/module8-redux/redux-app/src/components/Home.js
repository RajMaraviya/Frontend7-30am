import React from 'react'
export default function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img src='https://cdn-icons-png.flaticon.com/512/34/34627.png'></img>
        </div>
      <h1>home component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://cdn1.smartprix.com/rx-iiPiwsnmt-w420-h420/apple-iphone-14-pro.jpg'/>
        </div>
        <div className='text-wrapper item'>
            <span>IPhone</span>
            <span> price: 1000$</span>
        </div>
        <div className='btn-wrapper item'>
            <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
