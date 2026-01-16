import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "maxbid",
  name: "Maxbid Pro",
  description:
    "Maxbid Pro is a decentralized leverage trading platform specializing in memecoins, offering non-custodial spot margin trading via Jupiter routing.",
  defiLlamaId: "maxbid",
  links: {
    website: "https://maxbid.pro/trade",
    twitter: "https://x.com/maxbidbro",
    documentation: "https://maxbid-pro.gitbook.io/maxbid-pro",
  },
  tags: ["dapp"],
};
export const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [tradeService];
