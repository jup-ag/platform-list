import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "orca",
  name: "Orca",
  description:
    "Orca is the go-to place to trade tokens and provide liquidity on Solana",
  defiLlamaId: "orca",
  links: {
    website: "https://www.orca.so/",
    discord: "https://discord.orca.so/",
    twitter: "https://twitter.com/orca_so",
    github: "https://github.com/orca-so",
    medium: "https://orca-so.medium.com/",
    documentation: "https://docs.orca.so/",
  },
  tokens: [
    "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
    "xorcaYqbXUNz3474ubUMJAdu2xgPsew3rUCe5ughT3N",
  ],
  tags: ["dapp"],
};
const pools: ContractRaw = {
  name: `Orca Pools`,
  address: "9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP",
  networkId: NetworkId.solana,
};
const aquaFarms: ContractRaw = {
  name: `Orca Aqua Farms`,
  address: "82yxjeMsvaURa4MbZZ7WZZHfobirZYkH1zF8fmeGtyaQ",
  networkId: NetworkId.solana,
};
const whirlpool: ContractRaw = {
  name: `Orca Whirlpool`,
  address: "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc",
  networkId: NetworkId.solana,
};
const staking: ContractRaw = {
  name: `Orca Staking`,
  address: "StaKE6XNKVVhG8Qu9hDJBqCW3eRe7MDGLz17nJZetLT",
  networkId: NetworkId.solana,
};

export const poolsService: ServiceRaw = {
  id: `${platform.id}-pools`,
  name: "Pools",
  platformId: platform.id,
  contractsRaw: [pools],
};

export const farmsService: ServiceRaw = {
  id: `${platform.id}-farms`,
  name: "Aqua Farms",
  platformId: platform.id,
  contractsRaw: [aquaFarms],
};

export const whirlpoolsService: ServiceRaw = {
  id: `${platform.id}-whirlpools`,
  name: "Whirlpools",
  platformId: platform.id,
  contractsRaw: [whirlpool],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [staking],
};

export const services: ServiceRaw[] = [
  poolsService,
  farmsService,
  whirlpoolsService,
  stakingService,
];
