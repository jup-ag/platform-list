import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sanctum",
  name: "Sanctum",
  description:
    "Sanctum is a liquid staking protocol that provides unified liquidity for LSTs, enabling instant swaps between any liquid staking tokens and native SOL.",
  defiLlamaId: "sanctum",
  tags: ["lst", "dapp", "defi"],
  links: {
    website: "https://www.sanctum.so/",
    discord: "https://discord.gg/sanctumso",
    twitter: "https://x.com/sanctumso",
    github: "https://github.com/igneous-labs",
    documentation: "https://learn.sanctum.so/docs",
  },
  tokens: ["CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu"],
};

const infContract = {
  name: "Infinity",
  address: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx",
  networkId: NetworkId.solana,
};

const voteContract = {
  name: "Vote",
  address: "VAU1T7S5UuEHmMvXtXMVmpEoQtZ2ya7eRb7gcN47wDp",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "bon4Kh3x1uQK16w9b9DKgz3Aw4AP1pZxBJk55Q6Sosb",
  networkId: NetworkId.solana,
};

const routerContract = {
  name: "Router",
  address: "stkitrT1Uoy18Dk1fTrgPw8W6MVzoCfYoAFT4MLsmhq",
  networkId: NetworkId.solana,
};

const asrContract = {
  name: "ASR",
  address: "9R2CZDyVjBBK2bxx6NfKdnYMYfh8TQEphUUgZ4861XqJ",
  networkId: NetworkId.solana,
};

export const voteService: ServiceRaw = {
  id: `${platform.id}-vote`,
  name: "Vote",
  platformId: platform.id,
  contractsRaw: [voteContract],
  description:
    "Governance voting system allowing token holders to participate in protocol decisions and validator gauge voting.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "Token staking program enabling users to lock CLOUD tokens to earn rewards and boost their governance voting power.",
};

export const poolService: ServiceRaw = {
  id: `${platform.id}-pool`,
  name: "Infinity Pool",
  platformId: platform.id,
  contractsRaw: [infContract],
  link: "https://app.sanctum.so/infinity",
  description:
    "Multi-LST liquidity pool enabling instant swaps between any liquid staking tokens with minimal slippage, powered by on-chain stake account valuations.",
};

export const routerService: ServiceRaw = {
  id: `${platform.id}-router`,
  name: "Router",
  platformId: platform.id,
  contractsRaw: [routerContract],
  link: "https://app.sanctum.so/trade",
  description:
    "LST routing service that finds optimal paths for converting between native SOL, stake accounts, and any liquid staking token.",
};

export const asrService: ServiceRaw = {
  id: `${platform.id}-asr`,
  name: "ASR",
  platformId: platform.id,
  contractsRaw: [asrContract],
  description:
    "Airdrop Staking Rewards program distributing partner token rewards to users who stake their LSTs in the protocol.",
};

export const services: ServiceRaw[] = [
  voteService,
  stakingService,
  poolService,
  routerService,
  asrService,
];
