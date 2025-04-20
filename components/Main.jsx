import React from 'react'
import { AiFillLinkedin , AiOutlineGithub  , AiFillMail} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import Typewriter from 'typewriter-effect';

function Main() {
  return (
    <div className='flex flex-col items-center mt-20'>
      <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome, to my portfolio website <span className='text-[1.5rem]'>👋</span></p>
      <h1 className='max-md:hidden m-8'>Hi, I'm 
      <span><h2 className='tracking-widest'>
          <Typewriter
                      options={{
                        strings: ['A Web Developer', 'An Engineer' ],
                        autoStart: true,
                        loop: true,
                      }}
           />
        </h2></span> </h1>

        {/* I'm looking for a position in the front end development. */}


      <p className='py-2 max-md:hidden text-gray-600 max-w-[50%] m-auto tracking-widest '>
       I am currently working as an entry-level React Developer at TCS, gaining hands-on experience in React development, building user interfaces, and working with GraphQL APIs
</p>
{/*       <h3 className='mt-2 max-md:hidden uppercase tracking-widest'>I'm looking for 
      <span> */}

{/*       <Typewriter
                  options={{
                    strings: ["SDE internship"],
                    autoStart: true,
                    loop: true,
                  }}
                />
 */}
{/*       </span></h3> */}
   

       <div className='max-w-[100%] m-auto my-7 md:hidden'>
            <h1>Hi, I'm</h1>
            <span><h2 className='my-3'>
                  <Typewriter
                  options={{
                    strings: ['A Web Developer', 'An Engineer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </h2></span>
        </div>

        <div>
            <p className='py-1 text-gray-600 max-w-[60%] md:hidden m-auto'>
            Hey everyone ! I'm faizan Alam ,  a third-year computer science student with a passion for 
            DevOps and web development .I'm fascinated by the intersection of development and operations, 
            as well as my desire to design user-friendly, visually stunning applications.</p>
            <h3 className='mt-2 ml-[6rem] md:hidden'>I'm looking for 
            <span>

              <Typewriter
                          options={{
                            strings: ["SDE internship"],
                            autoStart: true,
                            loop: true,
                          }}
                        />

            </span></h3>

        </div>

        <div className='flex'>

            
            <a
            href='https://www.linkedin.com/in/faizan369/'
            target='_blank'
            rel='noreferrer'>

               <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiFillLinkedin size={30} className='text-blue-700'/></div>
          </a>   


          <a
            href='https://github.com/Faizan-Alam-1'
            target='_blank'
            rel='noreferrer'>

              <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiOutlineGithub size={30} className='text-black'/></div>
          </a> 


          <a
            href='https://mail.google.com/mail/u/?authuser=faizanalam2030@gmail.com'
            target='_blank'
            rel='noreferrer'>

            <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiFillMail size={30} className='text-red-600'/></div>
          </a>


          <a
            href='https://wa.me/8210410103'
            target='_blank'
            rel='noreferrer'>

              <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><RiWhatsappFill size={30} className='text-green-600'/></div>
          </a>           

        </div>

           
    </div>
   
  )
}

export default Main
