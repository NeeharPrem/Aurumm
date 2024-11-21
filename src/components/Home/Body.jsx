import React from 'react'
import Card from './Card'
import Features from './Features';
import Details from './Details';
import FutureSection from './FutureSection'

function Body() {
    let cardData = [
        {
            head: 'AU PAY',
            info: 'An Exclusive Gold Savings Scheme Payment App',
            description: 'Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner.'
        },
        {
            head: 'AU SALES',
            info: 'All-Round Inventory Management Assistant',
            description: 'If you\'re looking for a holistic store management solution, then AU Sales is the only app you need!'
        },
        {
            head: 'AU SHOP',
            info: 'Give Your Fine Jewellery A Sleek Online Platform!',
            description: 'Are you ready to give your customers the ultimate online jewellery shopping experience? Discover AU Shop and let\'s begin!'
        }
    ];

  return (
    <div className='bg-black w-full min-h-full'>
          <div className="min-h-36 flex items-center justify-center">
              <div className="opacity-75 bg-gradient-to-r from-transparent via-[#ffecc8] to-transparent h-[1px] w-full">
              </div>
          </div>
       <div className='grid grid-cols-2 p-5 gap-4 mt-3'>
        <div className='p-2 text-white'>
                  <div className='w-60 h-16 items-center border border-[#fff3] pt-5 rounded-full mb-2'>
                      <p className='text-white flex flex-row justify-center items-center gap-2'>
                          <span>
                              <div className='bg-yellow-300 w-3 h-3 mx-auto rounded-full'></div>
                          </span>
                          JEWELLERY STORE APP SUITE
                      </p>
                  </div>
                  <div className='ml-3'>
                      <p className='text-5xl font-extrabold'>Simplified Operations,</p>
                      <p className='text-5xl font-extrabold'>Increased Profits.</p>
                      <div className="text-lg break-words mt-2">
                          <p className='flex flex-col gap-2'>
                              AURUMM revolutionizes the way jewellery stores operate, offering seamless solutions for gold saving schemes, online sales platforms, and inventory management. Streamline operations, increase productivity and double your revenue with our longstanding cutting-edge solutions! <br />
                              Welcome to a future of innovation, efficiency, and brilliance. <br />
                              Welcome to AURUMM.
                          </p>
                      </div>
                  </div>
        </div>
        <div className='w-full h-full p-3'>
                  <div className='p-4'>
                      <img src='https://aurumm.co/_next/static/media/new_ausale.20a8529c.svg' />
            </div>
        </div>
     </div>
     <div className='w-full p-3 text-white'>
              <div className='p-3'>
                  <div className='w-40 h-16 items-center border border-[#fff3] pt-5 rounded-full mb-2'>
                      <p className='text-white flex flex-row justify-center items-center gap-2'>
                          <span>
                              <div className='bg-yellow-300 w-3 h-3 mx-auto rounded-full'></div>
                          </span>
                          FEATURED APPS
                      </p>
                  </div>
                  <div className='ml-3'>
                      <p className='text-5xl font-extrabold'>AURUMM for Your Jewellery Business</p>
                  </div>
              </div>
              <div className='grid grid-cols-3 p-5 gap-4'>
                  {cardData.map((item, index) => {
                      return (
                          <Card
                              key={index}
                              head={item.head}
                              info={item.info}
                              description={item.description}
                          />
                      );
                  })}
              </div>
     </div>
        <Features/>
        <Details />
          <FutureSection/>
    </div>
  )
}

export default Body