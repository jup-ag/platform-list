import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "unclaimedsol",
  name: "Unclaimed SOL",
  description:
    "Unclaimed SOL is a Solana recovery/cleanup tool that deep-scans your wallet history to close what’s safe and return the locked reclaimable balances back to your wallet.",
  links: {
    website: "https://unclaimedsol.com/",
    twitter: "https://x.com/unclaimed_sol",
    discord: "https://discord.gg/SG8hdqfPPt",
    telegram: "https://t.me/unclaimedsol",
    github: "https://github.com/unclaimed-sol/spl-burn-close-sdk",
    documentation: "https://docs.unclaimedsol.com/",
  },
  tags: ["tool"],
};

const burnCloseContract = {
  name: "Burn & Close",
  address: "UNCaXzXkR3vp8mbCJyxWUvwuRk5uHgzrwe6jcWPfiUR",
  networkId: NetworkId.solana,
};

export const burnCloseService: ServiceRaw = {
  id: `${platform.id}-burn-close`,
  name: "Burn & Close",
  platformId: platform.id,
  contractsRaw: [burnCloseContract],
};

export const services: ServiceRaw[] = [burnCloseService];
export default services;
