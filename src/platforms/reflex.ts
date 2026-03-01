import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "reflex",
  name: "Reflex",
  description:
    "Pump.fun staking protocol that redirects creator fees to token holders as SOL rewards.",
  tags: ["dapp", "defi"],
  addedAt: 1738281600000,
  links: {
    website: "https://rflx.fi/",
    twitter: "https://x.com/rflx_fi",
    github: "https://github.com/reflexfi",
    documentation: "https://rflx.fi/faq/",
  },
};

const stakingContract = {
  name: "Staking",
  address: "7mSqZcYPUGm99M6sGpNRHjorbB1NPF3ThyTpEjhkKzKF",
  networkId: NetworkId.solana,
};

const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [service];
export default services;
