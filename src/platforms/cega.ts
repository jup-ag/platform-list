import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "cega",
  name: "Cega",
  links: {
    website: "https://www.cega.fi/",
    twitter: "https://x.com/cega_fi",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "3HUeooitcfKX1TSCx2xEpg2W31n6Qfmizu7nnbaEWYzs",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
