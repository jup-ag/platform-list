import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "diversifi",
  name: "DiversiFi",
  description: "The Platform for Onchain Index Trading ",
  links: {
    website: "https://diversifi.trade/",
    twitter: "https://x.com/useDiversiFi",
  },
  tags: ["trading", "defi"],
};

const contract: ContractRaw = {
  address: "3vyr9DRfMZb2KvUQdnps7YG3PY38XdguLBQaJ2DFkSxk",
  name: "Main",
  networkId: NetworkId.solana,
};

const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
