import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "gdex",
  name: "GDEX",
  description:
    "GDEX is Gemach DAO's multi-chain trading terminal. On Solana it routes swaps through pump.fun, PumpSwap, Jupiter, Raydium, Meteora and Orca, and it also offers copy trading, limit orders and Hyperliquid perpetuals.",
  defiLlamaId: "gdex-spot",
  links: {
    website: "https://gdex.pro/",
    twitter: "https://x.com/gemach_io",
    discord: "https://discord.com/invite/QDHsGPQdx3",
    telegram: "https://t.me/gemach_public",
    github: "https://github.com/GemachDAO",
    documentation: "https://docs.gemach.io/",
  },
  tags: ["dapp", "trading", "dex"],
  addedAt: 1790899200000,
};

export const services: ServiceRaw[] = [];
export default services;
