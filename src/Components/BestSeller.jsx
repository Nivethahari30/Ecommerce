import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { products } from '../assets/assets';
import Title from './Title';
import ProductsItem from './ProductsItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const[BestSeller,setBestSeller]=useState([])
    useEffect(()=>{
const BestProducts=products.filter((items)=>(items.bestseller))
setBestSeller(BestProducts.slice(0,5))
    },[])
  return (
    <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'></p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {BestSeller.map((item,index)=>(
 <ProductsItem key={item._id || index} id={item._id} image={item.image} name={item.name} price={item.price}/>            ))}
        </div>
      
    </div>
  )
}

export default BestSeller
