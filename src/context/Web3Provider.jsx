import React, { useEffect, useState } from "react";
import { Web3Context } from "./web3Context";
import { getWeb3State } from "../utils/getWeb3State";
import { getWeb3StateSilent } from "../utils/getWeb3StateSilent";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";

const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({
    provider: null,
    signer: null,
    accountAddress: null,
    chainId: null,
    thetaInstance : null,
    tokenInstance : null,
  });
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const { provider, signer, chainId, accountAddress, thetaInstance, tokenInstance } =
        await getWeb3State();
      setWeb3State({
        provider,
        signer,
        accountAddress,
        chainId,
        thetaInstance,
        tokenInstance
      });
      localStorage.setItem("isWalletConnected", true);
      setIsWalletConnected(true);
      console.log({ provider, signer, chainId, accountAddress, thetaInstance, tokenInstance });
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      const isWalletConnected = localStorage.getItem("isWalletConnected");
      if (isWalletConnected === "true") {
        const { provider, signer, chainId, accountAddress, thetaInstance, tokenInstance } =
          await getWeb3StateSilent();
        setWeb3State({
          provider,
          signer,
          accountAddress,
          chainId,
          thetaInstance,
          tokenInstance
        });
        setIsWalletConnected(true);
        console.log("weuwyiuwerywi ");
      }
    };
    connectWalletOnPageLoad();

    const accountChangeHandler = (accounts) => {
      handleAccountChange(
        setIsWalletConnected,
        accounts,
        setWeb3State,
        web3State
      );
    };
    const chainChangeHandler = () => {
      handleChainChange(setWeb3State);
    };

    if (window.ethereum && window.ethereum.on) {
      window.ethereum.on("accountsChanged", accountChangeHandler);
      window.ethereum.on("chainChanged", chainChangeHandler);
    }

    return () => {
      window.ethereum.removeListener("accountsChanged", accountChangeHandler);
      window.ethereum.removeListener("chainChanged", chainChangeHandler);
    };
  }, []);

  return (
    <>
      <Web3Context.Provider
        value={{ isWalletConnected, web3State, connectWallet }}>
        {children}
      </Web3Context.Provider>
    </>
  );
};

export default Web3Provider;
