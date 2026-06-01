import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "saber",
  name: "Saber",
  defiLlamaId: "saber",
  isDeprecated: true,
  tags: ["dapp", "dex", "amm"],
  links: {
    website: "https://claim.saberdao.so/",
    twitter: "https://x.com/thesaberdao",
  },
  platformToken: "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1",
};

const stableswapContract = {
  name: "Stable Swap",
  address: "SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ",
  networkId: NetworkId.solana,
};

const swapContract = {
  name: "Swap",
  address: "YAkoNb6HKmSxQN9L8hiBE5tPJRsniSSMzND1boHmZxe",
  networkId: NetworkId.solana,
};

const routerContract = {
  name: "Router",
  address: "Crt7UoUR6QgrFrN7j8rmSQpUTNWNSitSwWvsWGf1qZ5t",
  networkId: NetworkId.solana,
};

export const swapService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [stableswapContract, swapContract],
  description:
    "Stable swap AMM optimized for trading pegged assets with low slippage and minimal impermanent loss.",
};

export const routerService: ServiceRaw = {
  id: `${platform.id}-router`,
  name: "Router",
  platformId: platform.id,
  contractsRaw: [routerContract],
  description:
    "Smart routing system finding optimal swap paths across multiple Saber pools for best execution.",
};

export const services: ServiceRaw[] = [swapService, routerService];
