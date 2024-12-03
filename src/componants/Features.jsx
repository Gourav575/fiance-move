import React from 'react'
import chart from '../assets/images/chart.svg'
import taske1 from '../assets/images/task-side-1.svg'
import taske2 from '../assets/images/task-side-2.svg'


export default function Features() {
  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pb-16 pb-6 lg:order-1 order-2">
          <div>
            <h2 className='md:text-5xl text-3xl mb-6 leading-tight'>Take the pain out of company admin</h2>
            <p className='text-md leading-7'>"Ease the burden of company administration with us. Our team
              simplifies processes, freeing up your time to grow your business. Trust
              us to handle the details and keep your company running smoothly."</p>
            <div className='mt-6'>
              <button className="primary-btn">Try for free</button>
            </div>
          </div>
          <div className='mt-5'>
            <div className=''>
              <img src={taske1} className='lg:w-8/12 w-11/12 lg:ml-auto' alt="" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pb-16 pb-10">
          <div className='lg:order-1 order-2 mt-4'>
            <div className=''>
              <img src={taske2} className='lg:w-8/12 w-11/12 mr-auto' alt="" />
            </div>
          </div>
          <div className='mt-5 lg:order-2 order-1'>
            <h2 className='md:text-5xl text-3xl mb-6 leading-tight w-11/12'>Manage your team in one place</h2>
            <p className='text-md leading-7'>"Streamline team management with our all-in-one solution.
              Keep communication, tasks, and files organized and accessible
              from one central location. Increase productivity and collaboration,
              and say goodbye to disorganized work."</p>
            <div className='mt-6'>
              <button className="primary-btn">Try for free</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
