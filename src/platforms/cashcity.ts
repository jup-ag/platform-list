import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "cashcity",
  name: "Cash City",
  description:
    "Cash City is a competitive Trading Firm simulator built on Solana.",
  links: {
    website: "https://www.cashcity.fun/",
    twitter: "https://x.com/cashcitydotfun",
    documentation: "https://docs.cashcity.fun/",
  },
  tags: ["gaming"],
  tokens: ["9QYybdHqCWB53h3bpJ6DY2ojgXavQKKe2yZR66xzDAKh"],
};

const contract = {
  name: "Game",
  address: "DGgwXnCW9ERZoqEbk47Z1Ny7tHmpptFLzBmq9ydua259",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-game`,
  name: "Game",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
