import { FaStar } from "react-icons/fa";
import Rating from "react-rating";


const ProductCardHome = ({product}) => {
    
     const { img, ratings, price, seller, name } = product
     return (
          <div className=" relative shadow-lg cursor-pointer  rounded-xl overflow-hidden ">
               <div className=" relative overflow-hidden">
                    <img className="   h-72 w-full hover:scale-110 duration-150   rounded-md" src={img} alt="" />
               </div>
               <div className=" relative p-2   mb-16 ">
                    <h1 className=" text-xl   lowercase  font-semibold"> {name} </h1>
                    <p className="  text-base my-2"> <span  className=" text-xl font-normal ">  Price : </span> ${price} </p>
                    <div className=" flex  my-3 justify-between items-center">
                         <p className=" text-lg font-normal"> Rating: {ratings}</p>
                         <Rating
                              placeholderRating={3.5}
                              emptySymbol={<FaStar className=" text-yellow-500"></FaStar>}
                              placeholderSymbol={<FaStar className=" text-yellow-500"></FaStar>}
                              fullSymbol={<FaStar className=" text-yellow-500"></FaStar>}
                         />
                    </div>
                  
               </div >
                <span className=" bg-[#c103abe3]   font-medium rounded-lg text-[#fff] py-1 px-2 absolute top-0 left-0"> {seller} </span>
               <button   className="   absolute bottom-2     bg-yellow-500 text-white py-1 px-4 rounded-md block w-full"> Add Card</button>
          </div>
     );
};

export default ProductCardHome;