import React from 'react'

import { FiCalendar } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'

function MidiumCard({img,badge,bcolor}) {
  return (
    <div className='w-full lg:w-[400px] my-4 overflow-x-hidden'>
    <div className="img relative rounded-md  hover:ease-in-out transition delay-150 h-[54vw] md:h-[250px] xl:hover:scale-[1.05]" style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover',
    }}>
        <a href="vdsdv" className='absolute top-0 bottom-0 right-0 left-0 '>
            <div className=' flex h-6 items-center w-fit m-3 justify-center  rounded-xl text-white font-semibold' style={{
                backgroundColor:bcolor
            }}><p className='px-3 pb-1 text-[12px] font-bold'>{badge}</p></div> 
            </a>
    </div>

    <div className="content flex flex-col gap-1 mt-2 ">
        <div className='mb-2'>
         <h1 className='font-[600] mx-2 text-xl mt-3 h-8 hover:underline'> Using 7 Marketing Strategies Like The Pros</h1>

        </div>
  
    
    <div className="flex mx-2 text-xs text-gray-600 mt-10">

    <p className='flex items-center gap-1' ><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-500 mx-2 h-4 w-[1px]"></div>
     <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
    </div>

    </div>


    </div>
  )
}

export default MidiumCard