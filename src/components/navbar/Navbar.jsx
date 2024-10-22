import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tslaslogo from '../../assets/tslaslogo.png'
import "./navbar.css"
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="navTop">
                <div className="navLinks">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className='navLinks'>
                    <div className="navLink">TSLAS CAMPUS LIFE</div>
                    <div className="navLink">EVENTS</div>
                    <div className="navLink">Dean's Office</div>
                    <div className="navLink">CONTACT US</div>
                    <div className="navLink">EDUCATORS FOR HUMANITY</div>
                </div>
            </div>

            <div className="navBot">
                <img src={tslaslogo} alt="Tslas Logo" className='h-9 w-auto ' />
                <div className='navLinks'>
                    <div className="navLink">HOME</div>
                    <div className="navLink">ABOUT US</div>
                    <div className="navLink">FACULTY</div>
                    <div className="navLink" style={{color: "#f2711c"}}>RESEARCH</div>
                    <div className="navLink">ACADEMICS</div>
                    <div className="navLink">ADMISSIONS</div>
                    <div className="navLink">GLOBAL CONNECT</div>
                    <div className="navLink">MARIHE</div>
                </div>
            </div>

        </div>
    );
};

export default Navbar