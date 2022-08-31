import React from 'react'
import { useState } from 'react'

import { BsBook } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { FaMoon, FaRegLightbulb } from 'react-icons/fa'
import { BsMoonStarsFill } from 'react-icons/bs'
import useDarkMode from '../useDarkMode'
import { Link } from 'react-router-dom';



function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <div className='flex flex-col   bg-white w-full dark:bg-[#1e293b] dark:text-white'>
            <div className='flex h-[60px] justify-around items-center cursor-pointer'>
                <div className='flex  items-center gap-2 group'>
                    <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-3xl">

                        <BsBook className='text-xl text-white font-bold' />

                    </div>
                    <p className='font-bold group-hover:text-green-500 transition ease-linear duration-75'>Reader</p>
                </div>

                <div className="flex items-center gap-8 z-50">
                    {/* w-screen Meues */}
                    <div className="hidden md:flex justify-between gap-8 navs text-[15px] font-semibold  z-50">
                        <div>Intro</div>
                        <div><Link to="/"> Home </Link></div>
                        <div><Link to="/cat"> Categories </Link></div>
                        <div>pages</div>
                    </div>



                    <div className="bg-green-500 hover:bg-green-600 transition ease-linear duration-75 w-10 h-10 flex items-center justify-center rounded-xl">
                        <AiOutlineMail className='text-xl text-white font-bold' />
                    </div>
                    {
                        isMobile ? (
                            <div onClick={() => setIsMobile(!isMobile)} >
                                <AiOutlineClose className='text-xl' />
                            </div>
                        ) :
                            (
                                <div onClick={() => setIsMobile(!isMobile)} >
                                    <AiOutlineMenu className='text-xl' />
                                </div>
                            )
                    }
                    <div onClick={() => setTheme(colorTheme)} className='flex  text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' data-tooltip-target="tooltip-light" data-tooltip-style="light">
                        {
                            colorTheme === 'dark' ? (<BsMoonStarsFill className='animate-bounce' onClick={() => setTheme(colorTheme)} />) : (<FaRegLightbulb className='animate-bounce' onClick={() => setTheme(colorTheme)} />)

                        }


                        <div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                            Change Screen Theme
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>

                </div>



            </div>

            {/* mobile drop down */}
            {isMobile ?

                (<div className=" flex flex-col  z-50 bg-white w-full justify-start dark:bg-[#1e293b]">
                    <div className="input border border-green-500 rounded-lg m-2 p-2 flex items-center gap-2  w-4/5 mx-4">
                        <div className="search"><AiOutlineSearch /> </div> <input type="text" className='search dark:bg-[#1e293b] border-white focus:border-white' placeholder='Search ...' />
                    </div>
                    <div className="navs text-sm flex flex-col justify-start items-start px-4 gap-4 mb-4 font-bold text-gray-800 mx-4 dark:text-white">
                        <div>Intro</div>
                        <div> <Link to="/"> Home </Link> </div>
                        <div className='group cursor-pointer'>Catagories
                            <div className="gap-2  mt-2 text-[13px]  hidden group-hover:flex transition-all ease-linear duration-300 flex-col items-start ml-4 dark:text-white text-gray-800 justify-center">
                                <div>Culture</div>
                                <div>events</div>
                                <div>lifestyle</div>
                                <div>Tech</div>
                            </div>

                        </div>
                        <div>Pages</div>


                    </div>


                </div>
                ) : ''}
               {
                isMobile && ( <div onClick={()=>setIsMobile(!isMobile)} className=" back-shadow absolute h-screen z-0  top-0 bottom-0 right-0 left-0 w-screen bg-gray-900 opacity-70  ">
                  
                </div>)
               }

        </div>
    )
}

export default Header