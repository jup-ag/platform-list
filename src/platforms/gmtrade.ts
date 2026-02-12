import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "gmtrade",
  name: "GMTrade",
  description:
    "GMTrade is a decentralized leveraged trading platform built on the Solana blockchain.",
  tags: ["dex"],
  links: {
    website: "https://gmxsol.io/",
    discord: "https://discord.com/invite/gmtrade",
    twitter: "https://x.com/gmtrade_xyz",
    documentation: "https://docs.gmtrade.xyz/",
  },
  defiLlamaId: "gmtrade",
};

const tradeContract = {
  name: "Trade",
  address: "Gmso1uvJnLbawvw7yezdfCDcPydwW2s2iqG3w6MDucLo",
  networkId: NetworkId.solana,
};

const stakeContract = {
  name: "Stake",
  address: "LPMWczEVgXyQ3979XaqqEttanCXmYGvtJqPVtw1PvC8",
  networkId: NetworkId.solana,
};

export const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [tradeContract],
};
export const stakeService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [stakeContract],
};

export const services: ServiceRaw[] = [tradeService];
