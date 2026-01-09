import { PlatformRaw, ServiceRaw, NetworkId, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "drift",
  name: "Drift",
  description:
    "Drift brings on-chain, cross-margined perpetual futures. Making futures DEXs the best way to trade.",
  defiLlamaId: "drift",
  tags: ["dapp", "dex", "trading", "vault", "defi"],
  links: {
    website: "https://www.drift.trade/",
    discord: "https://discord.com/invite/fMcZBH8ErM",
    twitter: "https://x.com/DriftProtocol",
    github: "https://github.com/drift-labs",
    documentation: "https://docs.drift.trade/",
  },
  tokens: ["DriFtupJYLTosbwoN8koMbEYSx54aFAVLddWsbksjwg7"],
};

const contract = {
  name: "Drift",
  address: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
  networkId: NetworkId.solana,
};

const vaultsContract: ContractRaw = {
  name: "Drift Vaults",
  address: "vAuLTsyrvSfZRuRB3XgvkPwNGgYSs9YRYymVebLKoxR",
  networkId: NetworkId.solana,
};

const proxyContract = {
  name: "Jit Proxy",
  address: "J1TnP8zvVxbtF5KFp5xRmWuvG9McnhzmBd9XGfCyuxFP",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "E7HtfkEMhmn9uwL7EFNydcXBWy5WCYN1vFmKKjipEH1x",
  networkId: NetworkId.solana,
};

export const perpsService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://app.drift.trade/",
  description:
    "Cross-margined perpetual futures trading with up to 10x leverage, combining an on-chain order book with AMM liquidity for deep markets.",
};

export const marketMakerService: ServiceRaw = {
  id: `${platform.id}-market-maker`,
  name: "Market Maker",
  platformId: platform.id,
  contractsRaw: [proxyContract],
  description:
    "Just-in-time (JIT) liquidity proxy enabling market makers to provide liquidity and fill orders at optimal prices with reduced latency.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const vaultsService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [vaultsContract],
  link: "https://app.drift.trade/vaults",
  description:
    "Managed strategy vaults allowing users to deposit funds and earn yield through automated trading strategies run by professional managers.",
};

export const services: ServiceRaw[] = [
  perpsService,
  marketMakerService,
  airdropService,
];
