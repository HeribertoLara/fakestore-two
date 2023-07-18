import React,{ useContext} from 'react'

import './PanelProducts.css'
import CardProduct from '../CardProduct/CardProduct'
import { HeaderShop } from '../HeaderShop/HeaderShop'
import { DataContext } from '../../context/Context'
const PanelProducts=()=> {
  
  const {items} = useContext(DataContext);
  
  
  
  return (
    <>
      <HeaderShop/>
      <section className='cards'>
        {
          items.map(product=>(

            <CardProduct 
              key={product.id} 
              product={product}
            />

            ))
          }

      </section>
    </>
  )
}

export {PanelProducts}




