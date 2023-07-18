import React, { useContext, useState} from 'react'
import './HeaderShop.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { BiSearchAlt, BiUser } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { DataContext } from '../../context/Context'

 const HeaderShop = ()=> {
    const {
        countCart,
        setText,
        text,
    } =  useContext(DataContext)


    
    
    const [onFocus, setOnFocus ]= useState(false)
    
  return (
    <header className='header'>
        <section className='header--logo'>
            <h1 className='header--logo--title'>Fake  
            
                <SiHomeassistantcommunitystore className='header--logo--icon'/>
                Store
            </h1>
        </section>
        
        <section className='header--search'>
            <BiSearchAlt className={onFocus?'header--search--green': 'header--search--icon'} />
            <input  
             className="header--input" 
             placeholder= "what are you looking for?"
             type="text"
             value={text}
             onFocus={()=>setOnFocus( true )}
             onBlur={()=> setOnFocus(false)}
             onChange={(e) => setText(e.target.value)}
             />
        </section>
        <section className='header--extras'>
            <p className='header--text'>free Shipping  on<br/> <b>All orders over $149 </b> </p>
            <TbTruckDelivery className='header--icon--truck'/>
            <button className='header--bag'>
                <HiOutlineShoppingBag className='header--icon--bag'/>
                <div className="header--bag--circle">{countCart}</div>
            </button>
            <button className='header--bag'>
                <BiUser className='header--icon--bag'/>
            </button>
        </section>
    </header>
  )
}
 export{ HeaderShop }