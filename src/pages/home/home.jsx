import Navbar from "../../components/navbar/Navbar";
import tslas from "../../assets/tslas.jpg";
import Card from "../../components/card/card";
import { Link } from 'react-router-dom';

import "./home.css"

const Home = () => {
  return (
    <div className="bg">
      <Navbar />
      <div className="homeCardCont">

        <Link to={'./section/publications'}><div className="homeCard">Publications</div></Link>
        <Link to={'./section/talks'}><div className="homeCard">Research Talks</div></Link>
        <Link to={'./section/projects'}><div className="homeCard">Research Projects</div></Link>
        <Link to={'./section/workshops'}><div className="homeCard">Workshops</div></Link>

      </div>
    </div>
  );
};

export default Home;
