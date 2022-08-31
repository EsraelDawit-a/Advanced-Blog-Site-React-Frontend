import React from 'react'

import { FiCalendar } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'

function LargeCard() {
  return (
    <div className='w-full lg:w-[500px] my-4 overflow-x-hidden'>
    <div className="img relative rounded-md  hover:ease-in-out transition delay-150 h-[64vw] md:h-[350px] xl:hover:scale-[1.05]" style={{
        backgroundImage:'url("https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cdac95e837798a81058c_will-francis-1070259-unsplash-thumb.jpg")',
        backgroundSize:'cover',
    }}>
        <a href="vdsdv" className='absolute top-0 bottom-0 right-0 left-0 '>
            <div className='bg-pink-600 flex h-6 w-fit m-3 justify-center  rounded-xl text-white font-semibold'><p className='px-3 py-auto'>Tech</p></div> 
            </a>
    </div>

    <div className="content flex flex-col gap-1 mt-2 ">
        <div className='mb-2'>
         <h1 className='font-[600] mx-2 text-2xl mt-3 h-8 hover:underline'> Using 7 Marketing Strategies Like The Pros</h1>

        </div>
       <div>   
         <p className='font-[400] text-gray-500 text-sm mx-2  mt-12'>How you write your advertising copy will be based on where you will place your ad. If it’s a billboard ad, you’ll need a super catchy headline. </p>
</div>  
    
    <div className="flex mx-2 text-xs text-gray-600 mt-2">

    <p className='flex items-center gap-1'><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-500 mx-2 h-4 w-[1px]"></div>
     <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
    </div>

    </div>


    </div>
  )
}

export default LargeCard