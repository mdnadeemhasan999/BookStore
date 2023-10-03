import React from 'react'

const Book = ({img, title, author}) => {

    const clickHendler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world');
    };

    const complexExample = (author) => {
        console.log(author);
    };

  return(
    <article className='book'>
    <img src={img} alt='' />
    <h4>{title}</h4>
    <h3>{author}</h3>
    <button type="button" onClick={clickHendler}>Add Card</button>
    <button type="button" onClick={() => complexExample(author)}>Buy Now</button>
    </article>
  )
}

export default Book