import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "stepfinance",
  name: "Step Finance",
  description: "Portfolio management and analytics platform for Solana",
  defiLlamaId: "step-finance",
  links: {
    website: "https://app.step.finance/",
    twitter: "https://x.com/StepFinance_",
    github: "https://github.com/step-finance",
  },
  platformToken: "StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT",
  tokens: [
    "xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G",
    "StPsoHokZryePePFV8N7iXvfEmgUoJ87rivABX7gaW6",
  ],
  tags: ["tool", "dapp"],
  isDeprecated: true,
};

const stakingContract = {
  name: "Staking",
  address: "Stk5NCWomVN3itaFjLu382u9ibb5jMSHEsh6CuhaGjB",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [service];
