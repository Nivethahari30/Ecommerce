import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const SearchBar = () => {
    const{Search,setSearch,Showsearch,setShowsearch}=useContext(ShopContext)
    const location=useLocation()
    const [Visible,setVisible]=useState(false)
    useEffect(()=>{
// console.log(location.pathname)
if(location.pathname.includes('collection') ){
  setVisible(true)
}
else {
  setVisible(false)
}
    },[location])
  return Showsearch && Visible ? (
    <div  className=' text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={Search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm '  type='text' placeholder='search here'/>
        <img  className='w-4' src={assets.search_icon} alt=''/></div>
        <img onClick={()=>setShowsearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt=''/>
        
      
    </div>
  ): null
}

export default SearchBar
