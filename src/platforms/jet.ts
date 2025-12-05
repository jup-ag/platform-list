import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "jet",
  name: "Jet",
  links: {
    website: "https://jetprotocol.substack.com/",
    twitter: "https://x.com/jetprotocol",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n",
  networkId: NetworkId.solana,
};

const marginPoolContract = {
  name: "Margin Pool",
  address: "JPPooLEqRo3NCSx82EdE2VZY5vUaSsgskpZPBHNGVLZ",
  networkId: NetworkId.solana,
};

const airspaceContract = {
  name: "Airspace",
  address: "JPASMkxARMmbeahk37H8PAAP1UzPNC4wGhvwLnBsfHi",
  networkId: NetworkId.solana,
};

const marginContract = {
  name: "Margin",
  address: "JPMRGNgRk3w2pzBM1RLNBnpGxQYsFQ3yXKpuk4tTXVZ",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const marginPoolService = {
  id: `${platform.id}-margin-pool`,
  name: "Margin Pool",
  platformId: platform.id,
  contractsRaw: [marginPoolContract],
};

export const airspaceService = {
  id: `${platform.id}-airspace`,
  name: "Airspace",
  platformId: platform.id,
  contractsRaw: [airspaceContract],
};

export const marginService = {
  id: `${platform.id}-margin`,
  name: "Margin",
  platformId: platform.id,
  contractsRaw: [marginContract],
};

export const services = [
  mainService,
  marginPoolService,
  airspaceService,
  marginService,
];
