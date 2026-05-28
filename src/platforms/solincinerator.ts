import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solincinerator",
  name: "Sol Incinerator",
  description:
    "Sol Incinerator is a utility tool for burning unwanted NFTs, tokens, and empty accounts to reclaim SOL rent deposits.",
  links: {
    website: "https://sol-incinerator.com/",
    twitter: "https://x.com/solincinerator",
    discord: "https://discord.gg/solslugs",
  },
  tags: ["tool", "dapp"],
};

const incineratorContract = {
  name: "Incinerator",
  address: "F6fmDVCQfvnEq2KR8hhfZSEczfM9JK9fWbCsYJNbTGn7",
  networkId: NetworkId.solana,
};

const safecineratorContract = {
  name: "Safecinerator",
  address: "CLEANALo6FtS6quqTTEXDGFFTuSKMkeKGgcweeiPRJzK",
  networkId: NetworkId.solana,
};

export const cleanupService: ServiceRaw = {
  id: `${platform.id}-cleanup`,
  name: "Cleanup",
  platformId: platform.id,
  contractsRaw: [incineratorContract, safecineratorContract],
};

export const services: ServiceRaw[] = [cleanupService];
