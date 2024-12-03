import React from 'react'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'; // Solid star icon 
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import client from '../assets/images/person-1.svg'

export default function Testimonials() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.05,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    centerMode: false,
    arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    centerMode: false,
    arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    centerMode: false,
    arrows:false

        }
      }
    ]
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:my-24 my-12 lg:w-full md:w-9/12 w-11/12 mx-auto">
        <div className='lg:w-4/5 w-full ml-auto mb-10'>
          <h1 className='lg:text-5xl text-3xl mb-6 leading-tight lg:w-10/12'>What others are saying about Us</h1>
          <p className='text-md leading-7'>Join our hundreds of companies embaracing <br />
            strategic finance with Zenly</p>
          <div className='mt-6'>
            <p className='mb-2 '>
              <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
              <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
              <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
              <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
              <FontAwesomeIcon icon={farStar} style={{ color: 'gray' }} />
            </p>
            <p>Review from Trustpiolet</p>
          </div>
        </div>
        <div className='relative'>
          <Slider {...settings} className='testimonial-slider'>
            <div>
              <div className='flex md:flex-row flex-col'>
                <img src={client} alt="" className='lg:w-5/12 w-3/12 my-2' />
                <div className='lg:px-4 px-2 grid grid-cols-1 place-content-evenly'>
                  <h3 className='lg:text-2xl text-xl font-medium lg:mb-2 mb-1'>Stripe</h3>
                  <p>“Simple, seamles processing
                    Payroll reduces the number
                    of third parties we work with. lore”
                  </p>
                  <div className='lg:mt-6 mt-2'>
                    <p>Anton de Swardt</p>
                    <p className='mb-2 '>
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={farStar} style={{ color: 'gray' }} />
                    </p>
                  </div>

                </div>

              </div>
            </div>
            <div>
              <div className='flex md:flex-row flex-col'>
                <img src={client} alt="" className='lg:w-5/12 w-3/12 my-2' />
                <div className='lg:px-4 px-2 grid grid-cols-1 place-content-evenly'>
                  <h3 className='lg:text-2xl text-xl font-medium lg:mb-2 mb-1'>Stripe</h3>
                  <p>“Simple, seamles processing
                    Payroll reduces the number
                    of third parties we work with. lore”
                  </p>
                  <div className='lg:mt-6 mt-2'>
                    <p>Anton de Swardt</p>
                    <p className='mb-2 '>
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={fasStar} style={{ color: '#FFCE31' }} />
                      <FontAwesomeIcon icon={farStar} style={{ color: 'gray' }} />
                    </p>
                  </div>

                </div>

              </div>
            </div>
            
          </Slider>
        </div>
      </div>
    </>
  )
}
