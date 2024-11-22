import React from 'react'
import Typewriter from 'typewriter-effect';
import { ChevronRight,ArrowRight} from 'lucide-react'

function Hero({title=null,head,typewriter,final=null}) {
  return (
      <div className='w-full h-screen flex flex-col justify-center items-center p-5 lg:pt-6'>
          <div
              className="flex flex-col gap-3 items-center justify-center text-7xl font-semibold"
              style={{
                  backgroundImage: "url('your-background-image.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backdropFilter: "blur(10px)",
              }}
          >
              {title && (
                  <div className='items-start w-full '>
                      <p className='text-lg'>{title}</p>
                  </div>
              )}
              <p>{head}</p>
              <div className="text-6xl">
                  <Typewriter
                      options={{
                          strings: [typewriter],
                          autoStart: true,
                          loop: true,
                          delay: 50,
                      }}
                  />
              </div>
              {final && (<p className='text-base'>{final}</p>)}
          </div>
          <div className='flex flex-row w-full items-center justify-center pt-3'>
             {!title && (
                  <button className="bg-black text-white rounded-full hover:rounded-l-full hover:rounded-br-none px-4 py-2 h-16 w-52 flex items-center justify-center gap-2 group">
                      <span className="text-md flex items-center"> Get Demo <span className="ml-5">
                          <ChevronRight className="block group-hover:hidden" />
                          <ArrowRight className="hidden group-hover:block" />
                      </span>
                      </span>
                  </button>
             )}
          </div>
      </div>
  )
}

export default Hero