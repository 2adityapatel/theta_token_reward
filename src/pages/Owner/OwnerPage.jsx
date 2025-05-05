import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useWeb3State } from "../../context/useWeb3Context";



const OwnerPage = () => {

    const {web3State} = useWeb3State()
    const { thetaInstance, accountAddress } = web3State;
    const navigate = useNavigate()
    
    useEffect(()=>{ 
        console.log(thetaInstance);
        
        const checkOwner = async () => {
         
            
            try {
                const ownerAddress = await thetaInstance.owner();
                
            if(ownerAddress.toLowerCase() !== accountAddress){
                alert("You are not Authorized!!")
                navigate("/")
            }
                return true;
            } catch (error) {
                console.error(error);
            }
        }

        thetaInstance && checkOwner()
    }, [thetaInstance, accountAddress])

    return (
        <>
        <h1>Owner Page</h1>
        <h3>{ accountAddress }</h3>
        </>
    )
}


export default OwnerPage;