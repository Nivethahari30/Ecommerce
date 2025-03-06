import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import ProductsItem from "../Components/ProductsItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [SortType, setSortType] = useState('relavent');



  // useEffect(() => {
  //   if (products) {
  //     setFilterProducts(products);
  //   }
  // }, [products]);

  // Category Toggle Function
  // filter the category items like men women and kids function and 
  const Toggle = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // SubCategory Toggle Function (Fixed case sensitivity) for sub category if the bootmwear and also you selct the winter wear it add if you unselect it remove
  const SubToggle = (e) => {
    const value = e.target.value.toLowerCase();
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply Filter   
  const ApplyFilter = () => {
    let ProductsCopy = products.slice();

    // Filter by Category
    if (Category.length > 0) {
      ProductsCopy = ProductsCopy.filter((item) => Category.includes(item.category));
    }

    // Filter by SubCategory (Fix case sensitivity)
    if (SubCategory.length > 0) {
      ProductsCopy = ProductsCopy.filter((item) =>
        SubCategory.includes(
          (item.subCategory || item.SubCategory || item.subcategory || item.type || "").toLowerCase()
        )
      );
    }

    setFilterProducts(ProductsCopy);
  };

  useEffect(() => {
    ApplyFilter();
    // console.log("Selected SubCategories:", SubCategory);
  }, [Category, SubCategory, products]);

  // for  hight to low .....
const SortProduct=()=>{
  let FPCopy=FilterProducts.slice();
  switch(SortType){
    case 'low-high':
      setFilterProducts(FPCopy.sort((a,b) => (a.price - b.price)));
      break;
      case 'high-low':
        setFilterProducts(FPCopy.sort((a,b)=>(b.price-a.price)));
        break;
        default:
          ApplyFilter();
          break;

  }
  
}
useEffect(()=>{
SortProduct();
},[SortType])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!ShowFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${ShowFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" value="Men" type="checkbox" onChange={Toggle} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" value="Women" type="checkbox" onChange={Toggle} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" value="Kids" type="checkbox" onChange={Toggle} />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" value="topwear" type="checkbox" onChange={SubToggle} />
              TopWear
            </p>
            <p className="flex gap-2">
              <input className="w-3" value="bottomwear" type="checkbox" onChange={SubToggle} />
              BottomWear
            </p>
            <p className="flex gap-2">
              <input className="w-3" value="winterwear" type="checkbox" onChange={SubToggle} />
              WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL " text2="CATEGORIES" />

          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant"> sort by: Relevant</option>
            <option value="low-high"> sort by: Low to High</option>
            <option value="high-low"> sort by:High to Low</option>
          </select>
        </div>

        {/* Product Listing */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {FilterProducts.map((item, index) => (
            <ProductsItem key={item._id || index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
