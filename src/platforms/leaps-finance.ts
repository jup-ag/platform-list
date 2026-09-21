import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "leaps-finance",
  name: "Leaps Finance",
  description: "Leaps Finance is a Solana DeFi options protocol.",
  tags: ["dapp", "defi", "options"],
  links: {
    website: "https://www.leaps.finance/",
    twitter: "https://x.com/leaps_finance",
    telegram: "https://t.me/leaps_finance",
    documentation: "https://devdocs.leaps.finance/",
  },
  addedAt: 1789689600000,
};

const optionsContract = {
  name: "Options",
  address: "34KB5Vft9tBhxt5R7svx3YdDTFKNDLA61j5pwSgaTD8t",
  networkId: NetworkId.solana,
};

export const optionsService: ServiceRaw = {
  id: `${platform.id}-options`,
  name: "Options",
  platformId: platform.id,
  contractsRaw: [optionsContract],
  link: "https://www.leaps.finance/",
  description:
    "Covered calls and cash-secured puts on SOL, BTC and stablecoins, with the option premium paid upfront.",
};

export const services: ServiceRaw[] = [optionsService];
export default services;
