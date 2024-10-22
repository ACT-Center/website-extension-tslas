import Navbar from "../../components/navbar/Navbar";
import tslas from "../../assets/admissionhome.jpg";
import Card from "../../components/card/card";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-white to-neutral-400 select-none h-screen w-full flex flex-col">
      <Navbar />
      <div className=" w-full flex flex-1 justify-start items-end">
        <div className=" mb-10 p-4 min-[550px]:p-2 ml-10 max-[800px]:ml-5 backdrop-blur-sm bg-white/30 w-fit absolute flex max-[550px]:flex-col rounded-xl select-none items-center">
          
          <div className=" flex">
            {/* Publications */}
          <div className="h-1/6 w-fit mr-2 ml-2 mt-3 mb-3">
            <Link to="/section/publications">
              <Card title="PUBLICATIONS" url="https://www.ripublication.com/images/Journal-Banner.jpg" />
            </Link>
          </div>
          
          {/* Projects */}
          <div className="h-1/6 w-fit mr-2 ml-2 mt-3 mb-3 ">
            <Link to="/section/projects">
              <Card title="PROJECTS" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55dfozxP5M45HEObEdL6kgkD2MWuzu8BgrQ&s" />
            </Link>
          </div>
          </div>
          
          <div className=" flex">
            {/* Workshops */}
          <div className="h-1/6 w-fit mr-2 ml-2 mt-3 mb-3">
            <Link to="/section/workshops">
              <Card title="WORKSHOPS" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFzr-gQX7TH3opIAhH4DKQUZ6jxEkY1fStA&s" />
            </Link>
          </div>
          
          {/* Talks */}
          <div className="h-1/6 w-fit mr-2 ml-2 mt-3 mb-3 ">
            <Link to="/section/talks">
              <Card title="TALKS" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcyqDeHW9UA7HqhBLJ6YOECaWvHXLETBOoA&s" />
            </Link>
          </div>
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
