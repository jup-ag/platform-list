import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "rain",
  name: "Rain",
  description:
    "RainFi is a peer-to-peer (P2P) lending protocol built on the Solana blockchain, offering innovative ways for users to access and utilize financial resources.",
  defiLlamaId: "rain.fi",
  links: {
    website: "https://rain.fi/",
    discord: "https://discord.gg/rainfi",
    github: "https://github.com/rain-foundation",
    medium: "https://medium.com/@rainfi_",
    documentation: "https://docs.rain.fi/",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const contractNftLending = {
  name: "NFT Lending",
  address: "rNfTQD84kwMbcRpWpLR92BVmxbuwrZc3o5HTauAZiXs",
  networkId: NetworkId.solana,
};

const contractDefiLending = {
  name: "Defi Lending",
  address: "rDeFiHPjHZRLiz4iBzMw3zv6unZs4VwdU6qQcVd3NSK",
  networkId: NetworkId.solana,
};

const contractBank = {
  name: "Vaults",
  address: "rain2M5b9GeFCk792swkwUu51ZihHJb3SUQ8uHxSRJf",
  networkId: NetworkId.solana,
};

const liquidContract = {
  name: "Liquid",
  address: "wJUPXhGwC88LZeG1DXaYing3WB1Q4YvwJcK77bidNGv",
  networkId: NetworkId.solana,
};

export const defiService: ServiceRaw = {
  id: "rain-defi-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contractDefiLending],
  link: "https://rain.fi/",
  description:
    "Peer-to-peer token lending allowing users to create or accept loan offers with customizable terms, rates, and collateral requirements.",
};

export const nftService: ServiceRaw = {
  id: "rain-nft-lending",
  name: "NFT Lending",
  platformId: platform.id,
  contractsRaw: [contractNftLending],
  description:
    "NFT-collateralized lending enabling users to borrow against NFT assets with peer-to-peer loan offers and flexible repayment terms.",
};

export const vaultsService: ServiceRaw = {
  id: "rain-vaults",
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [contractBank],
  description:
    "Lending vaults aggregating depositor funds to automatically fulfill loan requests and earn passive yield from interest payments.",
};

export const liquidService: ServiceRaw = {
  id: "rain-vaults-liquid",
  name: "Liquid",
  platformId: platform.id,
  contractsRaw: [liquidContract],
  description:
    "Liquid staking product providing receipt tokens for vault deposits, enabling users to maintain liquidity while earning lending yields.",
};

export const services: ServiceRaw[] = [
  defiService,
  nftService,
  vaultsService,
  liquidService,
];
