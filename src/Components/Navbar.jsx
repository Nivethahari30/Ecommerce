import React, { useContext } from 'react';
import {Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/assets';
import { useState } from 'react'; 
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const[Visible,setVisible]=useState(false)
const {setShowsearch}=useContext(ShopContext)    

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* forever logo */}
     <Link to="/"> <img src={assets.logo} className='w-36' alt='Logo' /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {/* Navlinks  */}
          <NavLink to="/" className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/Collection" className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/About" className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/Contact" className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        
      </ul>

      <div className='flex items-center gap-6'>
        {/* searchicon image */}
        <img onClick={()=>setShowsearch(true)} src={assets.search_icon}className='w-5 cursor-pointer'/>
            <div className='group relative'>
              {/* profile pic */}
            <img  className='w-5 cursor-pointer'src={assets.profile_icon}  /> 
            {/* if the cursor over the profile its display the 3 items  */}
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Collections</p>
                <p className='cursor-pointer hover:text-black'>Log Out</p>
                </div>
                </div>
               </div>
               
               
    <Link to ="/Cart" className='relative'>
    {/* carticon */}
    <img src={assets.cart_icon} className='w-5 min:w-5'/>
    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p></Link>
    {/* if the scrren is small the menu pic will display and click it move to the back page it shows some items  */}
    <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
      </div>
      {/* Sidebar menu */}
      <div className={`absolute top-0 right-o bottom-0 overflow-hidden bg-white transition-all ${Visible?"w-full":"w-0"}`}>
        <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img  className='h-4 rotate-180'src={assets.dropdown_icon}/>
            <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/">HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/Collection">COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/About">ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/Contact">CONTACT</NavLink>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
