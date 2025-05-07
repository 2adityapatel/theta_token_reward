import { useEffect, useState } from "react";
import { useWeb3State } from "../../context/useWeb3Context";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const { web3State, isWalletConnected } = useWeb3State();
  const [loading, setLoading] = useState(true);
  const { teamInstances } = web3State;
  const navigate = useNavigate();

  const rowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    // if (!isWalletConnected) {
    //   toast.info("Please connect your waller first !!");
    //   navigate("/");
    // }

    const getTeamDetails = async () => {
      for (const team of teamInstances) {
        const { _name, _leader, totalWins, _noOfPlayers, _totalPlayedGames } =
          await team.getDetails();
        setTeams((prev) => [
          ...prev,
          {
            name: _name,
            leader: _leader,
            totalWins: totalWins,
            totalPlayers: _noOfPlayers,
            totalPlayedGames: _totalPlayedGames,
          },
        ]);
        setLoading(false)
        console.log({
          _name,
          _leader,
          totalWins,
          _noOfPlayers,
          _totalPlayedGames,
        });

      }
    };

    teamInstances && getTeamDetails();
    // setLoading(true)
  }, [teamInstances]);

  return (
    <div className="min-h-screen bg-[#0a1a35] text-blue-200 font-serif p-6">
      <h1 className="text-2xl font-bold mb-6">Teams</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#112244] border border-cyan-500 text-cyan-200 rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left">Team Name</th>
              <th className="py-3 px-6 text-left">Leader</th>
              <th className="py-3 px-6 text-left">No. of Players</th>
              <th className="py-3 px-6 text-left">Total Games Played</th>
              <th className="py-3 px-6 text-left">Wins</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, idx) => (
              //   <tr key={idx} className="hover:bg-cyan-700/30 transition-colors">
              <motion.tr
                key={idx}
                className="hover:bg-cyan-700/30 transition-colors"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={rowVariants}
              >
                <td className="py-3 px-6">{team.name} </td>
                <td className="py-3 px-6">{team.leader}</td>
                <td className="py-3 px-6">{team.totalPlayers}</td>
                <td className="py-3 px-6">{team.totalPlayedGames}</td>
                <td className="py-3 px-6">{team.totalWins}</td>
                {/* </tr> */}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
