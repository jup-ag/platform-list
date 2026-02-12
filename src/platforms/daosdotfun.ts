import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "daosdotfun",
  name: "daos.fun",
  description:
    "launch an AI agent or DAO in 1-click alongside ai16z on Solana's biggest AI capital market.",
  links: {
    website: "https://www.daos.fun/",
    twitter: "https://x.com/daosdotfun",
    documentation: "https://www.daos.fun/playbook",
  },
  tags: ["launchpad"],
};

const contract = {
  name: "Coin",
  address: "4FqThZWv3QKWkSyXCDmATpWkpEiCHq5yhkdGWpSEDAZM",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-coin`,
  name: "Coin",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
