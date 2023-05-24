import { useEffect, useState } from "react";
import Allcard from "./Allcard";
import SectionTitle from "../../Component/SectionTitle";



const Allproduct = () => {

     const [products, setProducts] = useState([]);
     const [serach, setSearch] = useState("")
     useEffect(() => {
          fetch(`http://localhost:5000/product?search=${serach}`)
               .then(res => res.json())
               .then(data => setProducts(data))
     }, [serach])



     const handlesearch = () => {
          console.log(serach);
     }



     return (
          <div className=" mt-9 ">
               <div>
                    <SectionTitle subTitle="View All Product" HeaderTitle="All Product"></SectionTitle>
               </div>

               <div className="  flex justify-center items-center my-5 text-center mx-auto">
                    <div className="mb-4 flex justify-center items-center gap-1">
                        
                         <input onChange={(e)=>setSearch(e.target.value)} className="shadow focus:border-blue-400 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Product name" />
                         <button className="block bg-blue-500 text-white py-1 px-3 ext-sm font-bold " >
                              Search
                         </button>
                    </div>
               </div>
               <div className=" grid md:grid-cols-4 gap-5">
                    {
                         products.map(product => <Allcard key={product._id} product={product}></Allcard>)
                    }
               </div>

          </div>
     );
};

export default Allproduct;