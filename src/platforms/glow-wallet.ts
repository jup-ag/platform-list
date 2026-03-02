import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "glow-wallet",
  name: "Glow Wallet",
  description:
    "A non-custodial Solana wallet available as a browser extension and mobile app.",
  links: {
    website: "https://glow.app/",
    twitter: "https://x.com/glowwallet",
    github: "https://github.com/glow-xyz",
  },
  tags: ["wallet"],
  isDeprecated: true,
};

export const services: ServiceRaw[] = [];
