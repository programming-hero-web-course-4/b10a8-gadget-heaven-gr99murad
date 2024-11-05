import Heading from "../Components/Heading";
const Dashboard = () => {
  return (
    <div className="">
        <div className="bg-[#9538E2] mb-10">
        <Heading
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Heading>

      <div className="flex gap-5 justify-center pb-5">
        <button className="btn text-[#9538E2] ">Cart</button>
        <button className="btn text-[#9538E2]  ">Wishlist</button>
      </div>

        </div>
     
    </div>
  );
};

export default Dashboard;
