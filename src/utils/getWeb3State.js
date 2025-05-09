import { ethers } from "ethers";
import thetaContractAbi from "../constant/thetaContractAbi.json"
import thetaTokenAbi from "../constant/thetaTokenAbi.json";
import teamAbi from "../constant/teamAbi.json"
import contracts from "../constant/contracts.json"

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


        const tokenContract = contracts.tokenContract;
        const thetaContract = contracts.thetaContract;

        
        const thetaInstance = new ethers.Contract(thetaContract, thetaContractAbi, signer );
        const tokenInstance = new ethers.Contract(tokenContract, thetaTokenAbi, signer)
        
        const teamAddresses = await thetaInstance.getAllTeams();
        console.log(teamAddresses);

        const teamInstances = teamAddresses.map(address => new ethers.Contract(address, teamAbi, signer));
        console.log(teamInstances);
        

        return { chainId, provider, signer, accountAddress, thetaInstance, tokenInstance , teamAddresses, teamInstances }

    } catch (error) {
        console.error(error);
        throw new Error
    }
}