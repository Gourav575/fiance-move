import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './componants/Header';
import Home from './pages/Home';
import Footer from './componants/Footer'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />        
        </Routes>
        <Footer />
      </BrowserRouter> */}
     <Home />
    </>
  )
}

export default App
