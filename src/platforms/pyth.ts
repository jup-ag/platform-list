import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "pyth",
  name: "Pyth",
  description:
    "Pyth Network is a decentralized oracle that delivers real-time market data from institutional sources to smart contracts across 50+ blockchains.",
  defiLlamaId: "pyth-network",
  links: {
    website: "https://pyth.network/",
    discord: "https://discord.com/invite/pythnetwork",
    twitter: "https://x.com/PythNetwork",
    github: "https://github.com/pyth-network",
    documentation: "https://docs.pyth.network/home",
  },
  platformToken: "HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3",
  tags: ["tool", "dapp", "infrastructure", "oracle", "defi"],
};

const contract = {
  name: "Staking",
  address: "pytS9TjG1qyAZypk7n8rw8gfW9sUaqqYyMhJQ4E7JCQ",
  networkId: NetworkId.solana,
};

const integrityPoolContract = {
  name: "Staking",
  address: "pyti8TM4zRVBjmarcgAPmTNNAXYKJv7WVHrkrm6woLN",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "EXxqB6XPLczReFcZyigfbdowB6WGYtnkLYC4XZ2ae9ch",
  networkId: NetworkId.solana,
};

export const expressRelayContract = {
  name: "Express Relay",
  address: "PytERJFhAKuNNuaiXkApLfWzwNwSNDACpigT3LwQfou",
  networkId: NetworkId.solana,
};

const governanceContract = {
  name: "Governance",
  address: "pytGY6tWRgGinSCvRLnSv4fHfBTMoiDGiCsesmHWM6U",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://staking.pyth.network/",
  description:
    "PYTH token staking enabling holders to participate in data validation, earn rewards, and contribute to oracle network security.",
};

export const integrityPoolService: ServiceRaw = {
  id: `${platform.id}-integrity-pool`,
  name: "Integrity Pool",
  platformId: platform.id,
  contractsRaw: [integrityPoolContract],
};

export const governanceService: ServiceRaw = {
  id: `${platform.id}-governance`,
  name: "Governance",
  platformId: platform.id,
  contractsRaw: [governanceContract],
  description:
    "On-chain governance system allowing PYTH stakers to vote on protocol improvements, parameter changes, and network upgrades.",
};

export const expressRelayService: ServiceRaw = {
  id: `${platform.id}-express-relay`,
  name: "Express Relay",
  platformId: platform.id,
  contractsRaw: [expressRelayContract],
  description:
    "MEV protection service routing liquidation and arbitrage opportunities to a competitive auction, returning value to DeFi protocols and users.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  stakingService,
  integrityPoolService,
  governanceService,
  expressRelayService,
  airdropService,
];
