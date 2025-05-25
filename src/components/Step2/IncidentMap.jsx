import React from 'react'
import Container from '../common/Container'
import ButtonCn from './ButtonCn'
import { Link, useNavigate } from 'react-router'

const IncidentMap = () => {
 
  const navigate = useNavigate();
 
  const gotoBack = () => {
  navigate('/Incidents')

 }


  return (
    <section>
       <Container>
         
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
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#FB923C] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 
</div>

<div  className='flex items-center gap-4'>
 <ButtonCn 
 onClick={() => gotoBack()}
 className='px-10 text-sm'>
  <Link to='/Incidents'>
  Back
  </Link>
  </ButtonCn>





 <ButtonCn className='px-10 text-sm'> Finished</ButtonCn>
</div>


</div>

</header>

  {/* New Incident Header section end */}


{/* New Incident Map section */}

<div className='text-start mx-auto md:max-w-[752px] h-[586px] p-5'>
    <div>
      <h1 className='lg:w-[700px] md:h-[31px] font-[700] text-[24px] text-[#000000] text-start'>Where’s the incident?</h1>
      <p className='md:w-[518px] md:h-[32px] text-sm text-[#71717A] py-3'>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br/> possible, or click:Jurisdiction Wide</p>
    </div>


    <div  className='py-10'>
    <img src="./map1.png" alt="" />
     </div>


</div>

        </Container> 
    </section>
  )
}

export default IncidentMap;
