import React from 'react'
import Product from '../Home/Product'
import { BsFillSuitHeartFill} from "react-icons/bs";

const WishList = () => {
  return (
    <div className='wishList'>
        <h1>Your <BsFillSuitHeartFill style={{ color: "red" }} /> Wishlist</h1>
        <Product />
    </div>
  )
}

export default WishList