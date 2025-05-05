import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Flame } from 'lucide-react';
import WalletConnect from '../wallet/wallet';

const Navbar = () => {
  return (
    <nav className="bg-[#0a1a35] border-b border-blue-900 shadow-inner text-blue-200 font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Flame className="text-cyan-300" size={22} />
            <span className="text-2xl font-bold tracking-wider">RetroRealm</span>
          </div>

          {/* Nav Links */}
          <ul className="flex space-x-8 text-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 border rounded-md transition duration-150 ${
                    isActive
                      ? 'text-cyan-300 border-cyan-300'
                      : 'hover:text-cyan-200 hover:border-cyan-200 border-transparent'
                  }`
                }
              >
                <Home size={18} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/legacy"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 border rounded-md transition duration-150 ${
                    isActive
                      ? 'text-cyan-300 border-cyan-300'
                      : 'hover:text-cyan-200 hover:border-cyan-200 border-transparent'
                  }`
                }
              >
                <Flame size={18} />
                <span>Legacy</span>
              </NavLink>
            </li>
          </ul>

          {/* Wallet Connect */}
          <div className="ml-4">
            <WalletConnect />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
