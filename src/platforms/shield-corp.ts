import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "shield-corp",
  name: "Shield Corp",
  description:
    "Accessible token risk analysis and Jupiter-powered swaps on Solana.",
  links: {
    website: "https://bagsshield.org/",
    github: "https://github.com/Prestes16",
    documentation: "https://bagsshield.org/docs/intro",
  },
  tags: ["dapp", "tool", "defi", "trading"],
  addedAt: 1795824000000,
};

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-token-scanner`,
    name: "Token Scanner",
    platformId: platform.id,
    link: "https://app.bagsshield.org/",
    description: "Analyzes token risk signals on Solana.",
    contractsRaw: [],
  },
  {
    id: `${platform.id}-swap`,
    name: "Swap",
    platformId: platform.id,
    link: "https://app.bagsshield.org/",
    description: "Routes Solana token swaps through Jupiter.",
    contractsRaw: [],
  },
];

export default services;
