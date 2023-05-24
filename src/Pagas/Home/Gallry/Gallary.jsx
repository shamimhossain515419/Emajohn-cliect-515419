import SectionTitle from "../../../Component/SectionTitle";

import Marquee from "react-fast-marquee";

const Gallary = () => {
  return (
    <div className=" mt-6">
      <div>
        <SectionTitle HeaderTitle={"Gallary"} subTitle="Chackout"></SectionTitle>
      </div>


      <div>
        <Marquee pauseOnHover >
           <div className=" m-2 cursor-pointer">
             <div className=" flex gap-6 my-6">
             <div> <img className=" h-48 rounded-md "  src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src=" https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/92e77a8d84d845d19171ad50003f2ea1_9366/SST_Plus_Strap-Back_Hat_White_FZ8569_01_standard.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1e27ae8bbfb647489261ac8e015d181f_9366/Icon_Snapback_Hat_Grey_EX6798_01_standard.jpg " alt="" /></div>
             <div> <img className=" h-48 rounded-md " src=" https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d6ee0177281f42f0a254acb1016aa051_9366/Defender_Backpack_Red_EX7011_01_standard.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src=" https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d6ee0177281f42f0a254acb1016aa051_9366/Defender_Backpack_Red_EX7011_01_standard.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src=" https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg" alt="" /></div>
             </div>
            
             <div className=" flex gap-6 my-6 ">
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9889d39ac10243a2bb0fad1a0097ef07_9366/Essentials_Colorblock_Tee_Black_H14627_21_model.jpg " alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9889d39ac10243a2bb0fad1a0097ef07_9366/Essentials_Colorblock_Tee_Black_H14627_21_model.jpg " alt="" /></div>
             <div> <img className=" h-48 rounded-md " src=" https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a819de9f29c498fae13ab6d01473c4d_9366/Tactical_Lexicon_ADV_Boots_White_EG9385_01_standard.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg " alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/272d5d9cb7b74415a6c9ac8e015a4ccc_9366/Superlite_Hat_Black_EX7048_01_standard.jpg " alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0101e13ac1940208478add1000e953a_9366/NYC_Badge_of_Sport_Logo_Graphic_Tee_White_HE2363_21_model.jpg" alt="" /></div>
             <div> <img className=" h-48 rounded-md " src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/de7b5dc9e5a341b9bf5aad570106ba06_9366/Adicolor_Classics_Trefoil_Tee_Burgundy_H06641_21_model.jpg " alt="" /></div>
             </div>
            
           </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Gallary;