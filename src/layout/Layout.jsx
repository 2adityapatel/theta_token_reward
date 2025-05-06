import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <div className="min-h-screen bg-[#0a1a35] text-blue-200 font-serif">
          <Navbar />
          <main className="p-6">
            <Outlet />
          </main>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />
        </div>
      );
}

export default Layout