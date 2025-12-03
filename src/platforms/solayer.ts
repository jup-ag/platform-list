import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
import { solanaStakePoolContract } from "./solana";
export const platform: PlatformRaw = {
  id: "solayer",
  name: "Solayer",
  description:
    "Solayer is the restaking protocol on Solana, securing both endogenous AVS (dApps) through stake-weighted quality of service and exogenous AVS via Solana-based POS primitives",
  defiLlamaId: "parent#solayer",
  tags: ["dapp", "lst"],
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

const solayerContract = {
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

const endoAvsContract = {
  name: "Endo Avs",
  address: "endoLNCKTqDn8gSVnN2hDdpgACUPWHZTwoYnnMybpAT",
  networkId: NetworkId.solana,
};

const solayerService: ServiceRaw = {
  id: `${platform.id}`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [solayerContract],
};

const restakingService: ServiceRaw = {
  id: `${platform.id}-restaking`,
  name: "Restaking",
  platformId: platform.id,
  contractsRaw: [],
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

const sUSDService: ServiceRaw = {
  id: `${platform.id}-susd`,
  name: "sUSD",
  platformId: platform.id,
  contractsRaw: [sUDCContract],
};

const delegateService: ServiceRaw = {
  id: `${platform.id}-delegate`,
  name: "Delegate",
  platformId: platform.id,
  contractsRaw: [endoAvsContract],
};

export const services: ServiceRaw[] = [
  solayerService,
  restakingService,
  airdropService,
  sUSDService,
  delegateService,
];
