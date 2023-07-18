import React, { useContext } from 'react'
import {AiTwotoneStar, AiOutlineShopping, AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/Context'
import './CardProduct.css'

const CardProduct= ({
    product,

}) => {

    const {cart, setCart, setCountCart} = useContext(DataContext)
    
    const addProduct = (cart, product) =>{
        cart.push(product)
        setCart([...cart])
        setCountCart(cart.length)
    }

  return (
    <div className='card--product'>
       
        <Link 
            className='card--img--link'
            to={`/products/${product.id}`}>
        <img 
            className="card--image" 
            src={product.image} 
            alt="#" />
        </Link>
        <section  className='card--section'>

            <h3 className='card--title'>{
                product.title.length>30? 
                product.title.slice(0, 30) +"...":
                product.title
                }
            </h3>

            <p className='card--price'>$ {product.price}</p>   
            <div className='card--rating'>
                <p className='card--rate'>
                    <AiTwotoneStar/>{product.rating['rate']}    
                </p>
                <p className='card--count'>
                    <AiOutlineShopping/>{ product.rating.count < 5 ?
                    'ultimas piezas':
                    product.rating['count']} 
                </p> 
                <button 
                    className='card--button'
                    onClick={()=>addProduct(cart, product)}
                    >
                    <AiOutlineShoppingCart
                        className='card--button--icon'
                    />
                </button> 
            </div>
        </section>
    </div>
  )
}

export default CardProduct