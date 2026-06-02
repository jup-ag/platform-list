import { NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "minebtc",
  name: "MineBTC",
  description:
    "MineBTC is a Solana country-race arcade where players predict 60-second casino rolls, evolve HashBeast NFTs, and mine fair-launched degenBTC rewards.",
  tags: ["gaming", "prediction", "nft", "bitcoin", "dapp"],
  links: {
    website: "https://minebtc.fun/",
    twitter: "https://x.com/minebtcdotfun",
    telegram: "https://tg.minebtc.fun/",
    github: "https://github.com/LifeOrDream/MineBtc-fi",
    documentation: "https://gameplay.minebtc.fun/",
  },
  platformToken: "CtAu3kc8cQ1jcDMmRTBsDHoPuE3sswCagQ3BuqFDC6dt",
  addedAt: 1780358400000,
};

const mineBtcProgramContract = {
  name: "MineBTC Program",
  address: "1eotiTH2UxCpPMmtzUDGqf1b8dwM7AMKb8a2Tio51an",
  networkId: NetworkId.solana,
};

const marketplaceProgramContract = {
  name: "HashBeast Marketplace",
  address: "BCuofnvb7QUP6xLH83EEbKFNjxz5T5Jp4xLqfEdURYRg",
  networkId: NetworkId.solana,
};

export const gameplayService: ServiceRaw = {
  id: `${platform.id}-gameplay`,
  name: "Gameplay",
  platformId: platform.id,
  contractsRaw: [mineBtcProgramContract],
  description:
    "Country race gameplay, casino roll rewards, staking, emissions, and HashBeast progression.",
};

export const marketplaceService: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [marketplaceProgramContract],
  description: "Permissionless MPL Core marketplace used by HashBeasts.",
};

export const services: ServiceRaw[] = [gameplayService, marketplaceService];
export default services;
