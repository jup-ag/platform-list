import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "privacycash",
  name: "Privacy Cash",
  description: "Transfer SOL privately",
  links: {
    website: "https://www.privacycash.org/",
    discord: "https://discord.gg/8guY9uXBvA",
    twitter: "https://x.com/theprivacycash",
  },
  tags: ["dapp", "privacy"],
  addedAt: 1761652800000,
};

const contract = {
  name: "Send",
  address: "9fhQBbumKEFuXtMBDw8AaQyAjCorLGJQiS3skWZdQyQD",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-send`,
  name: "Send",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
