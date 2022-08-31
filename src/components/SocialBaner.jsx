import React from 'react'
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram, BsTypeItalic } from 'react-icons/bs'

function SocialBaner() {
    return (
        <div className="container mx-auto w-full pb-16">
            <div className="socia-icons py-8 w-11/12 flex rounded-lg  bg-gray-300 justify-evenly jus cursor-pointer ">
                <div className="flex items-center font-semibold">
                    <div className="bg-white  rounded-full m-3 p-5">
                        <BsTwitter className="text-lg dark:text-black" />
                    </div>
                    <h1 className=" hidden lg:block dark:text-black">Twitter</h1>
                </div>
                <div className="flex items-center font-semibold">
                    <div className="bg-white  rounded-full m-3 p-5">
                        <BsFacebook className="text-lg dark:text-black" />
                    </div>
                    <h1 className=" hidden lg:block dark:text-black">Facebook</h1>
                </div>
                <div className="flex items-center font-semibold">
                    <div className="bg-white  rounded-full m-3 p-5">
                        <BsInstagram className="text-lg dark:text-black" />
                    </div>
                    <h1 className=" hidden lg:block dark:text-black ">Instagram</h1>
                </div>
                <div className="flex items-center font-semibold">
                    <div className="bg-white  rounded-full m-3 p-5">
                        <BsYoutube className="text-lg dark:text-black" />
                    </div>
                    <h1 className=" hidden lg:block dark:text-black">Youtube</h1>
                </div>

            </div>
        </div>
    )
}

export default SocialBaner
