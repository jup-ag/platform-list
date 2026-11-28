import { NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "forg3r",
  name: "Forg3r",
  description:
    "Fixed-price community token launchpad on Solana and BNB Smart Chain.",
  tags: ["launchpad", "dapp"],
  links: {
    website: "https://forg3r.com/",
    twitter: "https://x.com/Forg3rApp",
    github: "https://github.com/BrigidForge/forg3r-onchain",
  },
  addedAt: 1795833305304,
};

export const services: ServiceRaw[] = [
  {
    id: "forg3r-launch",
    name: "Token launches",
    platformId: platform.id,
    contractsRaw: [
      {
        name: "Forg3r launch program",
        address: "F8yTj3mGEdFHe4exU26Vf2tFTfYnbuBNcwF8VdkM9uiw",
        networkId: NetworkId.solana,
      },
    ],
  },
];

export default services;
