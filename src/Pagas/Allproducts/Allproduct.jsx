import { useEffect, useRef, useState } from "react";
import Allcard from "./Allcard";
import SectionTitle from "../../Component/SectionTitle";
import Ourcapmenu from "../../Shared/Ourmenu/Ourcapmenu";


 
const Allproduct = () => {

     const [products, setProducts] = useState([]);
     const [serach, setSearch] = useState('')
     const searchRef= useRef(null)
     useEffect(() => {
          fetch(`https://y-beta-lilac.vercel.app/product?search=${serach}`)
               .then(res => res.json())
               .then(data => setProducts(data))
     }, [serach])



     const handlesearch = () => {
         setSearch(searchRef.current.value);
     }



     return (
          <div className=" mt-9 ">
                      <div>

                         <Ourcapmenu img={'https://img.freepik.com/premium-photo/pair-converse-shoes-with-green-laces-are-sitting-reflective-surface_842113-1249.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais'} title={"OUR MENU"} details={" Would you like try  boot"}></Ourcapmenu>
                      </div>


               <div>
                    <SectionTitle subTitle="View All Product" HeaderTitle="All Product"></SectionTitle>
               </div>

               <div className="  flex justify-center items-center my-5 text-center mx-auto">
                    <div className="mb-4 flex justify-center items-center gap-1">
                        
                         <input ref={searchRef}  className="shadow focus:border-blue-400 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Product name" />
                         <button onClick={handlesearch} className="block bg-blue-500 text-white py-1 px-3 ext-sm font-bold " >
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