import Navbar from "../../components/navbar/Navbar";
import tslas from "../../assets/admissionhome.jpg"
import Card from "../../components/card/card";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-white to-neutral-400 select-none h-screen flex flex-col">
      <div className="bg-orange-500 h-auto">
        <Navbar />
      </div>
      <div className=" w-full flex flex-1 justify-end items-center">  
        <div className=" p-4 mr-10 backdrop-blur-sm bg-white/30 w-1/3 absolute flex flex-wrap rounded-xl select-none items-center">
          <div className="h-1/6 w-2/5 mr-5 ml-5 mt-3 mb-3">
            <Card />
          </div>
          <div className="h-1/6 w-2/5 mr-5 ml-5 mt-3 mb-3 ">
            <Card />
          </div>
          <div className="h-1/6 w-2/5 mr-5 ml-5 mt-3 mb-3">
            <Card />
          </div>
          <div className="h-1/6 w-2/5 mr-5 ml-5 mt-3 mb-3 ">
            <Card />
          </div>
        </div>
        <div className=" h-full w-full">
          <img src={tslas} alt="Background" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>

  );
};

export default Home;
