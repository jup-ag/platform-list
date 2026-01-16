import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "onre",
  name: "OnRe",
  description:
    "OnRe is a yield-bearing stablecoin protocol offering a dollar-pegged asset with built-in yield.",
  defiLlamaId: "onre",
  links: {
    website: "https://www.onre.finance/",
    twitter: "https://x.com/onrefinance",
    github: "https://github.com/onre-finance",
    telegram: "https://t.me/+mW8VqpLlFIExMmMx",
  },
  tags: ["dapp", "stablecoin", "institutional"],
};
const depositContract: ContractRaw = {
  name: `Deposit`,
  address: "onreuGhHHgVzMWSkj2oQDLDtvvGvoepBPkqyaubFcwe",
  networkId: NetworkId.solana,
};

export const depositService: ServiceRaw = {
  id: `${platform.id}-deposit`,
  name: "Deposit",
  platformId: platform.id,
  contractsRaw: [depositContract],
};

export const services: ServiceRaw[] = [depositService];
