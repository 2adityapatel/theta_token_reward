import React, { useState } from "react";
import { convertTokenAmountToWei } from "../../utils/tokenConvert";
import { toast } from "react-toastify";

const FundMembers = () => {
  const [tokenAmount, setTokenAmount] = useState(0);

  const handleFundMember = async () => {
    try {
      console.log(typeof tokenAmount);
      const tokenAmountInWei = await convertTokenAmountToWei(tokenAmount);
      console.log(tokenAmountInWei);
    } catch (error) {
      toast.error("Error funding members: " + error.message);
      console.error("Error funding members:", error);
    }
  };

  return (
    <>
      <input
        onChange={(e) => setTokenAmount(e.target.value)}
        value={tokenAmount}
        type="number"
        placeholder="Enter token amount"
      />
      <button onClick={handleFundMember}>Fund </button>
    </>
  );
};

export default FundMembers;
