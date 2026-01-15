import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "paraswap",
  name: "Paraswap",
  description:
    "ParaSwap is a DEX aggregator that combines liquidity from multiple decentralized exchanges to find users optimal swap rates with gas efficiency.",
  defiLlamaId: "paraswap",
  links: {
    website: "https://paraswap.io/",
    discord: "https://discord.gg/paraswap",
    twitter: "https://x.com/paraswap",
    github: "https://github.com/paraswap",
    documentation: "https://developers.paraswap.network/",
  },
  tags: ["tool", "dex", "dapp", "defi", "bridge"],
  isDeprecated: true,
};
export const services: ServiceRaw[] = [];
