import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "marginfi",
  name: "Marginfi",
  description:
    "Marginfi is a decentralized lending and borrowing protocol offering isolated risk pools, cross-margin positions, and integrated yield strategies.",
  defiLlamaId: "marginfi",
  links: {
    website: "https://www.marginfi.com/",
    telegram: "https://t.me/mrgnteam",
    twitter: "https://x.com/marginfi",
    github: "https://github.com/mrgnlabs/",
    documentation: "https://docs.marginfi.com/",
  },
  tokens: ["LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp"],
  tags: ["dapp", "lending", "defi", "lst"],
};

const contract = {
  name: "Lending",
  address: "MFv2hWf31Z9kbCa1snEPYctwafyhdvnV7FZnsebVacA",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "marginfi-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://app.marginfi.com/",
  description:
    "Overcollateralized lending and borrowing protocol with isolated risk pools, enabling users to supply assets to earn yield and borrow against their collateral.",
};

export const services: ServiceRaw[] = [service];
