import React from 'react'
import Code from '../components/Code'
import Markdown from 'markdown-to-jsx'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { useState } from 'react';


import MarkdownEditor from '@uiw/react-markdown-editor';



function CreatPost() {
    const [markdown, setMarkdown] = useState("")

  return (
    <div className='mt-16 mx-10'>
        <div className="flex justify-between p-3">
        <div className='bg-green-400 py-1 px-4 hover:bg-green-500 text-white hover:cursor-pointer'>  Back</div>
        <div className='bg-green-400 flex items-center justify-between gap-1 text-lg rounded-md py-2 px-4 text-white hover:cursor-pointer hover:bg-green-500 transition-all'> 
        
         publish
         <AiOutlineCloudUpload/>
        </div>
        </div>

    <MarkdownEditor
      style={{
        'minHeight':'300px'
      }}
      value="# This is a H1  \n## This is a H2  \n###### This is a H6"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />
      {/* */}
      
      <Markdown className=" prose prose-li:marker:text-green-400  dark:prose-li:marker:text-white  prose-headings:underline prose-md md:prose-lg lg:prose-xl dark:prose-invert dark:prose-a:text-green-300 prose-headings:text-indigo-400 prose-a:text-indigo-500 prose-a:hover:text-indigo-700  prose-zinc prose-pre:bg-transparent" options = {{
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
  )
}

export default CreatPost
