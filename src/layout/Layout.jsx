import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useWeb3State } from '../context/useWeb3Context';
import { PacmanLoader } from 'react-spinners';
import Footer from '../components/Footer/Footer';

const Layout = () => {

    const { isInitialized } = useWeb3State()



    return (
      <div className="flex flex-col min-h-screen bg-[#0a1a35] text-blue-200 font-serif">
        <Navbar />
        
        <main className="">
          {!isInitialized ? (
            <div className="flex justify-center items-center min-h-[300px]">
            <PacmanLoader color="#00bcd4" size={25} />
            <h3>Layout Pacman</h3>
          </div>
          ) : (
            <Outlet />
          )}
        </main>

        <Footer/>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          theme="dark"
        />
      </div>
    );
}

export default Layout