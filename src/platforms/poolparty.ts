import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "poolparty",
  name: "PoolParty",
  links: {
    website: "https://joinpoolparty.io/",
    twitter: "https://x.com/joinpoolpartyio",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "57JfdST1qV2upu9fU3E2K2GdQpzJhU36C8n61qnZrGea",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
