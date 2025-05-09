import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3State } from "../../context/useWeb3Context";
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";
import FundMembers from "../../components/Owner/FundMembers";

const OwnerPage = () => {
  const { web3State, isWalletConnected } = useWeb3State();
  const { thetaInstance, accountAddress } = web3State;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    const checkOwner = async () => {
      try {
        const ownerAddress = await thetaInstance.owner();

        if (ownerAddress.toLowerCase() !== accountAddress) {
          toast.error("You are not authorized !!");
          setLoading(true)
          navigate("/");
        }
        setLoading(false);
      } catch (error) {
        toast.error(error);
        console.error(error);
      }
    };

    thetaInstance && checkOwner();
  }, [thetaInstance, accountAddress]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <PacmanLoader color="#00bcd4" size={25} />
          <h3>Owner pacman</h3>
        </div>
      ) : (
        <div>
          <h1>Owner Page</h1>
          <h3>{accountAddress}</h3>
          <FundMembers/>
        </div>
      )}
    </>
  );
};

export default OwnerPage;
