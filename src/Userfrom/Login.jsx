
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import loginLottianimation from "../../public/93385-login.json";

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
     const { Login, GoogleSing } = useContext(AuthContext);
     // const auth=getAuth(app);
     const { register, handleSubmit, watch, } = useForm();
     const onSubmit = data => {
          Login(data.email, data.password).then(result => {
               console.log(result.user);
               Swal.fire('Login Success Full')
          }).catch(error => {
               console.log(error);
               Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.massage}`,

               })
          });
     };

     const handlGooglesng = () => {
          GoogleSing().then(result => {
               console.log(result);
               Swal.fire('Google sing success full')
          }).catch(error => {
               Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.massage}`,

               })
          })
     }



     return (
          /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          <div className=' grid md:grid-cols-2 items-center justify-center mt-7 gap-4'>

               <div className=' overflow-hidden'>

                    <Lottie
                         animationData={loginLottianimation}
                         aria-aria-labelledby="use lottie animation"
                    />
               </div>


               <div className='  mt-8 shadow-xl p-3 '>


                    <form onSubmit={handleSubmit(onSubmit)}>

                         <div >
                              <h1 className=' text-center text-4xl font-semibold  text-[#b300dc]'> Login Now</h1>
                              <div className="grid grid-cols-1  mt-5">

                                   <div className=' my-2'>
                                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                             defaultValue="" {...register("email")} placeholder='your email' />
                                   </div>
                                   <div className=' my-2'>
                                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                             defaultValue="" {...register("password")} placeholder='Password' />
                                   </div>




                              </div>


                         </div>

                         <button className=' mt-6 w-full text-white py-1 text-xl font-medium px-3 rounded-lg  block   bg-[#b300dc]' type='submit'  > Submit</button>



                    </form>
                    <div className="divider">OR</div>
                    <div className="my-3 grid space-y-4">
                         <button onClick={handlGooglesng} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                              <div className="relative flex items-center space-x-4 justify-center">
                                   <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="" />
                                   <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                              </div>
                         </button>
                         <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                          hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                              <div className="relative flex items-center space-x-4 justify-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                   </svg>
                                   <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                              </div>
                         </button>
                         <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                              <div className="relative flex items-center space-x-4 justify-center">
                                   <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                   <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                              </div>
                         </button>
                    </div>
                    <div className='text-xl flex items-center justify-center'>
                         <span> Don not have an account? </span>
                         <Link className=' text-blue-500 font-normal ml-2' to={'/ragister'}>Sing In</Link>
                    </div>
               </div>
          </div>
     );
};

export default Login;