import React, { useEffect, useState } from 'react'
import star from '../assets/images/star.svg'
import chart from '../assets/images/chart.svg'
import star1 from '../assets/images/star-1.svg'
import shape1 from '../assets/images/shape-1.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Mainbanner() {

  const [hero, setHero] = useState('');

  useEffect(() => {
     Aos.init();
     }, []);

     const heroHandleSubmit = (e)=>{
      e.preventDefault();
     }
  return (
    <>
      <div className="container grid lg:grid-cols-2 grid-cols-1 lg:pb-16 pb-0 lg:mt-14 mt-7">
        <div data-aos="fade-up">
          <h1 className=' md:text-6xl text-4xl  md:mb-6 mb-4 md:leading-tight'>Grow Your Business with Our Plateform</h1>
          <p className='text-md leading-7'>"Our finance department has experienced significant growth through strategic
            planning and responsible management. Resulting in increased revenue, profitability,
            and financial stability. We're committed to continued growth and success."</p>

          <form onSubmit={heroHandleSubmit} className='flex lg:mt-6 mt-3'>
            <input className='email-input' type="email" value={hero} onChange={(e) => setHero(e.target.value)} placeholder="Enter your email" required />
            <button className="primary-btn lg:ml-4 ml-1" type="submit">Get Started</button>
             </form>

        </div>
        <div data-aos="fade-up" className='relative mt-5'>
          <div className=''>
            <img src={chart} className='chart-img ml-auto' alt="" />
          </div>
          <div className='main-shape'>
            <div className="reward-card">
              <div className='star-shape'><img src={star} alt="" /></div>
              <p>Rewards from brand your love.</p>
            </div>
            <div className="revenue-card">
              <div className='flex justify-between'>
                <p>Total Revenue</p>
                <p className='text-slate-300'>+28.35</p>
              </div>
              <p className='lg:text-5xl text-3xl py-2'>
                $400.933
              </p>
            </div>
          </div>
        </div>

      </div>
      <div data-aos="fade-up" className='bg-[#655CFE] w-full mt-10'>
        <div className="container text-white grid lg:grid-cols-2 grid-cols-1 py-7">
          <div>
            <p className='lg:text-2xl text-xl '>Various kinds of feature varience that can
              help you for financial mangement.</p>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 lg:place-content-evenly'>
            <div className='flex p-3'>
              <div className='shape-1'><img src={shape1} alt="" /></div>
              <p className='text-md'>Works with your <br /> favourite tools</p>
            </div>
            <div className='flex p-3'>
              <div className='shape-1'><img src={star1} alt="" /></div>
              <p className='text-md'>Save hour every <br /> week</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

