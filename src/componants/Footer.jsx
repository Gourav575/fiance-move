import React, { useEffect, useState } from 'react';
import flogo from '../assets/images/footer-logo.svg'
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  const [footer1, setfooter] = useState('');

  useEffect(() => {
    Aos.init();
    }, []);
    const heroHandleSubmit1 = (e)=>{
      e.preventDefault();
     }
  return (
   
    <>


      <footer data-aos="fade-up" className="text-white body-font bg-[#01112D] relative lg:mt-36 md:mt-52 mt-44 lg:pt-20 md:pt-16">
        <div  className="container bg-[#FF83D5] text-white grid lg:grid-cols-2 grid-cols-1 lg:p-10 p-5 rounded-2xl newsletter">
          <div className='lg:p-10 md:p-5 p-0'>
            <h1 className=' md:text-5xl text-3xl md:leading-tight'>Get started today for
            better future finance!</h1>
          </div>
          <div className='relative lg:p-10 md:p-5 p-0'>
            <p className='text-md leading-7'>Fiance Move is a compass for business leaders,
              scale with checking and saving accounts, custom
              tools, and access to our investor box.</p>
            <form onSubmit={heroHandleSubmit1} className='flex lg:mt-4 mt-3'>
              <input className='email-input' type="email"  value={footer1} onChange={(e) => setfooter(e.target.value)} placeholder="Enter your email" required />
              <button className="secontary-btn lg:ml-4 ml-1" type="submit">Get Started</button> 
            </form>
          </div>
        </div>
        <div className="container px-5 py-24 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link to="./" className="flex title-font font-medium items-center md:justify-start justify-center">
              <img src={flogo} alt="" className='w-11/12' />
            </Link>
            
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 w-1/2 px-4">
              <h2 className="title-font font-medium text-white text-xl mb-3">Company</h2>
              <nav className="list-none footer-link mb-10">
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Home</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Pricing</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">About</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Blog</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Conatct</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Login</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 w-1/2 px-4">
              <h2 className="title-font font-medium text-white text-xl mb-3">Help</h2>
              <nav className="list-none footer-link mb-10">
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Contact us</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Our Policies</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Account</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Terms & Condition</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 w-1/2 px-4">
              <h2 className="title-font font-medium text-white text-xl mb-3">Social</h2>
              <nav className="list-none footer-link mb-10">
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Facebook</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Instagram</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">Twitter</Link>
                </li>
                <li>
                  <Link to="./" className="text-gray-100 hover:text-gray-400">LinkedIn</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto pt-8 px-5 flex flex-wrap flex-col sm:flex-row border-t-2 border-white">
            <p className="text-gray-100 text-sm text-center sm:text-left">
              © 2023 Fiance Move All rights reserved  
            </p>
            <span className="inline-flex mx-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <nav className="list-none flex flex-wrap justify-center gap-3 mb-10">
                <li className=''>

                  <Link to="./" className="border-r-2 border-r-white pr-3 text-gray-100 hover:text-gray-400">Terms & conditions</Link>
                </li>
                <li className=''>

                  <Link to="./" className="border-r-2 border-r-white pr-3 text-gray-100 hover:text-gray-400">Sitemap</Link>
                </li>
                <li className=''>

                  <Link to="./" className="border-r-2 border-r-white pr-3 text-gray-100 hover:text-gray-400">Privacy Policy</Link>
                </li>
                <li className=''> 
                  <Link to="./" className=" text-gray-100 hover:text-gray-400">Cookies Policy</Link>
                </li>
              </nav>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
