import React from 'react'

const Product = ({post}) => {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <div>
        {
          true ? <p>Remove From cart</p>: <p>Add To Cart</p>
        }
      </div>
    </div>
  )
}

export default Product