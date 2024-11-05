
import Banner from "../Components/Banner";
import CardSection from "../Components/CardSection";
import Product from "../Components/Product";
import bannerImg from "../assets/banner.jpg"



const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
        
            <div className=" -mt-60 ml-24 md:ml-40 lg:ml-72 mb-10 p-6 border rounded-2xl w-3/5">
               <img src={bannerImg} alt="VR-Headset" 
               
               className="w-full h-96 rounded-2xl"
               />
            </div>

          <CardSection></CardSection>
            
         
             


             
        </div>
    );
};

export default Home;