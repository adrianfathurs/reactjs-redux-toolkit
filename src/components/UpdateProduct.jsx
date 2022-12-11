import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update, getProductByID } from '../redux/features/product';
import {  useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const params =  useParams()
  const {product} = useSelector(state =>
    state.product
  )


  //State
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");


  //Method
  const handleSubmit = async(e) => {
    e.preventDefault()
    await dispatch(update({ title, price, id: params.id }))
    navigate('/')
  }

  useEffect(() => {
    setTitle(product[parseInt(params.id)].title)
    setPrice(product[parseInt(params.id)].price)
  }, []);
  return (
    <div className='box mt-5'>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">price</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button type='submit' className="button is-success">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProduct

