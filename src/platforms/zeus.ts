import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "zeus",
  name: "Zeus",
  links: {
    website: "https://app.zeusguardian.io/",
    twitter: "https://x.com/ZeusNetworkHQ",
    documentation: "https://docs.zeusnetwork.xyz/",
    github: "https://github.com/ZeusNetworkHQ",
    discord: "https://discord.com/invite/zeusnetwork",
    medium: "https://medium.com/@zeus-network",
  },
  tokens: ["ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq"],
  description:
    "Zeus is a multichain layer enabling cross-chain interoperability.",
  tags: ["dapp"],
};

const bootstrapperContract = {
  name: "Bootstrapper",
  address: "ZPLsAzVmV6gRipY8dzoWcGWJ81tkPUN9M7YfxJPru9w",
  networkId: NetworkId.solana,
};

const bitcoinSPVContract = {
  name: "BitcoinSPV",
  address: "ZPLowzr41tCGkoRXuzEx4Ts98Jjrbfe9rtv7gqdgGkH",
  networkId: NetworkId.solana,
};

const layerCAContract = {
  name: "LayerCA",
  address: "ZPLtKX3gHTa4djEdmkZXkXiJdTUEeD5ZjZD4jAnxrSP",
  networkId: NetworkId.solana,
};

const delegatorContract = {
  name: "Delegator",
  address: "ZPLt7XEyRvRxEZcGFGnRKGLBymFjQbwmgTZhMAMfGAU",
  networkId: NetworkId.solana,
};

const liquidityManagementContract = {
  name: "LiquidityManagement",
  address: "ZPLuj6HoZ2z6y6WfJuHz3Gg48QeMZ6kGbsa74oPxACY",
  networkId: NetworkId.solana,
};

const twoWayPegContract = {
  name: "TwoWayPeg",
  address: "ZPLzxjNk1zUAgJmm3Jkmrhvb4UaLwzvY2MotpfovF5K",
  networkId: NetworkId.solana,
};

export const bootstrapperService: ServiceRaw = {
  id: `${platform.id}-bootstrapper`,
  name: "Bootstrapper",
  platformId: platform.id,
  contractsRaw: [bootstrapperContract],
};

export const bitcoinSPVService: ServiceRaw = {
  id: `${platform.id}-bitcoin-spv`,
  name: "BitcoinSPV",
  platformId: platform.id,
  contractsRaw: [bitcoinSPVContract],
};

export const layerCAService: ServiceRaw = {
  id: `${platform.id}-layer-ca`,
  name: "LayerCA",
  platformId: platform.id,
  contractsRaw: [layerCAContract],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [delegatorContract],
};

export const liquidityManagementService: ServiceRaw = {
  id: `${platform.id}-liquidity-management`,
  name: "LiquidityManagement",
  platformId: platform.id,
  contractsRaw: [liquidityManagementContract],
};

export const twoWayPegService: ServiceRaw = {
  id: `${platform.id}-two-way-peg`,
  name: "TwoWayPeg",
  platformId: platform.id,
  contractsRaw: [twoWayPegContract],
};

export const services: ServiceRaw[] = [
  bootstrapperService,
  bitcoinSPVService,
  layerCAService,
  stakingService,
  liquidityManagementService,
  twoWayPegService,
];
