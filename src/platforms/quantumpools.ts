import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "quantumpools",
  name: "QuantumPools",
  description:
    "LP bookkeeping and metrics for original deposit, fees, impermanent loss, and cover value (Solana + EVM; Uniswap v3 concentrated liquidity).",
  links: {
    website: "https://quantumpools.io",
  },
  tags: ["tool", "defi", "liquidity-provider"],
  addedAt: 1789689600000,
};

export const services: ServiceRaw[] = [];
export default services;
