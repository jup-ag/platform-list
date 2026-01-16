import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "axiom",
  name: "Axiom",
  links: {
    website: "https://axiom.trade/",
    twitter: "https://x.com/axiomexchange",
    discord: "https://discord.gg/axiomtrade",
    documentation: "https://docs.axiom.trade/",
  },
  defiLlamaId: "axiom-pro",
  description:
    "Axiom is the fastest and most feature-rich hybrid web trading experience.",
  tags: ["dex"],
};

const contract = {
  name: "Trade",
  address: "FLASHX8DrLbgeR8FcfNV1F5krxYcYMUdBkrP1EPBtxB9",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
