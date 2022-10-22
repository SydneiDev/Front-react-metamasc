import './App.css';
import { ethers } from 'ethers';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { Web3ReactModal } from '@bitiumagency/web3-react-modal';
import logo from './logo.png'
import Mint from './Mint';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider)
}

function App() {
  return (
    <Web3ReactProvider

      getLibrary={getLibrary}>

      <a href="https://web3developer.com.br" target="blank">
        <img src={logo} alt="Web3Developer" className="logo" />
      </a>

      <Mint />
      
      <Web3ReactModal
        useWeb3React={
          useWeb3React
        }
        supportedChains={[{
          name: 'Goerli',
          chainId: 5,
          rpcUrl: 'https://goerli.infura.io/v3/',
          nativeCurrency: {
            name: 'GoerliETH',
            symbol: 'GoerliETH',
            decimals: 18
          }
        }]}
        connectors={[{
          title: 'Wallet Connect',
          id: 'walletconnect',
          connector: WalletConnectConnector,
          options: {
            rpc: { 1: 'https://goerli.infura.io/v3/' },
            qrcode: true,
          }
        }]}
      />
    </Web3ReactProvider>
  );
}

export default App;
