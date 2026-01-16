import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "magiceden",
  name: "MagicEden",
  description: "The NFT Marketplace.",
  defiLlamaId: "magiceden",
  links: {
    website: "https://magiceden.io/solana",
    discord: "https://discord.gg/magiceden",
    twitter: "https://x.com/MagicEden",
    github: "https://github.com/magiceden",
    documentation: "https://community.magiceden.io/learn",
  },
  platformToken: "MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u",
  tags: ["tool", "nft-marketplace", "dapp"],
};

const ammContract = {
  name: "AMM",
  address: "mmm3XBJg5gk8XJxEKBvdgptZz6SgK4tXvn36sodowMc",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Magic Claim",
  address: "mcmexbLZHASMjxjARNvDhXnEQT8vMP4uWnBi1Et8RdX",
  networkId: NetworkId.solana,
};

const distributionContract = {
  name: "Magic Claim Distribution",
  address: "disGCfSiJKFigEphfou4PGHn1rukMfbs9cg9GpTM6oe",
  networkId: NetworkId.solana,
};

const escrowContract = {
  name: "MarketPlace V2",
  address: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
  networkId: NetworkId.solana,
};

const cnftContract = {
  name: "CNFT",
  address: "M3mxk5W2tt27WGT7THox7PmgRDp4m6NEhL5xvxrBfS1",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "veTbq5fF2HWYpgmkwjGKTYLVpY6miWYYmakML7R7LRf",
  networkId: NetworkId.solana,
};

const auctionV1Contract = {
  name: "Auction V1",
  address: "EA15T2W45BJFm71XmB5VGcsiWGKZTNfnK6aCmE2Hb5eC",
  networkId: NetworkId.solana,
};

const auctionContract = {
  name: "Auction V2",
  address: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
  networkId: NetworkId.solana,
};

const candyMachineContract = {
  name: "Candy Machine",
  address: "CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb",
  networkId: NetworkId.solana,
};

export const escrowService: ServiceRaw = {
  id: `${platform.id}-marketPlace`,
  name: "MarketPlace V2",
  platformId: platform.id,
  contractsRaw: [escrowContract],
  description:
    "NFT marketplace escrow system managing secure token transfers between buyers and sellers.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "Token staking program allowing ME holders to lock tokens for governance voting power and earn protocol rewards.",
};

export const auctionV1Service: ServiceRaw = {
  id: `${platform.id}-auction-v1`,
  name: "Auction V1",
  platformId: platform.id,
  contractsRaw: [auctionV1Contract],
};

export const auctionV2Service: ServiceRaw = {
  id: `${platform.id}-auction-v2`,
  name: "Auction V2",
  platformId: platform.id,
  contractsRaw: [auctionContract],
};

export const cnftService: ServiceRaw = {
  id: `${platform.id}-cnft`,
  name: "cNFT",
  platformId: platform.id,
  contractsRaw: [cnftContract],
  description:
    "Compressed NFT trading infrastructure enabling low-cost transactions for large-scale NFT collections using state compression technology.",
};

export const launchpadService: ServiceRaw = {
  id: `${platform.id}-launchpad`,
  name: "Launchpad",
  platformId: platform.id,
  contractsRaw: [candyMachineContract],
  link: "https://magiceden.io/launchpad",
  description:
    "NFT launch platform powered by Candy Machine, enabling creators to mint and distribute new NFT collections with customizable parameters.",
};

export const ammService: ServiceRaw = {
  id: `${platform.id}-amm`,
  name: "AMM",
  platformId: platform.id,
  contractsRaw: [ammContract],
  description:
    "NFT AMM pools enabling instant liquidity for collections, allowing users to buy and sell NFTs against bonding curve-based pools.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract, distributionContract],
  description:
    "ME token distribution program for marketplace users and NFT traders.",
};

export const services: ServiceRaw[] = [
  escrowService,
  stakingService,
  auctionV1Service,
  auctionV2Service,
  cnftService,
  launchpadService,
  ammService,
  airdropService,
];
