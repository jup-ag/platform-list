import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "ratio",
  name: "Ratio",
  links: {
    website: "https://www.ratio.finance/",
    twitter: "https://x.com/ratiofinance",
  },
  tags: ["dapp"],
  isDeprecated: true,
  tokens: [
    "USDrbBQwQbQ2oWHUPfA8QBHcyVxKUq1xHyXsSLKdUq2",
    "ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J",
  ],
};

const mainContract = {
  name: "Main",
  address: "RFLeGTwFXiXXETdJkZuu9iKgXNkYbywLpTu1TioDsDQ",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
