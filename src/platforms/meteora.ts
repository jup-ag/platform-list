import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "meteora",
  name: "Meteora",
  description: "Building the most dynamic liquidity protocols in DeFi.",
  defiLlamaId: "parent#meteora",
  links: {
    website: "https://meteora.ag/",
    discord: "https://discord.gg/WwFwsVtvpH",
    twitter: "https://x.com/MeteoraAG",
    github: "https://github.com/MeteoraAg",
    documentation: "https://docs.meteora.ag/",
  },
  tags: ["dapp"],
  tokens: [
    "METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL",
    "MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K",
  ],
};
const mercurialStableSwap: ContractRaw = {
  name: `Mercurial Stable Swap`,
  address: "MERLuDFBMmsHnsBPZw2sDQZHvXFMwp8EdjudcU2HKky",
  networkId: NetworkId.solana,
};
const meteoraVaults: ContractRaw = {
  name: `Vaults`,
  address: "24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi",
  networkId: NetworkId.solana,
};
const meteoraPools: ContractRaw = {
  name: `Pools`,
  address: "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB",
  networkId: NetworkId.solana,
};
const meteoraFarms: ContractRaw = {
  name: `Farms`,
  address: "FarmuwXPWXvefWUeqFAa5w6rifLkq5X6E8bimYvrhCB1",
  networkId: NetworkId.solana,
};
const meteoraDlmm: ContractRaw = {
  name: `DLMM`,
  address: "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo",
  networkId: NetworkId.solana,
};
const meteoraDlmmVaults: ContractRaw = {
  name: `DLMM Vaults`,
  address: "vaU6kP7iNEGkbmPkLmZfGwiGxd4Mob24QQCie5R9kd2",
  networkId: NetworkId.solana,
};
const m3m3: ContractRaw = {
  name: `M3M3 Staking`,
  address: "FEESngU3neckdwib9X3KWqdL7Mjmqk9XNp3uh5JbP4KP",
  networkId: NetworkId.solana,
};
const dammV2: ContractRaw = {
  name: `AMM V2`,
  address: "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG",
  networkId: NetworkId.solana,
};
const zap: ContractRaw = {
  name: `Zap`,
  address: "zapvX9M3uf5pvy4wRPAbQgdQsM1xmuiFnkfHKPvwMiz",
  networkId: NetworkId.solana,
};
const liquidityAirdrop: ContractRaw = {
  name: `Liquidity Airdrop`,
  address: "pDisRpxvnFw4osSqDPqMJ62tLsVQGsHL4tMX23ArYrL",
  networkId: NetworkId.solana,
};
const bondingCurve: ContractRaw = {
  name: `Bonding Curve`,
  address: "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN",
  networkId: NetworkId.solana,
};

export const stableSwapService: ServiceRaw = {
  id: `${platform.id}-mercurial-stableswap`,
  name: "Stable Swap",
  platformId: platform.id,
  contractsRaw: [mercurialStableSwap],
};

export const vaultsService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [meteoraVaults],
};

export const poolsService: ServiceRaw = {
  id: `${platform.id}-pools`,
  name: "Pools",
  platformId: platform.id,
  contractsRaw: [meteoraPools],
};

export const farmsService: ServiceRaw = {
  id: `${platform.id}-farms`,
  name: "Farms",
  platformId: platform.id,
  contractsRaw: [meteoraFarms],
};

export const dlmmService: ServiceRaw = {
  id: `${platform.id}-dlmm`,
  name: "DLMM",
  platformId: platform.id,
  contractsRaw: [meteoraDlmm],
};

export const dlmmVaultsService: ServiceRaw = {
  id: `${platform.id}-dlmm-vaults`,
  name: "DLMM Vaults",
  platformId: platform.id,
  contractsRaw: [meteoraDlmmVaults],
};

export const dammV2Service: ServiceRaw = {
  id: `${platform.id}-damm-v2`,
  name: "DAMM V2",
  platformId: platform.id,
  contractsRaw: [dammV2],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-m3m3-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [m3m3],
};

export const bondingCurveService: ServiceRaw = {
  id: `${platform.id}-bonding-curve`,
  name: "Bonding Curve",
  platformId: platform.id,
  contractsRaw: [bondingCurve],
};

export const zapService: ServiceRaw = {
  id: `${platform.id}-zap`,
  name: "Zap",
  platformId: platform.id,
  contractsRaw: [zap],
};

export const liquidityAirdropService: ServiceRaw = {
  id: `${platform.id}-liquidity-airdrop`,
  name: "Liquidity Airdrop",
  platformId: platform.id,
  contractsRaw: [liquidityAirdrop],
};

export const services: ServiceRaw[] = [
  stableSwapService,
  vaultsService,
  poolsService,
  farmsService,
  dlmmService,
  dlmmVaultsService,
  dammV2Service,
  stakingService,
  bondingCurveService,
  zapService,
  liquidityAirdropService,
];
