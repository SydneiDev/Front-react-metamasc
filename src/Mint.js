import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { useWeb3ReactModal } from '@bitiumagency/web3-react-modal';

const Mint = () => {
    const { connect } = useWeb3ReactModal()
    const { active, account, library } = useWeb3React()
    const [NFTContract, setNFTContract] = useState()

    useEffect(() => {
        if (library) {
            const abi = [
                { "inputs": [{ "internalType": "uint256", "name": "_quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }
            ]
            const contractAddress = '0x63C6863fDB20F4D92341313807B56525A394DCD3'
            setNFTContract(new ethers.Contract(contractAddress, abi, library.getSigner()))
        }
    }, [library])


    const handleMint = async () => {
        await NFTContract.mint(1, {
            value: ethers.utils.parseEther('0.001'),
        })
        alert('Sua transação foi enviada')
    }

    return (
        <div className='container'>
            {active ?
                <>
                    <h1>Mint NFT</h1>
                    <p>Sua conta: {account}</p>
                    <button onClick={handleMint}>Mint</button>
                </>
                :
                <>
                    <p>
                    Conecte-se a uma carteira para criar NFT.
                    </p>
                    <button onClick={connect}>Conectar carteira</button>
                </>
            }
        </div>
    )
}

export default Mint