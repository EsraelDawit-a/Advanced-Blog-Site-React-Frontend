import { React, useState, useEffect } from 'react'
import Slider from 'react-animated-slider';
import './home.css'
import Header from '../components/Header';
import { BsPerson } from 'react-icons/bs'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { BiTime } from 'react-icons/bi'
import Loader from '../components/Loader';
import LargeCard from '../components/LargeCard';

import axios from 'axios';
import MidiumCard from '../components/MidiumCard';


function HomePage() {
    const [loading, setLoading] = useState(true)
    const [udata, setData] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const result = await axios.get('http://localhost:8000/api/post-list/')
        setData(result.data)
        setLoading(false)
        console.log(udata)


    }

    // useEffect(()=>{
    //     fetchData()
    //     console.log(udata)


    // },[])

    const content = [
        {
            image: 'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ce65d5102a377505d5c0_tony-ross-390652-unsplash.jpg',
            title: 'events',
            description: '5 Briliant ways to use Tailwind css',
            button: 'view demo'
        },
        {
            image: 'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cf8995e83769f6810d03_croissant-coworking-1638568-unsplash.jpg',
            title: 'lifestyle',
            description: 'How to find the right template for your product',
            button: 'view demo'
        },
        {
            image: 'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ceec277f09cc78599612_devin-edwards-776947-unsplash.jpg',
            title: 'events',
            description: '22 Tips to start Building Websites you always wanted',
            button: 'view demo'
        },
    ]


    return (
        <div className='flex flex-col items-center '>


          
            <Slider autoplay={2000} touchDisabled={false}  >
                {content.map((item, index) => (

                    <div className=''
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center `, backgroundSize: 'cover' }}
                    >
                        <div className='relative top-0 right-0 left-0 bottom-0 bg-black w-full h-full opacity-[0.5] z-0'>

                        </div>

                        <div className="center absolute top-1/4 left-[18%] text-white  font-bold w-[60%]">
                            <h1 className={`${item.title == 'events' ? 'bg-[#00c2e9]' : ' bg-blue-500'} mx-auto  flex items-center justify-center rounded-xl h-[25px] w-[85px] mb-2`}>{item.title}</h1>
                            <p className='uppercase md:text-4xl text-center'>{item.description}</p>

                            <div className="flex text-xs font-normal items-center justify-center mt-3 md:text-sm underline cursor-pointer">
                                <p className='flex items-center underline gap-1'> <BsPerson /> Evan Jhones</p> <div className="bg-stone-400 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-400 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* Suggestion Posts */}


            <div className="flex flex-wrap justify-start mx-4 xl:justify-center">
                <div className="card flex items-center m-4">
                    <img className='w-24 h-20 rounded-md' src="https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cce99dc2ef40beb40ceb_boris-smokrovic-146294-unsplash-thumb.jpg" alt="" />
                    <div className="content flex  flex-col px-1 w-2/3 font-bold">
                        <p className=' text-xs sm:text-[16px] hover:underline cursor-pointer'>Where can you find free webflow Resources</p>
                        <div className="flex text-xs font-normal items-start md:items-center justify-start md:justify-center mt-3 md:text-sm  cursor-pointer">
                            <p className='flex items-center gap-1'><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-500 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
                           </div>
                    </div>
                </div>
                <div className="card flex items-center m-4">
                    <img className='w-24 h-20 rounded-md' src="https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cd4095e837ad6b8104b6_christian-bolt-728129-unsplash-thumb.jpg" alt="" />
                    <div className="content flex flex-col px-2 w-11/12 font-bold">
                        <p className='  text-xs sm:text-[16px]  hover:underline cursor-pointer '>How to make your template look amazing</p>
                        <div className="flex text-xs font-normal items-start md:items-center justify-start md:justify-center mt-3 md:text-sm  cursor-pointer">
                            <p className='flex items-center gap-1'><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-500 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
                        </div>
                    </div>
                </div>
                <div className="card flex items-center m-4">
                    <img className='w-24 h-20  rounded-md' src="https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cd54277f091ecb5992e3_ivana-cajina-794814-unsplash-thumb.jpg" alt="" />
                    <div className="content flex flex-col px-2 w-11/12 font-bold">
                        <p className='  text-xs sm:text-[16px]    hover:underline cursor-pointer'>27 ways to improve design</p>
                        <div className="flex text-xs font-normal items-start md:items-center justify-start md:justify-center mt-3 md:text-sm  cursor-pointer">
                            <p className='flex items-center gap-1'><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-500 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
                        </div>
                    </div>
                </div>




            </div>




            {/* Recent Posts */}
            <div className="container mx-auto w-screen lg:mx-1  lg:mt-20">
              <div className="flex flex-col items-start  ">

                    <div className="flex justify-between w-full md:w-11/12 lg:w-4/5 xl:w-4/6 mx-auto">
                        <h3 className='font-bold text-xl'>Recent Posts</h3>
                        <div className="flex items-center mx-2 gap-1 group">
                            <p className=' text-[15px] group-hover:text-green-600 cursor-pointer'>View all</p>
                            <div className='border-[1px] border-gray-400 group-hover:border-green-600 '>
                                <IoIosArrowForward className='text-gray-600 text-base group-hover:text-green-600 cursor-pointer' />

                            </div>
                        </div>
                    </div>

                    <div className="divider w-full md:w-11/12 lg:w-4/5 mx-auto xl:w-4/6 bg-gray-400 h-[2px] mt-5">
                        <div className="inner w-10 bg-black h-[2px]"></div>
                    </div>

                </div>

                {/* Post Cards */}
                <div className="flex justify-evenly xl:justify-center xl:gap-10 flex-wrap">
                    <LargeCard />
                    <LargeCard />

                </div>

                <div className="midCard  flex justify-evenly xl:justify-center xl:gap-4 flex-wrap w-full ">
                    <MidiumCard badge={'Events'} bcolor={'#00c2e9'} img={'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cdac95e837798a81058c_will-francis-1070259-unsplash-thumb.jpg'} />
                    <MidiumCard badge={'Lifestyle'} bcolor={'#5d66fe'} img={'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ce40d5102a4c5705d587_aj-garcia-237246-unsplash-thumb.jpg'} />
                    <MidiumCard badge={'Events'} bcolor={'#00c2e9'} img={'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ce84d5102a222205d623_gemma-evans-131781-unsplash-thumb.jpg'} />

                    <MidiumCard badge={'Events'} bcolor={'#00c2e9'} img={'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ce9b9dc2ef29b6b41f2c_form-679321-unsplash-thumb.jpg'} />
                    <MidiumCard badge={'Tech'} bcolor={'#fa345a'} img={'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ceb9370a897c56ee8b68_anna-kolosyuk-481874-unsplash-thumb.jpg'} />
                    <MidiumCard badge={'Culture'} bcolor={'#ffa32d'} img={'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ce2695e837891d810669_chris-barbalis-186421-unsplash-thumb.jpg'} />

                </div>
            </div>
            {/* Subscribe to our NewsLetter */}
            <div className="container mx-auto md:w-4/5 my-10 w-full">
                <div className="border-[1.3px] py-12 px-8 border-gray-400 rounded-md flex flex-wrap items-center md:flex-row md:justify-around   gap-2">
                    <div className="join-text text-2xl font-bold">📬 Join Our Newsletter and Read
                        the New Posts First
                        </div>

                        <div className="form flex flex-col ">
                            <div className="inp flex justify-between">
                                <input type="email" placeholder='Email Address' className='ring-2 ring-white bg-gray-100 px-8 focus:bg-white focus:ring-green-500 focus:border-green-500 rounded-md w-11/12 h-11' />
                                <button className="btn ml-5 bg-green-500 text-white font-bold p-2 px-4 hover:bg-green-600 ease-in-out delay-150 duration-150 rounded-lg">Subscribe</button>
                            </div>
                            <div className="flex mt-2 text-gray-500 gap-2">
                                <input type="checkbox" />
                                <p className="text-xs">I agree to the <a href="#">Terms and Conditions</a></p>
                            </div>
                        </div>
                </div>
            </div>



            {/* Post */}
            {/* <div className="w-full flex justify-center mt-8 flex-wrap mx-4">
                <div className=''>

               
            {
              loading ? <Loader/> :(
                udata.map((item) =>{
                  return  (
    
                        <div key={item.id}>
                            {item.title}
                            <div className="  md:mx-auto prose prose-green prose-sm " dangerouslySetInnerHTML={{__html:item.content}}/>
                        </div>
                    )
                  })
              )
                  
                    
                }
                 </div>
            </div>
             */}
        </div>
    )
}

export default HomePage