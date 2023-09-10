import React from 'react';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { InjectedConnector } from 'wagmi/connectors/injected';

const alchemyKey = process.env.ALCHEMY_API_KEY;

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli, chain.polygonMumbai, chain.hardhat, chain.localhost],
  [
    alchemyProvider({
      apiKey: alchemyKey,
    }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new WalletConnectConnector({ chains, options: {} }),
    new MetaMaskConnector({ chains }),
    new InjectedConnector({ chains, options: { name: 'Injected' } }),
  ],
});

export interface IWagmiProviderProps {
  children: React.ReactNode;
}

export function WagmiProvider({ children }: IWagmiProviderProps) {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}
