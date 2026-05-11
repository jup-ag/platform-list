import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "glow",
  name: "Glow",
  description:
    "Glow Finance is a DeFi protocol offering lending, borrowing, and yield optimization strategies.",
  tags: ["dapp", "defi", "lending", "restaking"],
  links: {
    website: "https://app.glowfinance.xyz/",
    twitter: "https://x.com/glowfinancexyz",
    discord: "https://discord.gg/glowfinance",
  },
};

const marketsContract = {
  name: "Markets",
  address: "GLoWMgcn3VbyFKiC2FGMgfKxYSyTJS7uKFwKY2CSkq9X",
  networkId: NetworkId.solana,
};

export const marketsService: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  contractsRaw: [marketsContract],
};

const liquidRestakingContract = {
  name: "Glow Liquid Restaking",
  address: "LRtc6q4AhSr3k9dSLXpTRoAP1hBrgbQSiFkuQpuHaq3",
  networkId: NetworkId.solana,
};

export const liquidRestakingService: ServiceRaw = {
  id: `${platform.id}-liquid-restaking`,
  name: "Glow Liquid Restaking",
  platformId: platform.id,
  contractsRaw: [liquidRestakingContract],
};

export const services: ServiceRaw[] = [marketsService, liquidRestakingService];
