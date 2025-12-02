import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "atrix",
  name: "Atrix",
  defiLlamaId: "atrix",
  tags: ["dapp"],
  links: {
    website: "https://app.atrix.finance/liquidity",
    discord: "https://discord.com/invite/nfyqSEzUsp",
    twitter: "https://x.com/atrixprotocol",
  },
  description:
    "A Serum-based AMM on Solana allowing for permissionless liquidity and farming.",
  isDeprecated: true,
};

export const services: ServiceRaw[] = [];
