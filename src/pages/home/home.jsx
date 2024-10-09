import Navbar from "../../components/navbar/Navbar";
import tslas from "../../assets/tslas.jpg"
import Card from "../../components/card/card";

const Home = () => {
  return (
    <div className=" select-none h-screen bg-slate-900 flex-col justify-between">
     <div className=" h-1/5"> <Navbar /></div>
      <div className=" w-full h-4/5 flex">
        <div className=" h-full w-1/2 flex flex-wrap justify-center select-none">
        <div className="h-1/6 w-1/4 mr-10 ml-10"><Card /></div>
        <div className="h-1/6 w-1/4 mr-10 ml-10"><Card /></div>
        <div className="h-1/6 w-1/4 mr-10 ml-10"><Card /></div>
        <div className="h-1/6 w-1/4 mr-10 ml-10"><Card /></div>
        </div>
        <div className=" h-full w-1/2 flex items-end justify-center">
        <img src={tslas} alt="Background" className=" h-full w-10/12 pt-5"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
