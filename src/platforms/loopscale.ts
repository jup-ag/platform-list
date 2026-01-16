import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "loopscale",
  name: "Loopscale",
  description:
    "Loopscale is an order-book based lending protocol that matches lenders and borrowers directly for customizable loan terms on any asset.",
  defiLlamaId: "loopscale",
  links: {
    website: "https://loopscale.com/",
    discord: "https://discord.gg/loopscale",
    twitter: "https://x.com/Loopscale",
    github: "https://github.com/bridgesplit",
    documentation: "https://docs.loopscale.com/",
  },
  tags: ["dapp", "lending", "defi"],
};

const contract = {
  name: "Loopscale",
  address: "1oopBoJG58DgkUVKkEzKgyG9dvRmpgeEm1AVjoHkF78",
  networkId: NetworkId.solana,
};

const creditBookContract = {
  name: "CreditBook",
  address: "abfcSQac2vK2Pa6UAJb37DzarVxF15bDTdphJzAqYYp",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "loopscale-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://app.loopscale.com/",
  description:
    "Order-book based lending protocol matching borrowers and lenders directly for customizable fixed-rate loans with isolated risk markets.",
};

export const creditBookService: ServiceRaw = {
  id: "loopscale-creditbook",
  name: "CreditBook",
  platformId: platform.id,
  contractsRaw: [creditBookContract],
  description:
    "Limit Creditbook marketplace grouping similar loan orders into standardized categories for concentrated liquidity and efficient matching.",
};

export const services: ServiceRaw[] = [service, creditBookService];
