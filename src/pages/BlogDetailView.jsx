import React from 'react'
import { useState, useEffect, useParams } from 'react'
import axios from 'axios'
import { BsPerson } from 'react-icons/bs'
import { FiCalendar,FiCopy } from 'react-icons/fi'
// import { MdContentPaste } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
// import ReactMarkdown from 'react-markdown'
import Code from '../components/Code'
import Markdown from 'markdown-to-jsx'


import MarkdownEditor from '@uiw/react-markdown-editor';



function BlogDetailView() {
  const [detail, SetDetail] = useState([])
  const [data, SetData] = useState()
  const [markdown, setMarkdown] = useState("");


  const getPost = () => {
    const url = "http://localhost:8000/api/post-detail/2/";

    axios.get(url).then(
      (response) => {
       SetData(response.data.content)
       console.log(data)
      }
    ).catch(err=>{
      console.log(err)
    })

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




{/* editor */}
<div className='flex justify-center'>
          
          {/* <button onClick={()=>getPost()}>load</button> */}
       
         


          {/* <Editor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} /> */}
       
        </div>
      

     {/* Markdown */}
     <div   className="mt-10  mark prose prose-stone prose-a:text-green-400 hover:prose-a:text-indigo-500 prose-headings:text-indigo-500 text-stone dark:prose-invert">
        {/* <ReactMarkdown children={data}/> */}
        
      {/* */}

      {/* <MarkdownEditor.Markdown  source={markdown} /> */}
      <Markdown options = {{
        overrides:{
          Code:{
            component:Code,
            // props:{
            //   language:"jsx"
            // }
            
          },

          code:{
            component:Code,
           
          }
        }
      }}> 
         {markdown}
        </Markdown>


     
     </div>

    </div>
  )
}

export default BlogDetailView

