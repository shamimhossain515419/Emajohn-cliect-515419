import Banner from "../Banner/Banner";
import Gallary from "../Gallry/Gallary";
import Product from "../Product/Product";
import Menu from "./Menu/Menu";


const Home = () => {
     return (
          <div>
             <Banner> </Banner> 
             <Gallary></Gallary>
             <Menu></Menu>
           <Product></Product>
          </div>
     );
};

export default Home;