
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SideCategory from "../Components/SideCategory";
import bannerImg from "../assets/banner.jpg"



const Home = () => {
  const categories = useLoaderData();
    return (
        <div className="">
           <Banner></Banner>
        
            <div className=" -mt-60 ml-24 md:ml-40 lg:ml-72 mb-10 p-6 border rounded-2xl w-3/5">
               <img src={bannerImg} alt="VR-Headset" 
               
               className="w-full h-96 rounded-2xl"
               />
            </div>
          
          <div className="flex gap-8 mx-20 my-20">
          <SideCategory categories={categories}></SideCategory>
          <Outlet></Outlet>
        
          </div>
          
            
         
             


             
        </div>
    );
};

export default Home;