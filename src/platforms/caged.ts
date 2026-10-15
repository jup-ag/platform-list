import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "caged",
  name: "Caged",
  description:
    "Token locker for pump.fun and stonk.fun coins. Locked tokens keep receiving the launchpad's holder rewards, which the lock owner can claim while the tokens stay locked.",
  defiLlamaId: "caged",
  tags: ["tool", "dapp"],
  links: {
    website: "https://cagedballs.fun/",
    twitter: "https://x.com/cagedballs",
    github: "https://github.com/mad-cook/caged",
    documentation:
      "https://github.com/mad-cook/caged/blob/main/docs/INTEGRATION.md",
  },
  platformToken: "FAQTVQn2dgerSw6sWDE3dx6duPpaAqjfDo8pXS4fpump",
  addedAt: 1757808000000,
};

const lockerContract = {
  name: "Holder Locker",
  address: "65cX8gGch8x4vQvU4gnpPcepwKadDSAtJ4ZgZg3hp61t",
  networkId: NetworkId.solana,
};

export const lockerService: ServiceRaw = {
  id: `${platform.id}-locker`,
  name: "Token Locker",
  platformId: platform.id,
  contractsRaw: [lockerContract],
  link: "https://cagedballs.fun/",
  description:
    "Time-locks tokens in a per-lock vault owned by a holder address, so pump.fun and stonk.fun holder-reward distributions keep landing on the lock. Rewards are claimable at any time; tokens unlock at the chosen date.",
};

export const services: ServiceRaw[] = [lockerService];
export default services;
