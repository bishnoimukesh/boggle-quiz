import { Link } from "react-router-dom";
import quizLogo from '../assets/science.png'

const Nav = () => {
    return (
        <div className="w-full h-[10vh] flex justify-between items-center shadow-[0_0_10px_0_rgba(0,0,0,0.2)] 
            bg-gradient-to-r from-blue-100 to-blue-200">
            <div className="brand flex items-center">
                <div className="logo ml-4 md:ml-16 max-w-[3rem]">
                <Link to="/">
                    <img src={quizLogo} alt="logo" />
                </Link>
            </div>
                <h1>Boggle Quiz</h1>
                </div>
            <div className="mr-4 md:mr-16">
                <button className=" w-[120px] p-2 rounded-md text-white bg-blue-400 hover:bg-blue-500 font-medium m-2">
                    Login
                </button>
            </div>
        </div>
    );
};

export { Nav };