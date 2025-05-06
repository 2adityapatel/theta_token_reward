import React from 'react';
import { Flame } from 'lucide-react';
import WalletConnect from '../wallet/wallet'; // adjust path if needed

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#0a1a35] border-b border-blue-900">
      <div className="flex items-center space-x-2">
        <Flame className="text-cyan-300" size={26} />
        <span className="text-2xl font-bold tracking-wide text-blue-200 font-serif">
          Theta Technolabs
        </span>
      </div>
      <WalletConnect />
    </header>
  );
};

export default Navbar;
