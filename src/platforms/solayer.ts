import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "solayer",
  name: "Solayer",
  description:
    "Solayer is a restaking protocol securing both endogenous AVS (dApps) through stake-weighted quality of service and exogenous AVS via POS primitives.",
  defiLlamaId: "solayer",
  tags: ["dapp", "lst", "defi", "restaking", "vault"],
  links: {
    website: "https://solayer.org/",
    discord: "https://discord.com/invite/solayerlabs",
    telegram: "https://t.me/solayer_discussion",
    twitter: "https://x.com/solayer_labs",
    github: "https://github.com/solayer-labs",
    documentation:
      "https://docs.solayer.org/documentation/get-started/introduction",
  },
  tokens: [
    "LAYER4xPpTCb3QL8S9u41EAhAX7mhBn8Q6xMTwY2Yzc",
    "sSo1wxKKr6zW2hqf5hZrp2CawLibcwi1pMBqk5bg2G4",
    "sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh",
    "susdabGDNbhrnCa6ncrYo81u4s9GM8ecK2UwMyZiq4X",
  ],
};

export const solayerContract = {
  name: "Solayer",
  address: "sSo1iU21jBrU9VaJ8PJib1MtorefUV4fzC9GURa2KNn",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "ARDPkhymCbfdan375FCgPnBJQvUfHeb7nHVdBfwWSxrp",
  networkId: NetworkId.solana,
};

const sUDCContract = {
  name: "sUDC",
  address: "s1aysqpEyZyijPybUV89oBGeooXrR22wMNLjnG2SWJA",
  networkId: NetworkId.solana,
};

export const endoAvsContract = {
  name: "Endo Avs",
  address: "endoLNCKTqDn8gSVnN2hDdpgACUPWHZTwoYnnMybpAT",
  networkId: NetworkId.solana,
};

export const solayerService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [solayerContract],
  link: "https://app.solayer.org/",
  description:
    "Native restaking service allowing users to stake SOL and receive sSOL, a liquid staking token that accrues staking rewards.",
};

export const restakingService: ServiceRaw = {
  id: `${platform.id}-restaking`,
  name: "Restaking",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Restaking protocol enabling staked assets to secure additional services (AVS) while earning enhanced yields from multiple sources.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
  description:
    "LAYER token distribution program for early adopters and protocol contributors.",
};

export const sUSDService: ServiceRaw = {
  id: `${platform.id}-susd`,
  name: "sUSD",
  platformId: platform.id,
  contractsRaw: [sUDCContract],
  description:
    "Yield-bearing stablecoin backed by restaked assets, allowing users to earn staking and restaking yields while holding a dollar-pegged token.",
};

export const delegateService: ServiceRaw = {
  id: `${platform.id}-delegate`,
  name: "Delegate",
  platformId: platform.id,
  contractsRaw: [endoAvsContract],
  description:
    "Endogenous AVS delegation enabling restakers to allocate stake to decentralized applications for stake-weighted quality of service benefits.",
};

export const withdrawService: ServiceRaw = {
  id: `${platform.id}-withdraw`,
  name: "Withdraw",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Unstaking service for redeeming sSOL tokens back to native SOL with cooldown period.",
};

export const services: ServiceRaw[] = [
  solayerService,
  restakingService,
  airdropService,
  sUSDService,
  delegateService,
  withdrawService,
];
