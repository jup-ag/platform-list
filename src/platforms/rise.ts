import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "pumpswap",
  name: "PumpSwap",
  description: "Swap tokens on Pump.",
  defiLlamaId: "pumpswap",
  parentId: "pumpfun",
  tags: ["dapp", "dex", "amm", "defi"],
  links: {
    website: "https://swap.pump.fun/",
    telegram: "https://t.me/pumpfunsupport",
    twitter: "https://x.com/pumpfun",
  },
};

const contract = {
  name: "PumpSwap AMM",
  address: "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA",
  networkId: NetworkId.solana,
};

const feesContract = {
  name: "Pump Fees",
  address: "pfeeUxB6jkeY1Hxd7CsFCAjcbHA9rWtchMGdZ6VojVZ",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "pumpswap-amm",
  name: "PumpSwap AMM",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const feesService: ServiceRaw = {
  id: "pumpswap-fees",
  name: "Pump Fees",
  platformId: platform.id,
  contractsRaw: [feesContract],
};

export const services: ServiceRaw[] = [service, feesService];
