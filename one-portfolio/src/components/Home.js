import React from "react";
import MyImage from "../assests/Tirados_Gonzalez__Fernando.png";
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Soy Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md ">Soy un desarrollador y diseñador de aplicaciones web. Me gusta trabajar en aplicaciones web utilizando tecnologías como React y Tailwind, además de trabajar directamente con HTML y CSS. También sé trabajar con Node JS.</p>

            <div>
              <Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                Portfolio
                <span className="group-hover:rotate-90  duration-300">
                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
        </div>
        <div className="">
          <img src={MyImage} alt="Fernando Tirados" className="rounded-2xl mx-auto w-2/3 border-blue-500 border-4  md:w-full" />
        </div> 
      </div>
    </div>
  )
}

export default Home;