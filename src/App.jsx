import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About'
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import PlaceOrder from './Pages/PlaceOrder';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar/>
      <SearchBar/>
      <Routes>
      <Route path='/' element={<Home />} /> 
              <Route path='/Cart'element={<Cart/>}/>
        <Route path='/Collection'element={<Collection/>}/>
        <Route path='/Contact'element={<Contact/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Orders'element={<Orders/>}/>
        <Route path='/PlaceOrder'element={<PlaceOrder/>}/>
        <Route path='/Product/:ProductId'element={<Product/>}/>
      </Routes>
      <Footer/>

     
    </div>
  );
};

export default App; 
