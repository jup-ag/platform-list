import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "jupiter-pm",
  name: "Jupiter Predict",
  description: "Jupiter Prediction Market, trade on real-world events.",
  links: {
    website: "https://jup.ag/prediction",
    discord: "https://discord.gg/jup",
    twitter: "https://x.com/jup_predict",
    github: "https://github.com/jup-ag",
  },
  tags: ["dapp", "prediction"],
};

const contract = {
  name: "Prediction Market",
  address: "3ZZuTbwC6aJbvteyVxXUS7gtFYdf7AuXeitx6VyvjvUp",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-prediction-market`,
  name: "Prediction Market",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
