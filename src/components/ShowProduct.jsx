import React from 'react'
import { useSelector } from 'react-redux'
import AddProduct from './AddProduct'
import { useNavigate } from 'react-router-dom';

const ShowProduct = () => {
  const navigate = useNavigate()
  const {product}= useSelector((state) => state.product)
  const handleUpdate = (index)=> {
    console.log(index)
    navigate(`/update/${index}`)
  }
  return (
    <>
      <div className='box mt-5'>
        <AddProduct/>
      </div>
      <div className='box mt-5'>
        {
          product.map((item, index)=>(
            <div className='mt-5' key={index}>
              <h1 className='title is-4'>Title {item.title}</h1>
              <h1 className='price is-4'>Price {item.price}</h1>
              <button onClick={()=>handleUpdate(index)}>Update Product</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ShowProduct
