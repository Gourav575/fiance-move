import React from 'react'
import Slider from "react-slick";
import partner1 from '../assets/images/partner-1.svg'
import partner2 from '../assets/images/partner-2.svg'
import partner3 from '../assets/images/partner-3.svg'
import partner4 from '../assets/images/partner-4.svg'
import partner5 from '../assets/images/partner-5.svg'

export default function Partner() {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };


  const partnerimg = [
    {
      id: 1,
      parnter_img: partner1
    },
    {
      id: 2,
      parnter_img: partner2
    },
    {
      id: 3,
      parnter_img: partner3
    },
    {
      id: 4,
      parnter_img: partner4
    },
    {
      id: 5,
      parnter_img: partner5
    }
  ]
  return (
    <>
      <div className='container lg:py-10 py-5 lg:pt-16 pt-10 text-center'>
        <p>Supported and being used with large company like</p>
        <div className='my-8'>
          {<Slider {...settings}>
            {
              partnerimg.map((item) =>
                <div key={item.id} className='lg:p-8 p-4 grid place-content-center'>
                  <img src={item.parnter_img} alt="partner-img" />
                </div>

              )
            }

          </Slider>}

        </div>
      </div>
    </>
  )
}
