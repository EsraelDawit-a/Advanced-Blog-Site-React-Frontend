import React from "react"
import ListCard from "../components/ListCard"
import MidiumCard from "../components/MidiumCard"
import HomePage from "./HomePage"
import { IoIosArrowForward } from 'react-icons/io'
import SocialBaner from "../components/SocialBaner"
import Tags from "../components/Tags"
import { Link } from "react-router-dom"

export default function Categories() {

    return (
        <>
            {/* Background Image Layer */}
            <div className=" -z-10 fixed  top-10 bottom-0 left-0 right-0" style={{
                backgroundImage: "url('https://assets.website-files.com/5d04fc355b8916913bbf365a/5d04fc355b8916b7f2bf374f_tomasz-zagorski-1097343-unsplash.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: "50% 50%, 50% 50%",
                backgroundAttachment: "scroll, fixed",
                height:"45%"
            }}>
                <div className='relative top-0 right-0 left-0 bottom-0 bg-black w-full h-full opacity-[0.5] z-0'>
                </div>

            </div>


            <div className="  mt-10  ">
                <div className="mt-[35%] flex justify-center md:mt-[15%] pb-10 ">
                    <h1 className="text-2xl font-bold md:text-5xl text-white">Culture Category</h1>
                </div>
                {/*  */}
                <div className="bg-white  dark:bg-[#0f172a] dark:text-white   mt-20">
                    <div className="menues  dark:text-white pt-5 pl-5  text-sm gap-2 text-gray-800 flex justify-between w-fit">
                        <div>Home</div>
                        <div>/</div>
                        <div>Categories</div>
                        <div>/</div>
                        <div>Culture</div>

                    </div>


                    <div className="content-list mb-10 flex flex-col lg:flex-row justify-between">
                        <div className="flex-col items-end ">
                            <Link to="/blog/dafafas" ><ListCard /></Link>
                            
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard />
                        </div>


                        <div className="choose-menues sm:mx-16 px-4 lg:w-3/5 md:px-1 mb-15 mt-10">
                            {/* Categoies */}
                            <div className="categories">
                                <div className="header">
                                    <h1 className="text-black dark:text-white text-3xl font-bold">Categories</h1>
                                    <div className="divider bg-gray-300 dark:text-white h-1 w-11/12 md:w-3/4 mt-5">
                                        <div className="black-div bg-black  dark:bg-green-400 h-1 w-[25%]"></div>
                                    </div>
                                </div>

                                <div className="cont mt-5 flex   ">
                                    {/* Category components */}
                                    <div className="flex w-11/12  md:w-3/4 mt-5 px-5 py-3 justify-between items-center border-2 border-gray-400 hover:border-gray-700  hover:cursor-pointer rounded-lg">
                                        <div className="flex items-center w-[125px] justify-between">
                                            <div className="line h-1 w-10 bg-yellow-400"></div>
                                            <div className="culture text-black text-lg font-semibold  dark:text-white">Culture</div>
                                        </div>

                                        <div className="arrow text-gray-600  dark:text-white"><IoIosArrowForward /></div>
                                    </div>

                                    {/* Category components */}
                                    <div className="flex w-11/12  md:w-3/4  mt-5 px-5 py-3 justify-between items-center border-2 border-gray-400 hover:border-gray-700  hover:cursor-pointer rounded-lg">
                                        <div className="flex items-center w-[125px] justify-between">
                                            <div className="line h-1 w-10 bg-sky-400"></div>
                                            <div className="culture text-black text-lg font-semibold  dark:text-white">Events</div>
                                        </div>

                                        <div className="arrow text-gray-600  dark:text-white"><IoIosArrowForward /></div>
                                    </div>
                                    {/* Category components */}
                                    <div className="flex w-11/12  md:w-3/4  mt-5 px-5 py-3 justify-between items-center border-2 border-gray-400 hover:border-gray-700  hover:cursor-pointer rounded-lg">
                                        <div className="flex items-center w-[125px] justify-between">
                                            <div className="line h-1 w-10 bg-blue-700"></div>
                                            <div className="culture text-black  dark:text-white text-lg font-semibold">Lifestyle</div>
                                        </div>

                                        <div className="arrow text-gray-600  dark:text-white"><IoIosArrowForward /></div>
                                    </div>
                                    {/* Category components */}
                                    <div className="flex w-11/12 md:w-3/4  mt-5 px-5 py-3 justify-between items-center border-2 border-gray-400 hover:border-gray-700  hover:cursor-pointer rounded-lg">
                                        <div className="flex items-center w-[100px] justify-between">
                                            <div className="line h-1 w-10 bg-red-500"></div>
                                            <div className="culture text-black  dark:text-white text-lg font-semibold">Tech</div>
                                        </div>

                                        <div className="arrow text-gray-600  dark:text-white"><IoIosArrowForward /></div>
                                    </div>

                                </div>

                            </div>


                            {/* Tags */}
                            <Tags/>

                            {/* Ads here */}
                            <div className="adds ml-5 md:ml-0 md:mx-auto mt-10 mb-10 h-[500px]">
                                <a href="adad">
                                    <div className=" h-full w-[100%]  lg:w-[370px]  bg-slate-500" style={{
                                        backgroundImage: "url('https://assets.website-files.com/5d04fc355b8916913bbf365a/5d0b6dc92ddabc5fb7819703_banner-sidebar-p-500.jpeg')",
                                        backgroundSize: 'cover',
                                        
                                        
                                    }}></div>
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* Social Icons */}
                    <SocialBaner/>

                </div>
              
            </div>





        </>
    )
}