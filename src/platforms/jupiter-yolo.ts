import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";

export const platform: PlatformRaw = {
  id: "jupiter-yolo",
  name: "Jupiter YOLO",
  description:
    "Jupiter YOLO, SOL, BTC and ETH markets with 500–1,000× leverage.",
  links: {
    website: "https://jup.ag/yolo",
    discord: "https://discord.gg/jup",
    twitter: "https://x.com/JupiterExchange",
    github: "https://github.com/jup-ag",
  },
  tags: ["dapp", "trading", "defi"],
  parentId: jupiterPlatform.id,
};

const contract = {
  name: "YOLO",
  address: "yoLovHV5eT4DNPMG2Bu1NLmq8nVygEAPrNT1Rx6vWFA",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "YOLO",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
