import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "exponent",
  name: "Exponent",
  description:
    "Exponent is a yield exchange allowing users to choose between fixed or leveraged DeFi yields.",
  defiLlamaId: "exponent",
  links: {
    website: "https://www.exponent.finance",
    telegram: "https://t.me/exponentcitizens",
    twitter: "https://x.com/exponentfinance",
    github: "https://github.com/exponent-finance",
    documentation: "https://docs.exponent.finance/",
  },
  tags: ["dapp", "defi", "vault"],
};

const contract = {
  name: "Core",
  address: "ExponentnaRg3CQbW6dqQNZKXp7gtZ9DGMp1cwC4HAS7",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "exponent-core",
  name: "Core",
  platformId: platform.id,
  contractsRaw: [contract],
};

const v2Contract = {
  name: "V2",
  address: "XPC1MM4dYACDfykNuXYZ5una2DsMDWL24CrYubCvarC",
  networkId: NetworkId.solana,
};

export const v2Service: ServiceRaw = {
  id: "exponent-v2",
  name: "V2",
  platformId: platform.id,
  contractsRaw: [v2Contract],
};

const vaultsContract = {
  name: "Vaults",
  address: "sVau1tXvayVWfotzm9Ahcv2qfnnfRWttt78BCnNC6dD",
  networkId: NetworkId.solana,
};

export const vaultsService: ServiceRaw = {
  id: "exponent-vaults",
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [vaultsContract],
};

export const services: ServiceRaw[] = [service, v2Service, vaultsService];
