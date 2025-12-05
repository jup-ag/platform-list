import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "saber",
  name: "Saber",
  defiLlamaId: "saber",
  isDeprecated: true,
  tags: ["dapp"],
  links: {
    website: "https://saberdao.io/",
  },
  tokens: ["Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1"],
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
};

export const routerService: ServiceRaw = {
  id: `${platform.id}-router`,
  name: "Router",
  platformId: platform.id,
  contractsRaw: [routerContract],
};

export const services: ServiceRaw[] = [swapService, routerService];
