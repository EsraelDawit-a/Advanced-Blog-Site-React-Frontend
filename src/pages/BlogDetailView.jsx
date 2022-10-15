import React from 'react'
import { useState, useEffect, useParams } from 'react'
import axios from 'axios'
import { BsPerson } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import md from'./sample.markdown'

function BlogDetailView() {
  const [detail, SetDetail] = useState([])

  const getPost = () => {
    const url = "http://localhost:8181/posts/";

    axios.get(url).then(
      (response) => {
        console.log(response.data)
      }
    )

  }

  useEffect(() => {

    getPost()
  }, [])

  const item = {
    image: 'https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08ceec277f09cc78599612_devin-edwards-776947-unsplash.jpg',
    title: 'events',
    description: '5 Briliant ways to use Tailwind css',
    button: 'view demo'
  }

  return (
    <div className='flex flex-col items-center '>
      <div className='h-[450px] w-full md:h-[650px] mt-10'

        style={{ 
          // backgroundColor:"red",
          background: `url(${item.image}) no-repeat center`,
          backgroundSize: 'cover'
          
        }}
      >
        <div className='relative top-0 right-0 left-0 bottom-0 bg-black w-full h-full opacity-[0.5] z-0'>

        </div>

        <div className="flex flex-col items-start justify-start absolute bottom-1/2 md:bottom-1/4 left-[10%] text-white  font-bold  w-[60%] md:w-[52%]">
          <h1 className={`${item.title == 'events' ? 'bg-[#00c2e9]' : ' bg-blue-500'} flex items-center justify-center rounded-xl h-[25px] w-[85px] mb-2`}>{item.title}</h1>
          <p className='uppercase text-3xl md:text-5xl text-start'>{item.description}</p>

          <div className="flex text-xs font-normal items-center justify-center mt-3 md:text-sm underline cursor-pointer">
            <p className='flex items-center underline gap-1'> <BsPerson /> Evan Jhones</p> <div className="bg-stone-400 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><FiCalendar /> Nov 5,2018</p> <div className="bg-stone-400 mx-2 h-4 w-[1px]"></div> <p className='flex items-center gap-1'><BiTime /> 4 min read</p>
          </div>
        </div>
      </div>


      

     {/* Markdown */}
     <div className="mt-10 mark prose prose-stone prose-a:text-green-400 hover:prose-a:text-indigo-500 prose-headings:text-indigo-500 text-stone dark:prose-invert">

      <h2>What’s a Rich Text element?</h2>
          <p>
     The rich text element allows you to create and format headings, 
     paragraphs, blockquotes, images, and video all in one place instead of 
     having to add and format them individually. Just double-click and easily create content.
      <br />
      <a href="#">Download source code here.</a>
     </p>
     
     <h4>Static and dynamic content editing</h4>
     
     <p> A rich text element can be used with static or dynamic content. 
     For static content, just drop it into any page and begin editing. For dynamic content, add a rich 
     text field to any collection and then connect a rich text element to that field in the settings panel. 
     Voila!</p>
     <blockquote>
      solve the code before you write!
     </blockquote>
     <pre>
      <code>
        for i in range(10):
            print("jkjdakd")
      </code>
     </pre>

 <h4>How to customize formatting for each rich text</h4>
 <p> Headings, paragraphs, blockquotes, figures, images, 
     and figure captions can all be styled after a class is added to the rich text element using the 
     "When inside of" nested selector system.</p>

     
     </div>
    </div>
  )
}

export default BlogDetailView

