import { ethers } from "ethers";
import thetaContractAbi from "../constant/thetaContractAbi.json"
import thetaTokenAbi from "../constant/thetaTokenAbi.json";

export const getWeb3State = async () =>  {

    try {

        if(!window.ethereum){
            throw new Error("No wallet installed !!")
        }

        const accounts = await window.ethereum.request({

            method : "eth_requestAccounts"
        })

        const accountAddress = accounts[0]

        const chainIdHex = await window.ethereum.request({
            method:"eth_chainId"
        })

        const chainId = parseInt(chainIdHex, 16);
        
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()


        const thetaContract = "";
        const tokenContract = "";

        const thetaInstance = new ethers.Contract(thetaContract, thetaContractAbi, signer );
        const tokenInstance = new ethers.Contract(tokenContract, thetaTokenAbi, signer)

        return { chainId, provider, signer, accountAddress, thetaInstance, tokenInstance}

    } catch (error) {
        console.error(error);
        throw new Error
    }
}