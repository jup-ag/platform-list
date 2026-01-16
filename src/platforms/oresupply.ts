import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "oresupply",
  name: "OreSupply",
  description:
    "ORE Supply is the original proof-of-work mining protocol enabling users to mine ORE tokens using computational puzzles.",
  defiLlamaId: "ore-protocol",
  tags: ["tool"],
  links: {
    website: "https://ore.supply/",
    discord: "https://discord.gg/4TQfshAAsT",
    twitter: "https://x.com/oresupply",
    github: "https://github.com/regolith-labs/ore",
    documentation: "https://ore.supply/mine",
  },
  platformToken: "oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp",
};

const contract = {
  name: "Mining",
  address: "poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc",
  networkId: NetworkId.solana,
};

const legacyStakingContract = {
  name: "V1",
  address: "BoostzzkNfCA9D1qNuN5xZxB5ErbK4zQuBeTHGDpXT1",
  networkId: NetworkId.solana,
};

const v2Contract = {
  name: "V2",
  address: "oreV2ZymfyeXgNgBdqMkumTqqAprVqgBWQfoYkrtKWQ",
  networkId: NetworkId.solana,
};

const v3Contract = {
  name: "V3",
  address: "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-mining`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [contract],
  description:
    "Proof-of-work mining pools allowing users to contribute hash power and earn ORE token rewards.",
};

export const v1Service: ServiceRaw = {
  id: `${platform.id}-v1`,
  name: "V1",
  platformId: platform.id,
  contractsRaw: [legacyStakingContract],
};

export const v2Service: ServiceRaw = {
  id: `${platform.id}-v2`,
  name: "V2",
  platformId: platform.id,
  contractsRaw: [v2Contract],
};

export const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "V3",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [
  service,
  v1Service,
  v2Service,
  v3Service,
];
