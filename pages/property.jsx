import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function property() {
  return (

   <div>

    <div className='w-full m-3'>
          <p className='text-purple-500 font-semibold text-[1.2rem]'>Project</p>
          <h2 className='uppercase'>Overview</h2>
          <div className='w-[70%] h-16 m-4 max-md:mb-10' >
            <p> This website provides data visualization and risk management services.
             With the help of this website users can visualize the company's risk.
             I built this website during a 12 hour hackathon.

            </p>
          </div>
          
    </div>

    <div className='ml-3'>
      <a
            href='https://github.com/Faizan-Alam-1/CorridorPlatform_Hackathon'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Github Repo</button>
      </a>

        <a
            href='https://corridor-platform-hackathon.vercel.app'
            target='_blank'
            rel='noreferrer'>
            <button className='px-8 py-2 mt-4 m-4'>Visit to the project</button>
        </a>

      
      <Link href='/'>
          <button className='px-8 py-2 mt-4 ml-4'>Back</button>
        </Link>



    </div>


    {/* <div className='m-3 mt-6'>
      <h2 className='uppercase'>video demo</h2>
        <div className="md:hidden aspect-w-4 aspect-h-2 m-[2rem] shadow-2xl rounded-[2rem]">
              <iframe className='rounded-[2rem] shadow-2xl' src="https://www.youtube.com/embed/r9jwGansp1E"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>

        <div className='max-md:hidden mt-4' >
                <div className="aspect-w-4 aspect-h-1 m-[4rem] shadow-2xl rounded-[2rem]">
                    <iframe className='rounded-[2rem] shadow-2xl' src="https://www.youtube.com/embed/r9jwGansp1E"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
        </div>

    </div> */}

    <div className='w-auto m-3 h-44 bg-white border-gray-700 rounded-md shadow-lg shadow-gray-800'>
      <div className='uppercase flex justify-center items-center mt-6'>
        <h5>
          technology
        </h5>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <p className='text-gray-600 py-2 flex items-center ml-3'>
            <RiRadioButtonFill className='pr-1' /> NextJs
          </p>

          <p className='text-gray-600 py-2 flex items-center ml-3'>
            <RiRadioButtonFill className='pr-1' /> Tailwind
          </p>

          <p className='text-gray-600 py-2 flex items-center ml-3'>
            <RiRadioButtonFill className='pr-1' /> ChatJs
          </p>

      </div>

    </div>


   </div>



    
  )
}

export default property
