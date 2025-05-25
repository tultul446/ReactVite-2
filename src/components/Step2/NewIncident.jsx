import React from 'react'
import Container from '../common/Container'
import ButtonCn from './ButtonCn'
import { NewIncidentData } from '../../lib/db'
import { Link, useNavigate } from 'react-router'

const NewIncident = () => {

  const navigate = useNavigate();
 
  const gotoNewPage = () => {
    navigate('/NewIncidentFrom')
  }
  


  return (
    <section className='h-auto'>
      <Container >

          {/* New Incident Header section */}
        <header className='md:-ml-9 w-[1340px] bg-[#E4E4E7] py-5 px-10'>

           <div className='space-y-3 md:space-y-0 md:flex md:justify-between md:items-center mx-auto'>

          <div className='flex items-center gap-4'>
            <button className='text-xl font-bold text-[#a0a0a3] w-[41px] h-[41px] rounded-full bg-[#f8f8fd]'>
            <i className="fa-solid fa-xmark"></i>
            </button>
             <div>
               <p className='text-[12px] w-[179px] h-[15px] text-[#71717A]'>Home - Incidents - New Incident</p>
               <h3 className='w-[163px] h-[33px] font-semibold text-[26px] '>New Incident</h3>
             </div>

          </div>


          <div className='hidden md:flex items-center'>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#FB923C] '></span>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
            <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
            
          </div>

          <div  className='flex items-center gap-4'>
            <ButtonCn className='px-10 text-sm'>Back</ButtonCn>
            <ButtonCn
             onClick={() => gotoNewPage()}
            className='px-10 text-sm'>
              <Link to='/NewIncidentFrom'>
              Next step
              </Link>
              </ButtonCn>
          </div>


          </div>

        </header>


        {/* New IncidentCard  section */}

     <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10 mb-15'>
        {NewIncidentData.map((item, i) => 

           <div key={i} className='flex  gap-2 mt-5 w-[180px] h-[69px] rounded[25px] border-[1px] border-[#e5e5ec] bg-[#F4F4F5] text-center hover:bg-[#F26922]'>
           
           
            <img src={item.icon1} alt="" className='w-[25px] h-[25px] ml-6 mt-5'/>
            <p className='w-[68px] h-[10px] text-[14px] text-[#aeaeb4] mt-5'>{item.p}</p>
            </div>

         )}
          
       
    </div>

      </Container>
    </section>
  )
}

export default NewIncident;
