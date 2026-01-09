import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "maple",
  name: "Maple",
  description:
    "Maple Finance is an institutional lending protocol offering fixed-income yield products and undercollateralized loans across multiple chains including Solana.",
  defiLlamaId: "maple-finance",
  links: {
    website: "https://www.maple.finance/",
    twitter: "https://x.com/maplefinance",
    discord: "https://discord.gg/maple",
  },
  tags: ["dapp", "lending", "institutional"],
  tokens: ["AvZZF1YaZDziPY2RCK4oJrRVrbN3mTD9NL24hPeaZeUj"],
};

const contract = {
  name: "Lending",
  address: "5D9yi4BKrxF8h65NkVE1raCCWFKUs5ngub2ECxhvfaZe",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
