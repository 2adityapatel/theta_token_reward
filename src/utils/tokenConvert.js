
import { ethers } from "ethers";
import contracts from "../constant/contracts.json";
import thetaTokenAbi from "../constant/thetaTokenAbi.json";


async function getThetaTokenDecimals()  {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum)
    const tokenInstance = new ethers.Contract( contracts.tokenContract, thetaTokenAbi, provider);
    const decimals = await tokenInstance.decimals();
    return decimals;
    } catch (error) {
        console.error("Error fetching token decimals:", error);
        throw error;
    }
}

async function convertTokenAmountToWei(amount) {

    try {
        const decimals = await getThetaTokenDecimals();
        return ethers.parseUnits(amount.toString(), decimals);  
    } catch (error) {
        console.error("Error converting token amount to Wei:", error);
        throw error;
    }
     
}


export { getThetaTokenDecimals, convertTokenAmountToWei };