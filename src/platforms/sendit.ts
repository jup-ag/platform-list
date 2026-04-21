import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sendit",
  name: "Sendit",
  description: "Permissionless Meme Market",
  links: {
    website: "https://sendit.fun/",
    twitter: "https://x.com/senditfun",
    discord: "https://discord.com/invite/senditfun",
    documentation: "https://docs.sendit.fun/",
  },
  tags: ["dapp", "memecoin", "defi", "trading"],
  isDeprecated: true,
};

const earnContract = {
  name: "SOL Earn",
  address: "SenditVXUyY6zjSPYucQTff9rfUkAWnxoijY87FJwGV",
  networkId: NetworkId.solana,
};

const tradeContract = {
  name: "Trade",
  address: "SenditXmUCHPeV6iyFoMY8dRNB4PofGKTfp52hEWpJx",
  networkId: NetworkId.solana,
};

const lendContract = {
  name: "Memecoin Yielding",
  address: "Senditho8dTeu9BpXBFfN3b479NyXEbJ26ynw9pPJNY",
  networkId: NetworkId.solana,
};

export const earnService: ServiceRaw = {
  id: `${platform.id}-sol-earn`,
  name: "Sol Earn",
  platformId: platform.id,
  contractsRaw: [earnContract],
  description:
    "SOL deposit pools generating yield from memecoin trading activity and protocol fees.",
};

export const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [tradeContract],
  description:
    "Permissionless memecoin trading interface for buying and selling tokens on the bonding curve.",
};

export const lendService: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Memecoin Yielding",
  platformId: platform.id,
  contractsRaw: [lendContract],
  description:
    "Yield generation through memecoin lending pools enabling passive income from token borrowing demand.",
};

export const services: ServiceRaw[] = [earnService, tradeService, lendService];
