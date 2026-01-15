import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "phantom",
  name: "Phantom",
  description:
    "Phantom is a non-custodial wallet that allows users to store, send, and receive cryptocurrencies on multiple blockchains, including Solana, Ethereum, and Polygon. It also provides a built-in decentralized exchange (DEX) for trading assets directly from the wallet interface.",
  links: {
    website: "https://phantom.com/",
    twitter: "https://x.com/phantom",
    github: "https://github.com/phantom",
    documentation: "https://phantom.com/learn/guides",
  },
  tags: ["wallet"],
};

const contract: ContractRaw = {
  name: "Transfer",
  address: "DeJBGdMFa1uynnnKiwrVioatTuHmNLpyFKnmB5kaFdzQ",
  networkId: NetworkId.solana,
};

export const transferService: ServiceRaw = {
  id: `${platform.id}-transfer`,
  name: "Transfer",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [transferService];
