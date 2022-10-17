import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyToClipboard from 'react-copy-to-clipboard'

import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';

import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import csv from 'react-syntax-highlighter/dist/esm/languages/prism/csv';
import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';
import docker from 'react-syntax-highlighter/dist/esm/languages/prism/docker';
import django from 'react-syntax-highlighter/dist/esm/languages/prism/django';
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';

import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import kotlin from 'react-syntax-highlighter/dist/esm/languages/prism/kotlin';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import mongodb from 'react-syntax-highlighter/dist/esm/languages/prism/mongodb';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import cshtml from 'react-syntax-highlighter/dist/esm/languages/prism/cshtml';


import { FiCopy } from 'react-icons/fi'
import { BsCheck2Square } from 'react-icons/bs'

import './css/code.css'
import { useState,useEffect } from 'react';

SyntaxHighlighter.registerLanguage('graphql', graphql);
SyntaxHighlighter.registerLanguage('django', django);
SyntaxHighlighter.registerLanguage('docker', docker);
SyntaxHighlighter.registerLanguage('dart', dart);
SyntaxHighlighter.registerLanguage('csv', csv);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('bash', bash);

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('php', mongodb);
SyntaxHighlighter.registerLanguage('html', cshtml);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('kotlin', kotlin);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('java', java);

const Code = ({ className,children }) => {
    const [copied,setCopied] = useState(false)
    let language = "";
    try{
        language = className.replace("lang-", "")
        if (language =="ts") language = "js"
    }catch{
        language = "jsx"
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCopied(false)
        },1000)

    },[copied])

  return (
    <div className='code mt-5'>
        <div className=' absolute bg-[#161b22] w-full text-white px-3 py-1 rounded-md border-r-10  -top-5 left-15 z-10'>
        {language}
        </div>
        

       <CopyToClipboard text= { children} onCopy={()=>{setCopied(true)}}>
        <button className='icon copy-icon text-white'>
            { copied ? <BsCheck2Square/>:  <FiCopy/>}
        </button>
       </CopyToClipboard>

   <SyntaxHighlighter
     language= {language}
     style={ materialDark }
   >
    {children}
   </SyntaxHighlighter>

    </div>
  )
}  

export default Code
