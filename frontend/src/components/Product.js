import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-2 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' className='product-image' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong className='text-lowercase'>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h6'>
          <i className=''>&#8358; </i>
          {product.mini}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
