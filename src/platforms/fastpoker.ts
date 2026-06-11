import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "fastpoker",
  name: "FastPoker",
  description: "Fully on-chain, permissionless poker platform on Solana.",
  links: {
    website: "https://fast.poker/",
    twitter: "https://x.com/FastdotPoker",
  },
  platformToken: "FP111dxqjLRqtuoknQ8L6aaZjqqyFRT6FcAnaCPytJ3",
  tags: ["gaming", "dapp"],
  addedAt: 1749600000000,
};

const pokerProgram = {
  name: "FastPoker",
  address: "PokerXYdXL2SKNnfGbv1WE7vJHipTpNsfZbZeVvoJLn",
  networkId: NetworkId.solana,
};

export const pokerService: ServiceRaw = {
  id: `${platform.id}-poker`,
  name: "FastPoker",
  platformId: platform.id,
  contractsRaw: [pokerProgram],
};

export const services: ServiceRaw[] = [pokerService];
