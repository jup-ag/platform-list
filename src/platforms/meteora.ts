import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "meteora",
  name: "Meteora",
  description:
    "Meteora is a DeFi protocol offering dynamic liquidity pools (DLMM), vaults, stable swaps, and token launch infrastructure.",
  defiLlamaId: "meteora",
  links: {
    website: "https://meteora.ag/",
    discord: "https://discord.gg/WwFwsVtvpH",
    twitter: "https://x.com/MeteoraAG",
    github: "https://github.com/MeteoraAg",
    documentation: "https://docs.meteora.ag/",
  },
  tags: ["dapp", "dex", "amm", "vault", "launchpad"],
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
  description:
    "Optimized AMM for swapping between pegged assets like stablecoins and wrapped tokens with minimal slippage and low fees.",
};

export const vaultsService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [meteoraVaults],
  link: "https://app.meteora.ag/vaults",
  description:
    "Dynamic vaults that automatically allocate deposited assets to lending protocols and liquidity pools to optimize yield generation.",
};

export const poolsService: ServiceRaw = {
  id: `${platform.id}-pools`,
  name: "Pools",
  platformId: platform.id,
  contractsRaw: [meteoraPools],
  link: "https://app.meteora.ag/pools",
  description:
    "Standard AMM liquidity pools for token pairs allowing users to provide liquidity and earn trading fees from swaps.",
};

export const farmsService: ServiceRaw = {
  id: `${platform.id}-farms`,
  name: "Farms",
  platformId: platform.id,
  contractsRaw: [meteoraFarms],
  description:
    "Yield farming program rewarding liquidity providers with additional token incentives for staking their LP tokens.",
};

export const dlmmService: ServiceRaw = {
  id: `${platform.id}-dlmm`,
  name: "DLMM",
  platformId: platform.id,
  contractsRaw: [meteoraDlmm],
  link: "https://app.meteora.ag/dlmm",
  description:
    "Dynamic Liquidity Market Maker using discrete price bins for zero-slippage swaps and dynamic fees that adjust based on market volatility.",
};

export const dlmmVaultsService: ServiceRaw = {
  id: `${platform.id}-dlmm-vaults`,
  name: "DLMM Vaults",
  platformId: platform.id,
  contractsRaw: [meteoraDlmmVaults],
  description:
    "Automated vaults that manage DLMM positions, automatically rebalancing liquidity within optimal price ranges to maximize fee earnings.",
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
  description:
    "M3M3 staking mechanism that rewards top stakers from memecoin trading fees, creating sustainable incentives for long-term token holders.",
};

export const bondingCurveService: ServiceRaw = {
  id: `${platform.id}-bonding-curve`,
  name: "Bonding Curve",
  platformId: platform.id,
  contractsRaw: [bondingCurve],
  description:
    "Token launch infrastructure using bonding curves for price discovery, enabling new tokens to bootstrap liquidity before migrating to standard AMM pools.",
};

export const zapService: ServiceRaw = {
  id: `${platform.id}-zap`,
  name: "Zap",
  platformId: platform.id,
  contractsRaw: [zap],
  description:
    "One-click liquidity provision that automatically converts a single token into balanced LP positions, simplifying the deposit process.",
};

export const liquidityAirdropService: ServiceRaw = {
  id: `${platform.id}-liquidity-airdrop`,
  name: "Liquidity Airdrop",
  platformId: platform.id,
  contractsRaw: [liquidityAirdrop],
  description:
    "Distribution mechanism for token projects to reward early liquidity providers with airdrops based on their participation in pools.",
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
