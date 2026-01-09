import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "parcl",
  name: "Parcl",
  description:
    "Parcl is a decentralized real estate trading protocol that enables users to trade perpetual contracts on real estate price indices.",
  defiLlamaId: "parcl",
  links: {
    website: "https://app.parcl.co/",
    discord: "https://discord.gg/parcl",
    twitter: "https://x.com/Parcl",
    github: "https://github.com/ParclFinance",
    documentation: "https://docs.parcl.co/",
  },
  tokens: ["4LLbsb5ReP3yEtYzmXewyGjcir5uXtKFURtaEUVC2AHs"],
  tags: ["dapp", "rwa", "trading"],
};
const mainContract: ContractRaw = {
  name: "Liquidity & Trading",
  address: "3parcLrT7WnXAcyPfkCz49oofuuf2guUKkjuFkAhZW8Y",
  networkId: NetworkId.solana,
};
const stakingContract: ContractRaw = {
  name: "Parcl Staking",
  address: "2gWf5xLAzZaKX9tQj9vuXsaxTWtzTZDFRn21J3zjNVgu",
  networkId: NetworkId.solana,
};
const airdropContract: ContractRaw = {
  name: "Airdrop",
  address: "5tu3xkmLfud5BAwSuQke4WSjoHcQ52SbrPwX9es8j6Ve",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Liquidity & Trading",
  platformId: platform.id,
  contractsRaw: [mainContract],
  link: "https://app.parcl.co/",
  description:
    "Perpetual trading platform for real estate price indices, allowing users to go long or short on city housing markets with leverage.",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "Token staking program allowing users to lock PRCL tokens to earn rewards and participate in protocol governance.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  mainService,
  stakingService,
  airdropService,
];
