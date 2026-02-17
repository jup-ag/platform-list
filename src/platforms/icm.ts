import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "icm",
  name: "ICM.RUN",
  description: "Solana's Internet Capital Markets: DAO & Incubator.",
  links: {
    website: "https://icm.run/",
    twitter: "https://x.com/icmdotrun",
    telegram: "https://t.me/icmdotrun",
  },
  tags: ["dao"],
  platformToken: "G5bStqnKXv11fmPvMaagUbZi86BGnpf9zZtyPQtAdaos",
  addedAt: 1770897600000,
};

const stakingContract = {
  name: "Staking",
  address: "BsMCB3NGDVstxsxK34MnazJTHuMjWTjngjGyybVTuS7s",
  networkId: NetworkId.solana,
};

export const stakingService = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services = [stakingService];
