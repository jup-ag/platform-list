import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pudgy",
  name: "Pudgy Penguins",
  description: "Pudgy Penguins NFT collection on Solana",
  links: {
    website: "https://pudgypenguins.com/",
    discord: "https://discord.gg/pudgypenguins",
    twitter: "https://x.com/pudgypenguins",
  },
  tags: ["nft-collection"],
  platformToken: "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
};

const contract = {
  name: "Airdrop",
  address: "CUEB3rQGVrvCRTmyjLrPnsd6bBBsGbz1Sr49vxNLJkGR",
  networkId: NetworkId.solana,
};

const service: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
