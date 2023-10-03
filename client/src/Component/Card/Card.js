import React from 'react'
import Product from '../Home/Product'
import { HiMiniShoppingCart} from "react-icons/hi2";

const Card = () => {
  return (
    <div className='wishList'>
        <h1>Your <HiMiniShoppingCart style={{ color: "#016CF6" }} /> Card</h1>
        <Product />
    </div>
  )
}

export default Card