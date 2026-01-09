import { PlatformRaw, ServiceRaw, NetworkId, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "orderly",
  name: "Orderly",
  description:
    "Orderly is an omnichain CLOB infrastructure.It's the ultimate trading lego for seamless integration by any builder on any blockchain. Give your app the transparency and composability of DEXs, with the speed and performance of CEXs.",
  defiLlamaId: "orderly",
  links: {
    website: "https://orderly.network/",
    discord: "https://discord.com/invite/orderlynetwork",
    twitter: "https://x.com/OrderlyNetwork",
    telegram: "https://t.me/OrderlyNetworkDiscussions",
    github: "https://github.com/OrderlyNetwork",
    documentation:
      "https://orderly.network/docs/introduction/getting-started/what-is-orderly",
    medium: "https://medium.com/@orderlynetwork",
  },
  tokens: ["ABt79MkRXUsoHuV2CVQT32YMXQhTparKFjmidQxgiQ6E"],
  tags: ["bridge", "dapp"],
};

const contract: ContractRaw = {
  name: `Orderly`,
  address: "ErBmAD61mGFKvrFNaTJuxoPwqrS8GgtwtqJTJVjFWx9Q",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "7X5WKxXLPy9TbJDFejq288HezLmWayZWudKMmUC2d9rB",
  networkId: NetworkId.solana,
};

const stakingContract2 = {
  name: "Staking V2",
  address: "GZGX6QfUo62VbPyYqPZS6t27Uke1dJmoAP6V3rw6ntTH",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Trading",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://orderly.network/",
  description:
    "Omnichain CLOB infrastructure providing shared liquidity orderbook trading across 18+ blockchains for perpetuals DEX builders.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract, stakingContract2],
  description:
    "ORDER token staking granting ownership of the Orderly treasury funded by 60% of protocol revenue and cross-chain reward claiming.",
};

export const services: ServiceRaw[] = [mainService, stakingService];
