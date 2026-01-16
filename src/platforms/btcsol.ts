import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "btcsol",
  name: "btcSOL",
  description:
    "btcSOL is a liquid staking token that converts SOL staking yield into daily BTC rewards through automatic zBTC purchases.",
  tags: ["dapp", "lst", "defi", "bitcoin"],
  links: {
    website: "https://btcsol.co/",
    discord: "https://discord.com/invite/zeusnetwork",
    twitter: "https://x.com/btcsol_co",
    documentation: "https://docs.btcsol.co/",
  },
  defiLlamaId: "zeus-btcsol",
  tokens: ["BSoLov7Es6mGLkBq7Z89PSWDmk6Vsw4jVxdfE2UHrJTX"],
};

const earnContract = {
  name: "Earn",
  address: "SYNMjud3ALEaeJhxuq8gpc2wJzC4XLHfxp9SgKmzQ8r",
  networkId: NetworkId.solana,
};

export const earnService: ServiceRaw = {
  id: `${platform.id}-earn`,
  name: "Earn",
  platformId: platform.id,
  contractsRaw: [earnContract],
};

export const services: ServiceRaw[] = [earnService];
