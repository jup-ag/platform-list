import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "bullentine",
  name: "Bullentine",
  description:
    "The strength of the Bull. The Heart of a Lover. Tonight, we dine in green candles!",
  defiLlamaId: "bullentine",
  links: {
    website: "https://bullentine.com/",
    twitter: "https://x.com/bullentinesol",
    telegram: "https://t.me/bullentinesol",
    github: "https://github.com/bullentinesol",
  },
  tags: ["memecoin"],
};

const contract: ContractRaw = {
  name: "Main",
  address: "Ei8WTRFug6e1ipXPbd5vgZ47CwSc7ArjpQdB2fk78Usu",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [mainService];
