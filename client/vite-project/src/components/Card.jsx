import React from 'react'
import { download } from '../assets'
import { downloadImage } from '../utils'
const Card = ({_id,name,prompt,photo}) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img src={photo} className="w-full h-auto object-cover rounded-xl " alt={prompt} />
      <div className="hidden absolute bottom-0 left-0 group-hover:flex flex-col max-h-[94.5%] right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">
          {prompt}
        </p>
        <div className="mt-5 flex justify-between items-center gap-2 ">
          <div className="flex items-center gap-2">
            <div className='w-7 h-7 rounded-full object-cover items-center  justify-center bg-green-700 flex text-white text-xs font-bold'>
              {name[0]}
            </div>
            <p className="text-white text-sm "> 
            {name}
            </p>
          </div>
          <button type='button' onClick={()=>downloadImage(_id,photo)} className="outline-none bg-transparent border-none  ">
            <img src={download} alt="download" className='w-6 h-6 object-contain invert '/>
          </button>
        </div>
      </div>
    </div>
    // <>
    //   <div className="rounded-xl group shadow-card hover:shadow-cardhover card">
    //     <img src={photo} alt={prompt}  className="w-auto h-auto object-cover"/>
    //     <div className="group-hover:absolute hidden bottom-0 right-0 left-0 bg-[#10131f] max-h-[94.5%] m-2 p-4 rounded-md">
    //       <p className="text-white font-medium text-xl overflow-y-auto ">{prompt}</p>
    //       <div className="flex justibeween items-center mx-3 gap-5 mt-5">

    //       <div className="flex items-center gap-2">
    //         <div className="h-7 w-7 rounded-full  text-white object-cover items-center justify-center text-xs font-bold">
    //           {name[0]}
    //         </div>
    //         <p className="ml-3 text-sm font-bold">{name} </p>
    //       </div>
            
    //             <button type='button' onClick={()=>download(_id,photo)} className=' invert ouline-none bg-transparent border-none'>
    //               <img src={download} alt=""  className='invert w-6 h-6 object-contain'/>
    //             </button>
               
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}

export default Card