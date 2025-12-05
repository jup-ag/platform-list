import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "kineko",
  name: "Kineko",
  links: {
    website: "",
  },
  tags: ["dapp"],
  tokens: ["kNkT1RDnexWqYP3EYGyWv5ZtazB8CfgGAfJtv9AQ3kz"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "CzMjHr8pAc8haq94NvfkurfLs61UPks3jaFcEqvYM3Mr",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
