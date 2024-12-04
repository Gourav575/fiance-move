import React from 'react'
import Mainbanner from '../componants/Mainbanner'
import Partner from '../componants/Partner'
import Testimonials from '../componants/Testimonials'
import Faq from '../componants/Faq'
import Features from '../componants/Features'

export default function Home() {
  return (
    <>
    <Mainbanner />  
    <div className='bg-[#f2f4f5]'>
    <Partner />
    <Features />
    </div>
    <Testimonials />
    <Faq />
    </>
  )
}
