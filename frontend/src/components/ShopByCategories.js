import React from 'react'
import catPic1 from '../img/banner_c.png'
import catPic2 from '../img/banner_a.png'
import catPic3 from '../img/preservs.jpg'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'

const ShopByCategories = () => {
  return (
    <Row>
      <Col>
        <h4 className='text-center'>Shop by Category</h4>
      </Col>
      <div className='d-flex flex-wrap'>
        <div className='col-12 col-md-4 px-0 px-md-1 pb-1'>
          <Link to='/ESSENTIAL-OILS'>
            <Card.Img
              src={catPic1}
              variant='top'
              style={{ maxHeight: '290px' }}
            />
            <div className='btn btn-block finess mx-auto'>Emollients</div>
          </Link>
        </div>
        <div className='col-12 col-md-4 px-0 px-md-1 pb-1'>
          <Link to='/ESSENTIAL-OILS'>
            <Card.Img
              src={catPic2}
              variant='top'
              style={{ maxHeight: '350px' }}
            />
            <div className='btn btn-block finess mx-auto'>Additives</div>
          </Link>
        </div>
        <div className='col-12 col-md-4 px-0 px-md-1 pb-1'>
          <Link to='/ESSENTIAL-OILS'>
            <Card.Img
              src={catPic3}
              variant='top'
              style={{ maxHeight: '350px' }}
            />
            <div className='btn btn-block finess mx-auto'>Preservatives</div>
          </Link>
        </div>
      </div>
    </Row>
  )
}

export default ShopByCategories
