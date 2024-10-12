import tslaslogo from '../../assets/tslaslogo.png'

const Navbar = () => {
    return (
        <div className=" bg-white border-b-2 select-none h-16 flex justify-between items-center p-5">
            <img src={tslaslogo} alt="Tslas Logo" className=' ml-12 h-9 w-auto ' />
            <div className=' flex h-20 items-center'>
                <div className=" mr-12 text-2xm font-normal">HOME</div>
                <div className=" mr-12 text-2xm font-normal">ABOUT</div>
                <div className=" mr-12 text-2xm font-normal">FACULTY</div>
                <div className=" mr-12 text-2xm font-normal">CONTACT US</div>
                <div className=" bg-yellow-500 mr-12 border h-min pl-4 pr-4 pt-1 pb-1 hover:bg-orange-500 hover:text-white transition-all"><button className=" text-2xl font-medium">TSLAS</button></div>
            </div>
        </div>
    );
};

export default Navbar