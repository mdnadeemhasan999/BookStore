import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div>
    <div className='banner'>
        <img
          src='./img/bannerr.jpg'
          alt="Banner"
        />
    </div>
        <div style={{ margin: '30px' }}></div>
            <Product />
        <div style={{ margin: '60px' }}></div>
        
    </div>
  )
}

export default Home