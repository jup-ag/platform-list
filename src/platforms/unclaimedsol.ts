import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "unclaimedsol",
  name: "Unclaimed SOL",
  description:
    "Unclaimed SOL is a Solana recovery/cleanup tool that deep-scans your wallet history to close what’s safe and return the locked reclaimable balances back to your wallet.",
  links: {
    website: "https://unclaimedsol.com/",
    twitter: "https://x.com/unclaimed_sol",
    discord: "https://discord.gg/SG8hdqfPPt",
    telegram: "https://t.me/unclaimedsol",
    github: "https://github.com/unclaimed-sol/spl-burn-close-sdk",
    documentation: "https://docs.unclaimedsol.com/",
  },
  tags: ["dapp", "tool"],
};

export const services: ServiceRaw[] = [];
export default services;
