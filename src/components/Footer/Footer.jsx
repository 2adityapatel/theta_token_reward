import { toast } from 'react-toastify';
import { Copy } from 'lucide-react';

const Footer = () => {
  const donationAddress = '0x6CaC4F1077077973DB15784597F5197288148297'; // replace with your real address

  const handleDonateClick = () => {
    navigator.clipboard.writeText(donationAddress);
    toast.success('Wallet address copied! Thanks for considering a donation. 💙');
  };

  return (
    <footer className="bg-[#0a1a35] text-blue-200 font-serif border-t border-cyan-700 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
      <span className="text-sm">Made by <span className="text-cyan-400 font-bold">SHelDOn</span></span>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
        <span className="truncate max-w-[250px] sm:max-w-none">{donationAddress}</span>
        <button
          onClick={handleDonateClick}
          className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-xl transition-colors duration-200"
        >
          <Copy size={16} /> Copy
        </button>
      </div>
    </footer>
  );
};

export default Footer;
