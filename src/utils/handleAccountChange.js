export const handleAccountChange = async (setIsWalletConnected, accounts, setWeb3State, web3State) => {
    console.log(accounts);
    console.log("Accounts");
    
    if (accounts.length === 0) {
            // No accounts are connected
            console.log(accounts.length);
            console.log("No accounts connected");
            
            localStorage.removeItem("isWalletConnected");
            setWeb3State({
              provider: null,
              signer: null,
              accountAddress: null,
              chainId: null,
            });
            setIsWalletConnected(false);
    }else{


        
        const accountAddress = accounts[0];
        console.log(accountAddress);
        
        setWeb3State((prevState) => ({ ...prevState, accountAddress }));
    
    }
    
  
  };
  