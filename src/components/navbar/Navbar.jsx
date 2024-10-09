import tslaslogo from '../../assets/tslaslogo.png'

const Navbar = () => {
    return (
        <div className=" h-20 text-white flex justify-between items-center p-5">
            <img src={tslaslogo} alt="Tslas Logo" className=' ml-5 h-9 w-auto' />
            <div className=' flex h-20 items-center'>
                <div className=" mr-12 text-2xl font-normal">HOME</div>
                <div className=" mr-12 text-2xl font-normal">ABOUT</div>
                <div className=" mr-12 text-2xl font-normal">FACULTY</div>
                <div className=" mr-12 text-2xl font-normal">CONTACT US</div>
                <div className=" mr-12 border h-min pl-4 pr-4 pt-1 pb-1 hover:bg-white hover:text-black transition-all"><button className=" text-2xl font-medium">TSLAS</button></div>
            </div>
        </div>
    );
};

export default Navbar