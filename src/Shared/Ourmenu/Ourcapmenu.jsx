

const Ourcapmenu = ({ img, title, details }) => {
   
     return (
          <div className=" relative mt-3 rounded-md py-2">
               <img   className=" w-full h-[80vh] relative" src={img} alt="" />
               <div className="  left-48 text-white  flex flex-col items-center justify-center w-2/3 mx-auto  absolute top-60 bg-[#443e3ea7] h-40 ">
                    <h1 className=" text-6xl mb-5 uppercase font-semibold"> {title}</h1>
                    <p className="  uppercase text-2xl font-medium"> {details} </p>
               </div>
          </div>
     );
};

export default Ourcapmenu;