import { createContext, useState } from "react";
import { products } from "../assets/assets";


 export const ShopContext=createContext()
 const ShopContextProvider=(props)=>{
    const currency="$";
    const deliveryfee=10
    const [Search,setSearch]=useState('');
    const [Showsearch,setShowsearch]=useState(false);

    const value={
        products,currency,deliveryfee,Search,Showsearch,setSearch,setShowsearch

    }
return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>

)
 }
 export default ShopContextProvider;