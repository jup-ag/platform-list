import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "hedge",
  name: "Hedge",
  links: {
    website: "https://www.hedge.so/",
    twitter: "https://x.com/HedgeLabs",
    github: "https://github.com/Hedge-Finance",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "HedgeEohwU6RqokrvPU4Hb6XKPub8NuKbnPmY7FoMMtN",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
