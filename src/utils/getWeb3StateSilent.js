import { ethers } from "ethers"
import thetaContractAbi from "../constant/thetaContractAbi.json"
import thetaTokenAbi from "../constant/thetaTokenAbi.json";

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
       
    
        const thetaContract = "0x1b4B575f2a0e0C9948eDf5475fBD5D843714bDA9";
        const tokenContract = "0x75E3AF310953a7a2B18D11D61ac1893D38a150F9";

        const thetaInstance = new ethers.Contract(thetaContract, thetaContractAbi, signer );
        const tokenInstance = new ethers.Contract(tokenContract, thetaTokenAbi, signer)

        return { chainId, provider, signer, accountAddress, thetaInstance, tokenInstance}

        
    } catch (error) {
        console.error(error);
        throw new Error;
    }

}

