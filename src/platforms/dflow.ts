import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "dflow",
  name: "DFlow",
  description:
    "DFlow is a low-latency DEX aggregator using on-chain data for millisecond price calculations across AMMs, CLMMs, and CLOBs.",
  links: {
    website: "https://dflow.net/",
    discord: "https://discord.gg/dflow",
    twitter: "https://x.com/dflow",
  },
  defiLlamaId: "dflow",
  tags: ["dapp", "bridge", "prediction"],
};

export const contract = {
  name: "Aggregator",
  address: "DF1ow4tspfHX9JwWJsAb9epbkA8hmpSEAtxXy1V27QBH",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-aggregator`,
  name: "Aggregator",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
