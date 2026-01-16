import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "metaplex",
  name: "Metaplex",
  description:
    "Metaplex is the NFT standard and infrastructure protocol for Solana, providing token metadata, compressed NFTs (Bubblegum), and Candy Machine for minting.",
  defiLlamaId: "metaplex",
  links: {
    website: "https://metaplex.com",
    discord: "https://discord.gg/metaplex",
    twitter: "https://x.com/metaplex",
    github: "https://github.com/metaplex-foundation",
    documentation: "https://www.metaplex.com/guides",
  },
  platformToken: "METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m",
  tags: ["tool", "dapp", "nft"],
};

const coreContract = {
  name: `Core`,
  address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d",
  networkId: NetworkId.solana,
};

export const metaplexContract = {
  name: "Token Metadata",
  address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
  networkId: NetworkId.solana,
};

export const bubblegumContract = {
  name: "Bubblegum",
  address: "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
  networkId: NetworkId.solana,
};

const candyMachineV2Contract = {
  name: "Candy Machine V2",
  address: "cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ",
  networkId: NetworkId.solana,
};

export const candyMachineContract = {
  name: `Candy Machine V3`,
  address: "CMAGAKJ67e9hRZgfC5SFTbZH8MgEmtqazKXjmkaJjWTJ",
  networkId: NetworkId.solana,
};

export const candyMachineV2Service: ServiceRaw = {
  id: `${platform.id}-candy-machine-v2`,
  name: "Candy Machine V2",
  platformId: platform.id,
  contractsRaw: [candyMachineV2Contract],
};

export const cnftService: ServiceRaw = {
  id: `${platform.id}-cnft`,
  name: "Bubblegum (cNFT)",
  platformId: platform.id,
  contractsRaw: [bubblegumContract],
  link: "https://developers.metaplex.com/bubblegum",
  description:
    "Compressed NFT standard enabling millions of NFTs to be minted at a fraction of the cost using state compression and merkle trees.",
};

export const metadataService: ServiceRaw = {
  id: `${platform.id}-metadata`,
  name: "Token Metadata",
  platformId: platform.id,
  contractsRaw: [metaplexContract],
  link: "https://developers.metaplex.com/token-metadata",
  description:
    "NFT metadata standard attaching rich metadata (name, symbol, URI, royalties) to SPL tokens, forming the foundation for NFTs.",
};

export const coreService: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [coreContract],
  link: "https://developers.metaplex.com/core",
  description:
    "Next-generation NFT standard with lower costs and improved performance, featuring a single-account design and native plugin support.",
};

export const candyMachineService: ServiceRaw = {
  id: `${platform.id}-candy-machine`,
  name: "Candy Machine V3",
  platformId: platform.id,
  contractsRaw: [candyMachineContract],
};

export const services: ServiceRaw[] = [
  cnftService,
  metadataService,
  coreService,
  candyMachineService,
  candyMachineV2Service,
];
