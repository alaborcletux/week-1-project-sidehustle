import React, { Fragment } from "react";
import Linkdin from './Linkdin.png'
import tweeter from './tweeter.png'
import Rectangle from './Rectangle .png'



const Navbar = () => {
    return (
        <Fragment>
            {/* Navbar */}
            <nav className=" ">
                <div className="md:flex justify-between flex-row ">


                    <div className="flex flex-col md:flex-row  pl-10 pt-6">
                        <div className="flex flex-col space-y-10 md:flex-col">

                            {/* LOGO */}
                            <div className="hidden md:flex flex-col md:flex-row ">
                                <h1 className="font-bold text-3xl md:text-3xl "> <a href="">Odikeme Fun-ebi</a> </h1>

                                {/* MENUBAR */}
                                <div className="flex flex-col space-x-4 mx-10  md:flex-row md:pt-2 ">
                                    <a href="#">About Me</a>
                                    <a href="#">Service</a>
                                    <a href="#">Project</a>
                                    <a href="#">Contact Me</a>
                                </div>
                            </div>

                            <div className="flex flex-col pt-20 space-y-4 md: pb-10 leading-relaxed">
                                <h1 className="max-w-md  text-center text-[#0000FF] md:text-left">HI THERE</h1>
                                <h2 className="max-w-md  text-center  font-bold text-[#0000FF] text-1xl md:text-left ">I AM ODIKEME FUN-EBI</h2>
                                <h1 className="max-w-md text-center font-bold text-4xl md:text-left leading-relaxed">A Top-notch Developer,
                                    Writer and Mentor.
                                </h1>
                                <div className="flex flex-row mx-auto space-y-1   md:flex-row space-x-4 md:mx-0  ">
                                    <a href=""> <img  src={tweeter} alt="" /></a>
                                    <a href=""> <img src={Linkdin} alt="" /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    {/* Media icons */}
                    <div className="flex flex-col md:flex-row bg-[#D3DCF8] ">

                        <div className="hidden md:flex  md:absolute space-x-4  pl-[470px] pt-4">
                            <a href="#"><img src={Linkdin} alt="" /> </a>
                            <a href="#"> <img src={tweeter} alt="" /></a>
                        </div>

                        <div className="flex flex-col md:pt-20">
                            <img src={Rectangle} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;