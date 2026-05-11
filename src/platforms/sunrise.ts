import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "sunrise",
  name: "Sunrise",
  description:
    "Any asset, any chain. Live on Solana from day one. DeFi asset gateway for token listings, day-one liquidity, and canonical markets.",
  links: {
    website: "https://www.sunrisedefi.com/",
    twitter: "https://x.com/sunrisedefi",
    telegram: "https://t.me/sunrise_defi",
    discord: "https://discord.gg/sunrise-defi",
  },
  tags: ["bridge"],
  parentId: "wormhole",
};

export const services: ServiceRaw[] = [];
