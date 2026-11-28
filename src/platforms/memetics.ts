import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "memetics",
  name: "Memetics Finance",
  description:
    "Memetics Finance is a constant-product AMM on Solana, built on Raydium's cp-swap program, where anyone can open a pool for any pair. Swaps pay a 1% trade fee, and liquidity providers keep 84% of it.",
  links: {
    website: "https://memetics.finance/",
    twitter: "https://x.com/junglebayac",
    github: "https://github.com/fomotsar-commits/tegridy-farms",
  },
  tags: ["dapp", "dex", "amm"],
  addedAt: 1795824000000,
};

const ammContract = {
  name: "AMM",
  address: "EKS4C6xvV9A5DMWaWtVnFvi7ru78EhqRAoddEMpQ2BtT",
  networkId: NetworkId.solana,
};

const ammService: ServiceRaw = {
  id: `${platform.id}-amm`,
  name: "AMM",
  platformId: platform.id,
  contractsRaw: [ammContract],
  link: "https://memetics.finance/pools",
  description:
    "Constant-product (x*y=k) pools for any pair, a fork of Raydium's cp-swap program with the same pool accounts and swap instructions.",
};

export const services: ServiceRaw[] = [ammService];
