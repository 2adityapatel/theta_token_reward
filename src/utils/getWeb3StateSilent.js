import { ethers } from "ethers"
import thetaContractAbi from "../constant/thetaContractAbi.json"
import thetaTokenAbi from "../constant/thetaTokenAbi.json";
import teamAbi from "../constant/teamAbi.json"

export const getWeb3StateSilent = async () => {

    try {
       
        
        if(!window.ethereum){
            throw new Error("No wallet installed!!")
        }

        const accounts = await window.ethereum.request({
            method:"eth_accounts"
        })

        const accountAddress = accounts[0]

        const chainIdHex = await window.ethereum.request({
            method:"eth_chainId"
        })

        const chainId = parseInt(chainIdHex,16)
        const provider = new ethers.BrowserProvider(window.ethereum)

        const signer = await provider.getSigner()
       
    
        const tokenContract = "0x75E3AF310953a7a2B18D11D61ac1893D38a150F9";
        const thetaContract = "0xC35CBcC97777E8dD6D2938102F60416B7a4F7191";

        const thetaInstance = new ethers.Contract(thetaContract, thetaContractAbi, signer );
        const tokenInstance = new ethers.Contract(tokenContract, thetaTokenAbi, signer);

        const teamAddresses = await thetaInstance.getAllTeams();
        console.log(teamAddresses);

        const teamInstances = teamAddresses.map(address => new ethers.Contract(address, teamAbi, signer));
        console.log(teamInstances);

        return { chainId, provider, signer, accountAddress, thetaInstance, tokenInstance, teamInstances }

        
    } catch (error) {
        console.error(error);
        throw new Error;
    }

}

