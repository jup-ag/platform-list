import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "exoticmarkets",
  name: "Exotic Markets",
  links: {
    website: "https://exotic.markets/",
    twitter: "https://x.com/exotic_markets_",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "ATV2GHq2eCaHVbTrbMCP8MWATWnH8BzmsNMq5rXZ9DNC",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
