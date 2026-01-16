import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bonkbot",
  name: "BONKbot",
  description:
    "BONKbot is a Telegram-based trading bot that enables fast token swaps, limit orders, and DCA strategies directly through Telegram chat.",
  links: {
    website: "https://bonkbot.io/",
    twitter: "https://x.com/bonkbot_io",
    documentation: "https://docs.bonkbot.io/",
  },
  defiLlamaId: "bonkbot",
  tags: ["tool", "dapp"],
};

const contract = {
  name: "Router",
  address: "CxvksNjwhdHDLr3qbCXNKVdeYACW8cs93vFqLqtgyFE5",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Trading",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
