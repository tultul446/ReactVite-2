import React from 'react'

import Container from '../common/Container';
import Button from '../common/Button';
import { ActivityData, DocumentData, LocationData } from '../../lib/db';
const Location = () => {
  return (
   
      
    <section>
     <Container>
      
        {/* Header section start */}

     <header className='lg:flex justify-between items-center bg-[#E4E4E7] w-full lg:w-[1340px] mx-auto lg:-ml-9 p-2 md:p-3 lg:p-5 ' >
   <div className='md:space-y-0 space-y-3'>
    <p className='text-sm text-[#71717A]'>Incidents - DR-4699 March 2023 Severe Storms </p>

    <div className='flex gap-2'>
        <img src="./i12.png" alt="" />
    <h1 className='text-[18px] font-bold  '>DR-4699 March 2023 Severe Storms</h1>

    </div>
      </div>
      <div className='md:mb-0 mb-3 md:mt-0 mt-3'>
        <Button/>
        </div>
      </header>
      
     

     {/* Header section end */}

         <section className='grid lg:grid-cols-2 grid-cols-1 gap-[40px] mb-15'>

      <section className='w-[680px] mt-5'>
       <div className='flex gap-1 '>
        <span className='mt-4 '>
            <img src="./i19.png" alt=""  className='w-[30px] h-[30px]'/>
        </span>
        <span>
        <p className='text-sm text-[#6B7280]'>Location</p>
        <h3 className='text-[16px] lg:text-[20px] font-bold'>Tulare County,  Los Angles, CA 23415</h3>
        </span>
     
        
       </div>

       <div className='flex gap-1 mt-5'>
        <span className='mt-4 '>
            <img src="./i20.png" alt="" className='w-[30px] h-[30px]'/>
        </span>
        <span >
        <p className='text-sm text-[#6B7280]'>Approx. Cost:</p>
        <h3 className='text-[16px] lg:text-[20px] font-bold'>$60,607,456.00</h3>
        </span>
       </div>


   <div className='w-[650px] h-[1px] bg-[#E4E4E7] mt-5'></div>

<div className='mt-5'>
    <h2 className='text-[14px] font-bold text-[#000000] w-[677] '>Description</h2>
    <p className='text-[#71717A] text-sm mt-4'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
</div>


<div className='w-[650px] h-[1px] bg-[#E4E4E7] mt-7'></div>


            {/* Location area start */}


           <div>
             <div className='flex justify-between items-center mt-5 '>
              <h2 className='lg:w-[604px] text-[14px] font-semibold'>Locations</h2>
              <a href="#" className='text-sm underline text-[#71717A]'>See all</a>
             </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5 h-auto ml-6 md:ml-2'>
            
               {LocationData.map((item, i) =>(
                 <div key={i}>
                <img src={item.image} alt="" className='w-[214.2px]  p-2' />
                 <h3 className='font-semibold w-[170px] h-[10px] text-[18px]  p-2'>{item.heading}</h3>
                 <p className='w-[209px] text-sm  p-2 mt-3 text-[#71717A] '>{item.des}</p>
                 <p className='text-[14px] font-bold'>{item.p}</p>
              </div>
                ))}
               </div>
               </div>


         {/* Location area end */}

  
         {/* Activities area start */}


         <div className='w-[650px] h-[1px] bg-[#b8b8bd] mt-7'></div>

         <div>
         <div className='flex justify-between items-center mt-5 '>
              <h2 className='lg:w-[604px] text-[14px] font-semibold'>Activities</h2>
              <a href="#" className='text-sm underline text-[#71717A]'>See all</a>
             </div>
        
        {ActivityData.map((item, i) => (
     <div key={i} className='flex gap-3 mt-6 bg-[#F4F4F5] w-full lg:w-[679px] px-[10px] py-[15px] rounded-[10px] hover:bg-[#f0dfd2] hover:shadow-lg group'>
     <img src="./image9.png" alt="" className='px-3'/>
     <span>
     <h1 className='w-[106px] text-[16px] font-bold text-shadow-lg'>Activity name</h1>
     <p className='text-[14px] text-[#585860]'>Location name
     16.12212, -122.1424</p>
     <h3 className='w-[106px] text-[16px] font-bold text-shadow-lg'>$1,456,654.00</h3>
     </span>
   </div>

        )) }

        </div>


 {/* Activities area end */}

  {/* Document area start */}
  <div className='w-[650px] h-[1px] bg-[#b8b8bd] mt-7'></div>
  <div>
  <div className='flex justify-between items-center mt-5 '>
              <h2 className='lg:w-[604px] text-[14px] font-semibold'>Documents</h2>
              <a href="#" className='text-sm underline text-[#71717A]'>See all</a>
             </div>
        
        {DocumentData.map((item, i) => (
     <div key={i} className='flex gap-3 mt-6 bg-[#F4F4F5] w-full lg:w-[679px] px-[10px] py-[15px] rounded-[10px] hover:bg-[#f0dfd2] hover:shadow-lg group'>
     <img src="./image9.png" alt="" className='px-3'/>
     <span>
     <h1 className='w-[106px] text-[16px] font-bold text-shadow-lg'>Activity name</h1>
     <p className='text-[14px] text-[#585860]'>Location name
     16.12212, -122.1424</p>
     <h3 className='w-[106px] text-[16px] font-bold text-shadow-lg'>$1,456,654.00</h3>
     </span>
   </div>

        )) }

        </div>






  {/* Document area end */}


      </section>


        {/* section 2 */}

     <section className='lg:w-[680px] lg:ml-9 -mr-0 mt-9 '>
        <img src="./image1.png" alt="" className='w-[500px] hover:shadow-lg' />
     </section>

         </section>
         


        </Container> 
    </section>
  )
}

export default Location
