
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import bannerImg from "../assets/banner.jpg"
import SideCategory from "../Components/sideCategory";


const Home = () => {
    const Categories = useLoaderData();
    return (
        <div className="">
           <Banner></Banner>
        
            <div className=" -mt-60 ml-24 md:ml-40 lg:ml-72 mb-10 p-6 border rounded-2xl w-3/5">
               <img src={bannerImg} alt="VR-Headset" 
               
               className="w-full h-96 rounded-2xl"
               />
            </div>


            <SideCategory></SideCategory>
        </div>
    );
};

export default Home;