import React from "react";
import {data} from './Books';
import SpecificBook from './Book';

function Product() {
  return (
    <section className='bookList'>
    <div className="container">
    {data.map((book, index) => {
      return <SpecificBook key={data.id} {...book}></SpecificBook>;
    })}
    </div>
    </section>
  );
}

export default Product;
