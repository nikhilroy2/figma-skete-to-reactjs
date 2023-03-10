import React, { useState, useEffect, useMemo, useCallback } from "react";
import Web3Contract from 'web3-eth-contract';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { InjectedConnector } from "@web3-react/injected-connector";
import { config } from "./config.js";
import abi from "./abi.json"


const web3 = new Web3(Web3.givenProvider);

Web3Contract.setProvider(config.rpcUrls[0]);
// Web3Contract.setProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');

const machineLearning = new Web3Contract(abi, config.machine_learning_contract);
const machineLearningForWrite = new web3.eth.Contract(abi, config.machine_learning_contract)


function initWeb3(provider) {
    var web3 = new Web3(provider);

    web3.eth.extend({
        methods: [
            {
                name: "chainId",
                call: "eth_chainId",
                outputFormatter: web3.utils.hexToNumber,
            },
        ],
    });

    return web3;
}

export const injected = new InjectedConnector({
    supportedChainIds: [1, 42, 1337],
});

export const MetaMaskContext = React.createContext(null);

export const MetaMaskProvider = ({ children }) => {

    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");
    const [walletAddr, setWalletAddress] = useState("");
    const [chainId, setChainId] = useState(config.chainId);
    const [web3, setWeb3] = useState(null);
    const [web3Modal, setWeb3Modal] = useState(null);

    const [modelInfos, setModelInfos] = useState([]);

    const ConnectWallet = async () => {
        try {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: "a364b3c14ec24d67a8d260b721adb45b",
                    },
                },
            };

            const web3Modal = new Web3Modal({
                network: "mainnet", // optional
                cacheProvider: true, // optional
                providerOptions, // required
                theme: {
                    background: "rgb(11 11 72 / 92%)",
                    main: "rgb(199, 199, 199)",
                    secondary: "rgb(136, 136, 136)",
                    border: "rgba(195, 195, 195, 0.14)",
                    hover: "rgb(16, 26, 32)"
                }
            });
            const provider = await web3Modal.connect();

            await subscribeProvider(provider);

            const web3 = initWeb3(provider);

            const accounts = await web3.eth.getAccounts();

            const address = accounts[0];

            const networkId = await web3.eth.net.getId();

            const chainId = await web3.eth.chainId();

            await setWeb3(web3);
            await setConnected(true);
            await setAddress(address);
            await setWalletAddress(
                address.substring(0, 4) +
                "..." +
                address.substring(address.length - 6, address.length)
            );
            await setChainId(chainId);
            await setWeb3Modal(web3Modal);

        } catch (error) {
            console.log(error);
        }
    };

    const setupNetwork = async () => {
        const provider = window.ethereum
        if (provider) {
            const chainId = parseInt("56", 10)
            try {
                await provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: `0x${chainId.toString(16)}`,
                            chainName: 'Binance Smart Chain',
                            nativeCurrency: {
                                name: 'BNB',
                                symbol: 'bnb',
                                decimals: 18,
                            },
                            rpcUrls: [config.rpcUrls],
                            blockExplorerUrls: [`${config.BlockExplorerUrl}/`],
                        },
                    ],
                })
                return true
            } catch (error) {
                console.error('Failed to setup the network in Metamask:', error)
                return false
            }
        } else {
            console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
            return false
        }
    }

    const DisconnectWallet = async () => {
        try {
            if (web3 && web3.currentProvider && web3.currentProvider.close) {
                await web3.currentProvider.close();
            }

            await web3Modal.clearCachedProvider();
            setWeb3Modal(new Web3Modal());

            await setConnected(false);
            setAddress("");
            setWalletAddress("");
        } catch (error) {
            console.log(error);
        }
        // this.setState({ ...INITIAL_STATE });
    };

    async function subscribeProvider(provider) {
        if (!provider.on) {
            return;
        }
        provider.on("disconnect", () => DisconnectWallet());

        provider.on("accountsChanged", async (accounts) => {
            await setAddress(accounts[0]);
            // await this.getAccountAssets();
        });
    }

    //Registering ML Model NFT
    const mintMLModel = async (key, description) => {
        if (connected === true) {
            const networkId = await web3.eth.net.getId();
            if (networkId !== config.chainId) {
                alert("Please, check Network again!")
                return;
            }

            try {
                await machineLearningForWrite.methods
                    .register(key, description)
                    .send({ from: address, to: config.machine_learning_contract });

            } catch (error) {
                console.log(error.message);
            }
        } else {
            //enqueueSnackbar("Please, connect wallet.", { variant: "error", anchorOrigin: { vertical: 'top', horizontal: "left" } });
            // ConnectWallet();
        }
    };

    const getNFTMLModels = async () => {
        const tx = await machineLearning.methods.getAllModelInfos().call();
        console.log(tx);
        setModelInfos(tx);
    }

    useEffect(() => {
        getNFTMLModels();
    }, [machineLearning])


    const values = {
        getNFTMLModels,
        mintMLModel,
        modelInfos,
        setConnected,
        ConnectWallet,
        DisconnectWallet,
        address,
        walletAddr,
        connected,
        setupNetwork,
    };

    return (
        <MetaMaskContext.Provider value={values}>
            {children}
        </MetaMaskContext.Provider>
    );
};

export default function useMetaMask() {
    const context = React.useContext(MetaMaskContext);

    if (context === undefined) {
        throw new Error(
            "useMetaMask hook must be used with a MetaMaskProvider component"
        );
    }

    return context;
}

