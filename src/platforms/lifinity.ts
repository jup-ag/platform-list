import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "lifinity",
  name: "Lifinity",
  description:
    "Lifinity is an oracle-based DEX designed to improve capital efficiency and reverse impermanent loss through proactive market making.",
  defiLlamaId: "lifinity",
  links: {
    website: "https://lifinity.io/",
    discord: "http://discord.gg/K2tvfcXwWr",
    twitter: "https://x.com/Lifinity_io",
    github: "https://github.com/Lifinity-Labs",
    medium: "https://medium.com/@lifinity.io",
    documentation: "https://docs.lifinity.io/",
  },
  tokens: [
    "LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp",
    "xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu",
  ],
  tags: ["dapp", "dex", "amm", "defi"],
  isDeprecated: true,
};

const contract = {
  name: "Locker",
  address: "LLoc8JX5dLAMVzbzTNKG6EFpkyJ9XCsVAGkqwQKUJoa",
  networkId: NetworkId.solana,
};

const rewarderContract = {
  name: "Rewarder",
  address: "LRewdYDnxyP9HXCL6DQYgTaeL9FKb5Pc8Gr4UbVrtnj",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-locker`,
  name: "Locker",
  platformId: platform.id,
  contractsRaw: [contract],
  description:
    "Token locking mechanism allowing users to lock LFNTY for veLFNTY to earn protocol fees and participate in governance voting.",
};

export const rewarderService: ServiceRaw = {
  id: `${platform.id}-Reward`,
  name: "Reward",
  platformId: platform.id,
  contractsRaw: [rewarderContract],
  description:
    "Rewards distribution contract allocating trading fees and incentives to veLFNTY holders and liquidity providers.",
};

export const services: ServiceRaw[] = [service, rewarderService];
