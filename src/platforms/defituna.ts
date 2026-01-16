import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "defituna",
  name: "DeFiTuna",
  description:
    "DeFiTuna is a DeFi platform offering leveraged concentrated liquidity positions up to 5x, lending pools, and an AMM with native limit orders.",
  links: {
    website: "https://defituna.com",
    discord: "https://discord.gg/vNWwVWbnzs",
    twitter: "https://x.com/DeFiTuna",
    documentation: "https://defituna.gitbook.io/defituna-docs",
  },
  defiLlamaId: "defituna",
  tags: ["dapp", "dex", "amm", "defi", "lending"],
  platformToken: "TUNAfXDZEdQizTMTh3uEvNvYqJmqFHZbEJt8joP4cyx",
};

const defiTunaContract = {
  name: "DefiTuna",
  address: "tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "tUnst2Y2sbmgSgARBpSBZhqPzpoy2iUsdCwb5ToYVJa",
  networkId: NetworkId.solana,
};

const fusionAmmContract = {
  name: "Fusion AMM",
  address: "fUSioN9YKKSa3CUC2YUc4tPkHJ5Y6XW1yz8y6F7qWz9",
  networkId: NetworkId.solana,
};

export const defiTunaService: ServiceRaw = {
  id: "defituna-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [defiTunaContract],
  link: "https://defituna.com/lending",
  description:
    "Lending pools enabling users to supply assets for yield or borrow to open leveraged concentrated liquidity positions up to 5x.",
};

export const stakingService: ServiceRaw = {
  id: "defituna-staking",
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "TUNA token staking allowing holders to lock tokens and earn protocol revenue share from trading and lending fees.",
};

export const fusionAmmService: ServiceRaw = {
  id: "defituna-fusion-amm",
  name: "Fusion AMM",
  platformId: platform.id,
  contractsRaw: [fusionAmmContract],
  link: "https://defituna.com/swap",
  description:
    "Fusion AMM combining concentrated liquidity with native limit orders for capital-efficient trading and seamless order execution.",
};

export const services: ServiceRaw[] = [
  defiTunaService,
  stakingService,
  fusionAmmService,
];
