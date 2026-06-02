import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bulktrade",
  name: "Bulk Trade",
  description:
    "Bulk Trade is a perpetual futures DEX targeting sub-20ms latency and validator-integrated order matching.",
  tags: ["dapp", "dex", "trading"],
  links: {
    website: "https://www.bulk.trade/",
    discord: "https://discord.gg/bulk",
    twitter: "https://x.com/bulktrade",
    documentation: "https://alphadocs.bulk.trade/",
  },
};

const preDepositContract = {
  name: "Pre-Deposit",
  address: "BULK2CNYn3mbgfYXEXiBBFxmmDChznpjQ4oRfce8w6R4",
  networkId: NetworkId.solana,
};

export const preDepositService: ServiceRaw = {
  id: `${platform.id}-pre-deposit`,
  name: "Pre-Deposit",
  platformId: platform.id,
  contractsRaw: [preDepositContract],
};

export const services: ServiceRaw[] = [preDepositService];
