import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "byreal",
  name: "Byreal",
  description:
    "Byreal is a hybrid DEX by Bybit combining concentrated liquidity (CLMM) with Request-for-Quote (RFQ) routing for low-slippage, MEV-protected trades.",
  tags: ["dapp"],
  defiLlamaId: "byreal",
  links: {
    website: "https://www.byreal.io/",
    telegram: "https://t.me/Byreal_Community",
    twitter: "https://x.com/byreal_io",
    documentation: "https://docs.byreal.io/products/getting-started",
  },
};

const clmmContract = {
  name: "CLMMM",
  address: "REALQqNEomY6cQGZJUGwywTBD2UmDT32rZcNnfxQ5N2",
  networkId: NetworkId.solana,
};

const resetContract = {
  name: "Reset",
  address: "REALdpFGDDsiD9tvxYsXBTDpgH1gGQEqJ8YSLdYQWGD",
  networkId: NetworkId.solana,
};

const routerContract = {
  name: "Router",
  address: "REALp6iMBDTctQqpmhBo4PumwJGcybbnDpxtax3ara3",
  networkId: NetworkId.solana,
};

const rfqContract = {
  name: "RFQ",
  address: "REALFP9S4VmrAixmeYa68FrPKn4NVD2QFxxMfz9arhz",
  networkId: NetworkId.solana,
};

export const clmmService: ServiceRaw = {
  id: "byreal-clmm",
  name: "CLMM",
  platformId: platform.id,
  contractsRaw: [clmmContract],
  link: "https://www.byreal.io/pools",
  description:
    "Concentrated liquidity market maker pools enabling capital-efficient liquidity provision with customizable price ranges.",
};

export const resetService: ServiceRaw = {
  id: "byreal-reset",
  name: "Reset Launchpad",
  platformId: platform.id,
  contractsRaw: [resetContract],
  description:
    "Fair token launchpad with Smart Price Ladder and Fairshare Engine for democratized IDO access and transparent price-based allocation.",
};

export const routerService: ServiceRaw = {
  id: "byreal-router",
  name: "Router",
  platformId: platform.id,
  contractsRaw: [routerContract],
  description:
    "Smart-routing engine combining CLMM and RFQ mechanisms to find optimal trade paths with minimal slippage.",
};

export const rfqService: ServiceRaw = {
  id: "byreal-rfq",
  name: "RFQ",
  platformId: platform.id,
  contractsRaw: [rfqContract],
  link: "https://www.byreal.io/swap",
  description:
    "Request-for-Quote system enabling gasless, zero-slippage trades with MEV protection through CEX liquidity integration.",
};

export const services: ServiceRaw[] = [
  clmmService,
  resetService,
  routerService,
  rfqService,
];
