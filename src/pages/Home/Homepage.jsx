import React from 'react';
import { Gamepad2, Trophy, Users, ScrollText, Flame, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const menuOptions = [
    { label: 'Games', icon: <Gamepad2 size={28} />, link: '/play' },
    { label: 'Leaderboard', icon: <Trophy size={28} />, link: '/leaderboard' },
    { label: 'Teams', icon: <ScrollText size={28} />, link: '/teams' },
    { label: 'Owner', icon: <Users size={28} />, link: '/owner' },
    { label: 'Legacy Mode', icon: <Flame size={28} />, link: '/legacy' },
    { label: 'My details', icon: <Cog size={28} />, link: '/settings' },
  ];

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-[#0a1a35] text-blue-200 font-serif">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-24">
        {menuOptions.map((item, idx) => (
          <motion.div
          key={idx}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <Link
            to={item.link}
            className="bg-[#112244] border border-cyan-500 text-cyan-200 rounded-xl w-40 h-40 flex flex-col items-center justify-center text-center shadow-md hover:bg-cyan-700/30 hover:scale-105 transition-transform duration-200"
          >
            {item.icon}
            <span className="mt-3 text-lg">{item.label}</span>
          </Link>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
