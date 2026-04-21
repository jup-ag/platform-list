import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "rise",
  name: "Rise",
  description: "RISE is a permissionless token launch platform",
  tags: ["launchpad"],
  links: {
    website: "https://rise.rich/",
    telegram: "https://t.me/rise_dot_rich",
    twitter: "https://x.com/risedotrich",
    github: "https://github.com/riserich",
    documentation: "https://docs.rise.rich",
  },
};

const contract = {
  name: "Launchpad",
  address: "RiseZSHaLdj7pfn1tisUoSdG2i3QcVz9sQKuaRG9rar",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "rise-launchpad",
  name: "Rise",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
