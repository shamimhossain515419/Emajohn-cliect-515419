

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
     return (
          <div >
               <Carousel>
                <div data-aos="zoom-in-right">
                    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg" />
     
                </div>
                <div >
                    <img src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" />

                </div>
                <div>
                    <img src="https://img.freepik.com/premium-psd/promotion-product-sale-facebook-cover-template_160623-115.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-1640.jpg?size=626&ext=jpg&ga=GA1.1.824354190.1681013433&semt=ais" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-vector/modern-product-promotion-post-design-template_700230-25.jpg?size=626&ext=jpg&ga=GA1.2.824354190.1681013433&semt=ais" />
                    
                </div>
            </Carousel> 
          </div>
     );
};

export default Banner;