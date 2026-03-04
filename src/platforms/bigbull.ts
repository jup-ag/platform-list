import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "bigbull",
  name: "BigBull",
  description: "Invest in Top US Stocks",
  links: {
    website: "https://bigbull.now/",
    twitter: "https://x.com/BigBullNow",
  },
  tokens: [],
  tags: ["dapp", "rwa", "trading", "defi"],
  addedAt: 1772527779000,
};

export const services: ServiceRaw[] = [];
export default services;
