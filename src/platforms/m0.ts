import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "m0",
  name: "M0",
  description:
    "Universal stablecoin middleware enabling builders to create application-specific digital dollars backed by US Treasury bills.",
  links: {
    website: "https://www.m0.org",
    twitter: "https://x.com/m0foundation",
    github: "https://github.com/m0-foundation",
    documentation: "https://docs.m0.org",
  },
  tags: ["infrastructure", "stablecoin"],
};

const earnContract = {
  name: "Earn Program",
  address: "mz2vDzjbQDUDXBH6FPF5s4odCJ4y8YLE5QWaZ8XdZ9Z",
  networkId: NetworkId.solana,
};

const portalContract = {
  name: "Wormhole Portal",
  address: "mzp1q2j5Hr1QuLC3KFBCAUz5aUckT6qyuZKZ3WJnMmY",
  networkId: NetworkId.solana,
};

const wmExtensionContract = {
  name: "wM Extension",
  address: "wMXX1K1nca5W4pZr1piETe78gcAVVrEFi9f4g46uXko",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [earnContract, portalContract, wmExtensionContract],
};

export const services: ServiceRaw[] = [mainService];
