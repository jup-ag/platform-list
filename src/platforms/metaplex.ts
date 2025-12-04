import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "metaplex",
  name: "Metaplex",
  description: "Build decentralizedapplications on Solana and the SVM",
  links: {
    website: "https://metaplex.com",
    discord: "https://discord.gg/metaplex",
    twitter: "https://x.com/metaplex",
    github: "https://github.com/metaplex-foundation",
    documentation: "https://www.metaplex.com/guides",
  },
  tokens: ["METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m"],
  tags: ["tool", "dapp"],
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

export const candyMachineContract = {
  name: `Candy Machine`,
  address: "CMAGAKJ67e9hRZgfC5SFTbZH8MgEmtqazKXjmkaJjWTJ",
  networkId: NetworkId.solana,
};

export const cnftService: ServiceRaw = {
  id: `${platform.id}-cnft`,
  name: "Bubblegum (cNFT)",
  platformId: platform.id,
  contractsRaw: [bubblegumContract],
};

export const metadataService: ServiceRaw = {
  id: `${platform.id}-metadata`,
  name: "Token Metadata",
  platformId: platform.id,
  contractsRaw: [metaplexContract],
};

export const coreService: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [coreContract],
};

export const candyMachineService: ServiceRaw = {
  id: `${platform.id}-candy-machine`,
  name: "Candy Machine",
  platformId: platform.id,
  contractsRaw: [candyMachineContract],
};

export const services: ServiceRaw[] = [
  cnftService,
  metadataService,
  coreService,
  candyMachineService,
];
