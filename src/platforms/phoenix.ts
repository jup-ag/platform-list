import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "phoenix",
  name: "Phoenix",
  description:
    "Phoenix is a decentralized limit order book supporting markets for spot assets.",
  defiLlamaId: "phoenix",
  links: {
    website: "https://www.phoenix.trade/",
    discord: "https://discord.gg/ESaTYGzqpd",
    twitter: "https://x.com/PhoenixTrade",
    github: "https://github.com/Ellipsis-Labs",
    documentation:
      "https://ellipsis-labs.gitbook.io/phoenix-dex/tRIkEFlLUzWK9uKO3W2V",
  },
  tags: ["dapp", "dex", "trading", "defi"],
};

const contract: ContractRaw = {
  name: "Legacy",
  address: "PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY",
  networkId: NetworkId.solana,
};

const eternalContract: ContractRaw = {
  name: "Eternal",
  address: "EtrnLzgbS7nMMy5fbD42kXiUzGg8XQzJ972Xtk1cjWih",
  networkId: NetworkId.solana,
};

export const legacyService: ServiceRaw = {
  id: `${platform.id}-legacy`,
  name: "Legacy",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://www.phoenix.trade/",
  description:
    "On-chain central limit order book enabling traders to place limit and market orders with full price-time priority matching.",
};

export const eternalService: ServiceRaw = {
  id: `${platform.id}-eternal`,
  name: "Eternal",
  platformId: platform.id,
  contractsRaw: [eternalContract],
  link: "https://www.phoenix.trade/",
  description:
    "On-chain central limit order book enabling traders to place limit and market orders with full price-time priority matching.",
};

export const services: ServiceRaw[] = [legacyService, eternalService];
