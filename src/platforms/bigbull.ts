import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "bigbull",
  name: "BigBull",
  description: "Your gateway to premium US stock investments",
  links: {
    website: "https://bigbull.now/",
    twitter: "https://x.com/BigBullNow"
  },
  tokens: [], // Optional
  tags: ["dapp", "liquidity-provider", "rwa", "trading", "vault", "defi", "ai"], // See available tags below
  addedAt: 1772527779, // The timestamp of the day of addition to the list
};

export const services: ServiceRaw[] = [];
export default services;
