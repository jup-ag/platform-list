import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "larix",
  name: "Larix",
  links: {
    website: "https://projectlarix.com/",
    twitter: "http://x.com/ProjectLarix",
    github: "https://github.com/ProjectLarix",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const lendingContract = {
  name: "Lending",
  address: "7Zb1bGi32pfsrBkzWdqd4dFhUXwp5Nybr1zuaEwN34hy",
  networkId: NetworkId.solana,
};

const lendingV2Contract = {
  name: "Lending V2",
  address: "3cKREQ3Z7ioCQ4oa23uGEuzekhQWPxKiBEZ87WfaAZ5p",
  networkId: NetworkId.solana,
};

export const lendingService = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
};

export const lendingV2Service = {
  id: `${platform.id}-lending-v2`,
  name: "Lending V2",
  platformId: platform.id,
  contractsRaw: [lendingV2Contract],
};

export const services = [lendingService, lendingV2Service];
