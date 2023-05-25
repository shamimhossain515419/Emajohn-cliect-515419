import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle";


import 'react-tabs/style/react-tabs.css';
import ProductCardHome from "./ProductCardHome";
const Product = () => {

const [acctive,setAcctive]=useState("Men's Sneaker")

const [products, setProducts] = useState([]);

useEffect(()=> {
      fetch(`https://y-beta-lilac.vercel.app/product/${acctive}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
} ,[acctive])




     return (
          <div>
               <div>
                    <SectionTitle subTitle={"Chacke Product"} HeaderTitle={"Category Product"}></SectionTitle>
               </div>

               <div>
                    
                     <div className=" flex gap-4 items-center justify-center">
                          <button onClick={()=>setAcctive("Men's Sneaker")} className={`${acctive == "Men's Sneaker" ? " text-blue-500" : "text-gray-600 "}   py-2 px-4 text-center text-2xl  border-b-2    font-medium outline-none border-none`}> Men's Sneaker </button>
                          <button onClick={()=>setAcctive("Men's Pants")}  className={` ${acctive == "Men's Pants" ? " text-blue-500" : "text-gray-600 "}  py-2 px-4 text-center text-2xl  border-b-2   font-medium outline-none border-none`}> Men's Pants </button>
                          <button onClick={()=>setAcctive("Men's Boot")}  className={` ${acctive == "Men's Boot" ? " text-blue-500" : "text-gray-600 "} py-2 px-4 text-center text-2xl  border-b-2   font-medium outline-none border-none`}> Men's Boot </button>
                          <button onClick={()=>setAcctive("Bag")}   className={` ${acctive == "Bag" ? " text-blue-500" : "text-gray-600 "} py-2 px-4 text-center text-2xl  border-b-2   font-medium outline-none border-none`}> Bag </button>
                          <button onClick={()=>setAcctive("Cap")}  className={` ${acctive == "Cap" ? " text-blue-500" : "text-gray-600 "} py-2 px-4 text-center text-2xl  border-b-2   font-medium outline-none border-none`}> Cap </button>
                          <button onClick={()=>setAcctive("Earphones")}  className={ ` ${acctive == "Earphones" ? " text-blue-500" : "text-gray-600 "} py-2 px-4 text-center text-2xl  border-b-2   font-medium outline-none border-none`}> Earphones </button>
                     </div>
               </div> 
               <div className="grid md:grid-cols-4 gap-5 mt-9">
                  {
                    products && products.map(product=> <ProductCardHome product={product} key={product._id}></ProductCardHome>  )
                  }   
               </div>
          </div>
     );
};

export default Product;