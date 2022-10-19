import React from 'react'

function SignUp() {
  return (
    <div className='bg-gradient-to-r from-green-300 via-slate-300  to-green-500 h-screen m-0 p-0'>
    <div className=' flex justify-center md:w-3/5 mx-auto pt-[150px]'>

        <div className=" card w-[500px] flex-col items-center justify-center">
          <h3 className='text-lg flex justify-center md:text-2xl'>
            <span className="text-green-400 mx-2 font-bold">Reader</span>  
            create your account</h3>
             
             

            <div className="forms  h-[470px]  px-10 flex  justify-center pt-5 rounded-md  mt-7 bg-slate-200">
            
            
             <div className="p-3 w-full pt-7 flex flex-col gap-3">
              
             <input className='focus:ring-0 focus:ring-sky-500 px-5 py-2 rounded-sm ring-0' type="text" placeholder='Email' />
              <input type="text" className='px-5 py-2 rounded-sm' placeholder='Username' />
             
              <div className="signbtn bg-black px-4 mt-4 py-2 text-white flex justify-center font-semibold text-lg hover:bg-slate-900 transition-all delay-100 hover:cursor-pointer">
                Sign up
              </div>
              <div className='text-xl text-slate-600 font-bold mx-auto' >or</div>
              <div className="signbtn bg-green-500 px-4 py-2 text-white flex justify-center font-semibold text-lg hover:bg-slate-900 transition-all delay-100 hover:cursor-pointer">
                Sign up with google
              </div>
              <div className="signbtn bg-indigo-500 px-4 py-2 text-white flex justify-center font-semibold text-lg hover:bg-slate-900 transition-all delay-100 hover:cursor-pointer">
                Sign up with facebook
              </div>

              <p className='py-10 text-slate-700 flex justify-center' ><span className="mx-2">Have an Account ?</span>  <a href="#" className=' text-underline text-indigo-500'>Sign in here</a></p>
             </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default SignUp
