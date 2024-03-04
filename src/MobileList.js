import React from 'react'
import './MobileList.css'

const image='https://m.media-amazon.com/images/I/41wBpGhnI7L.AC_SX250.jpg'
 

export default function MobileList(props) {
  const {image,title,price} = props;
  return (
    <div className ="main">
      {console.log(props)}
      {props.greet}
        <img className="image" src={image} alt="book-image"/>
        <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Add to cart</button>
        </div>
    </div>
  )
}
