import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "glam",
  name: "GLAM",
  description:
    "GLAM is a vault and tokenization protocol on Solana providing programmable infrastructure with onchain policies and access controls.",
  links: {
    website: "https://www.glam.systems/",
    twitter: "https://x.com/glamsystems",
    github: "https://github.com/glamsystems/",
    documentation: "https://docs.glam.systems/",
  },
  tags: ["defi", "institutional", "vault", "rwa", "infrastructure"],
  addedAt: 1770984000000,
};

const protocolContract = {
  name: "Protocol",
  address: "GLAMpaME8wdTEzxtiYEAa5yD8fZbxZiz2hNtV58RZiEz",
  networkId: NetworkId.solana,
};

const mintContract = {
  name: "Mint",
  address: "GM1NtvvnSXUptTrMCqbogAdZJydZSNv98DoU5AZVLmGh",
  networkId: NetworkId.solana,
};

const cctpContract = {
  name: "CCTP Integration",
  address: "G1NTcMDYgNLpDwgnrpSZvoSKQuR9NXG7S3DmtNQCDmrK",
  networkId: NetworkId.solana,
};

const driftContract = {
  name: "Drift Integration",
  address: "G1NTdrBmBpW43msRQmsf7qXSw3MFBNaqJcAkGiRmRq2F",
  networkId: NetworkId.solana,
};

const kaminoContract = {
  name: "Kamino Integration",
  address: "G1NTkDEUR3pkEqGCKZtmtmVzCUEdYa86pezHkwYbLyde",
  networkId: NetworkId.solana,
};

const splContract = {
  name: "SPL Integration",
  address: "G1NTsQ36mjPe89HtPYqxKsjY5HmYsDR6CbD2gd2U2pta",
  networkId: NetworkId.solana,
};

export const protocolService: ServiceRaw = {
  id: `${platform.id}-protocol`,
  name: "Protocol",
  platformId: platform.id,
  contractsRaw: [protocolContract],
};
export const mintService: ServiceRaw = {
  id: `${platform.id}-mint`,
  name: "Mint",
  platformId: platform.id,
  contractsRaw: [mintContract],
};
export const cctpService: ServiceRaw = {
  id: `${platform.id}-cctp`,
  name: "CCTP Integration",
  platformId: platform.id,
  contractsRaw: [cctpContract],
};
export const driftService: ServiceRaw = {
  id: `${platform.id}-drift`,
  name: "Drift Integration",
  platformId: platform.id,
  contractsRaw: [driftContract],
};
export const kaminoService: ServiceRaw = {
  id: `${platform.id}-kamino`,
  name: "Kamino Integration",
  platformId: platform.id,
  contractsRaw: [kaminoContract],
};
export const splService: ServiceRaw = {
  id: `${platform.id}-spl`,
  name: "SPL Integration",
  platformId: platform.id,
  contractsRaw: [splContract],
};

export const services: ServiceRaw[] = [
  protocolService,
  mintService,
  cctpService,
  driftService,
  kaminoService,
  splService,
];
export default services;
