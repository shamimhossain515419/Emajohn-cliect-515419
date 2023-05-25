import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useContext, useState } from "react";
 import logo from '../../src/assets/Logo.svg'
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Navber = () => {
     const [acctive, SetAccticve] = useState(false);
    const {user,LogoOut}=useContext(AuthContext)
     const [logout,setlogout]=useState(true)
    const [display,serdisplay]=useState(false)
  
const handlogout=()=>{
     LogoOut().then((result) => {
          console.log(result);
          Swal.fire('logout success full')
        }).catch((error) => {
          // An error happened.
          console.log(error.massage);
        });
}

     return (
          <div className="   fixed top-0  z-50  w-full  max-w-screen-xl mx-auto    shadow-md px-3 bg-[#000] text-white">

               <div className=" md:flex gap-2  justify-between items-center">
                    <div className=" flex justify-between items-center">
                         <h1><Link to={'/'}> <img className="  w-40 object-contain h-20 " src={logo} alt="" /> </Link></h1>
                         <div className="md:hidden">
                              <button onClick={() => SetAccticve(!acctive)}> {acctive ? <FaTimes></FaTimes> : <FaBars></FaBars>} </button>
                         </div>
                    </div>

                    <div className={` mt-5 md:flex gap-3 ${acctive ? 'block' : " hidden"}`}>
                         <div className=" md:flex gap-3  ">
                              <NavLink className={({ isActive }) => isActive ? " text-xl block  font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} to={'/'}>Home</NavLink>
                              <NavLink className={({ isActive }) => isActive ? " text-xl block font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} to={'/allproduct'}>All Product</NavLink>
                              <NavLink className={({ isActive }) => isActive ? " text-xl block  font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} to={'/blog'}>Blogs</NavLink>
                         </div>


                       <div>
                              {user ? <div className=" relative md:flex gap-3 ">
                                   <NavLink to={'/mytoy'} className={({ isActive }) => isActive ? " text-xl  block font-semibold m-3  text-blue-600" : " text-xl  font-semibold m-3  block"} >My Product</NavLink>
                                   <NavLink to={'/addtoy'} className={({ isActive }) => isActive ? " text-xl  block  font-semibold m-3  text-blue-600" : " text-xl  font-semibold m-3  block "} >Add A Product</NavLink>
                                   <img onMouseLeave={()=>serdisplay(false)} onMouseMove={()=>serdisplay(true)} onClick={()=>setlogout(!logout)} className="  cursor-pointer relative h-10 w-10 rounded-full m-2" src={user.photoURL
                                   } alt="" />
                                    <h1 className={` ${display ? "block" : "  hidden "} absolute top-0 right-11 bg-white p-2  text-blue-600  text-lg`} > {user.displayName} </h1>
                                    <div className={`  absolute  top-12  -right-3  opacity-100 z-50 bg-white p-2 rounded shadow-lg  ${logout ?  " hidden": 'block'}`}>
                                      <Link onClick={handlogout}  className="text-xl   block font-semibold m-3  bg-blue-600 py-1 px-4  text-white rounded-md  "> Logout </Link>
                                    </div>

                              </div> : <div className=" md:flex gap-3 items-center ">
                                   <FaUser className=" block m-3"></FaUser>
                                   <Link  to={'/login'} className="text-xl  block font-semibold m-3  bg-blue-600 py-1 px-4  text-white rounded-md  "> Login</Link>
                              </div>
                              }
                         </div>
                         
                       

                    </div>
               </div>

          </div>
     );
};

export default Navber;