import SectionTitle from "../../../../Component/SectionTitle";

import './Menu.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Menu = () => {
     useEffect(() => {
          AOS.init();
        }, [])
     return (
          <div  className=" my-10 mt-16">

               <div>
                    <SectionTitle subTitle={"---Check it out---"} HeaderTitle={"FROM OUR MENU"}></SectionTitle>
               </div>


               <div className="manubackground">

                    <div className=" flex gap-6 items-center justify-center h-full mx-11 ">
                    <div  data-aos="fade-right">
                     <img className="   rounded-xl" src="https://img.freepik.com/premium-photo/elements-precautions-against-sunstroke-help-hot-weather-taking-care-your-health-summer-bright-sun-heat-poor-wellbeing-water-cool-refreshments-global-warming_771426-3613.jpg?w=996" alt="" />
                    </div>
                    <div  data-aos="fade-left"  className=" text-white   space-y-4 ">
                         <h1 className=" text-2xl   font-medium">  March 20, 2023</h1>
                         <h2 className=" text-xl ">  WHERE CAN I GET SOME?</h2>
                         <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    </div>
                    </div>

               </div>

          </div>
     );
};

export default Menu;