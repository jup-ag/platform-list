import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "sofinance",
  name: "SoFinance",
  description:
    "SoFinance is a self-custody LP tool for same-stock tokenized-stock pools on Raydium CLMM, such as an xStock against its Backpack Securities version. It backtests each pool to suggest a price range, then swaps through Jupiter and opens the position in one transaction signed by the user's wallet.",
  tags: ["dapp", "defi", "liquidity-provider", "rwa", "tool"],
  links: {
    website: "https://sofinancelab.xyz/",
    twitter: "https://x.com/SoFinancelab",
    github: "https://github.com/truenorth-lj/sofinance-public",
    documentation: "https://sofinancelab.xyz/docs",
  },
  addedAt: 1792454400000,
};

export const services: ServiceRaw[] = [];
export default services;
