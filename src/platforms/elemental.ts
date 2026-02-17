import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "elemental",
  name: "Elemental",
  description:
    "Elemental is a DeFi fund providing simplified access to yield strategies and portfolio management.",
  links: {
    website: "https://elemental.fund/",
    telegram: "https://tg.elemental.fund",
    twitter: "https://x.com/elementaldefi",
    github: "https://github.com/elementalfund",
    documentation: "https://docs.elemental.fund/",
  },
  tags: ["dapp", "lending", "vault", "defi"],
};

const contract = {
  name: "Elemental",
  address: "ELE5vYY81W7UCpTPs7SyD6Bwm5FwZBntTW8PiGqM5d4A",
  networkId: NetworkId.solana,
};

const onycContract = {
  name: "Elemental",
  address: "ELE6rYCZUaegWxVhWM4ef9pXZBAgGUVaVKkTbDvX6BMU",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "elemental-fund",
  name: "Elemental",
  platformId: platform.id,
  contractsRaw: [contract],
};
export const onycService: ServiceRaw = {
  id: "elemental-fund-onyc",
  name: "ONyc",
  platformId: platform.id,
  contractsRaw: [onycContract],
};

export const services: ServiceRaw[] = [service, onycService];
