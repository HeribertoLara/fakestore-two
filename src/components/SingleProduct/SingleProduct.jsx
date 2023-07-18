import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../../context/Context'
import {AiFillHome} from 'react-icons/ai'
import  { IoIosArrowBack } from 'react-icons/io'
import { GrDeliver } from 'react-icons/gr'
import "./SingleProduct.css"
import axios from 'axios'


const SingleProduct = () => {
  const {product, setProduct, } = useContext(DataContext)
   const {id}= useParams()

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(()=>{
    const getSingleProduct =  async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
        
      );
    setProduct(res.data)
    
    return res;
  } catch (error) {
    alert(error); 
  }
};  

  getSingleProduct()
},[id, setProduct])
  return (
    <div className='single'>
      <section className='single--section--header'>
        <Link className='single--link' to="/">
          <IoIosArrowBack/>
          <AiFillHome/>
        </Link>
         
        <img className="single--img" 
          src={product.image} alt="#" />   
      </section>
      <section className='single--section--features'>
        <h2 
          className='single--title'>
             {product.title}
        </h2>

        <p className='single--price'>${product.price}</p> 
        {/* <p className='single--rate'>
          <AiFillStar className='single--stars'/>
          {product.rating.rate}</p>  */}
        <p className='single-deliver'><GrDeliver/> Shipping all over the country</p>
        <p className='single--description'>{product.description}</p>
        <p className='single--category'>category: {product.category}</p>
       
        {/* <p className='single--pieces'> pieces: {product.rating.count}</p> */}
      </section>
    </div>
  )
}

export  {SingleProduct}