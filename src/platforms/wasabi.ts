import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "wasabi",
  name: "Wasabi",
  defiLlamaId: "wasabi",
  links: {
    website: "https://app.wasabi.xyz/",
    discord: "https://discord.gg/wZqzsfnvmh",
    twitter: "https://x.com/wasabi_protocol",
    documentation: "https://docs.wasabi.xyz/_/overview/what-is-wasabi",
  },
  tags: ["dapp"],
};

export const contract = {
  name: "Main",
  address: "spicyTHtbmarmUxwFSHYpA8G4uP2nRNq38RReMpoZ9c",
  networkId: NetworkId.solana,
};

export const tradeService: ServiceRaw = {
  id: `${platform.id}-trade`,
  name: "Trade",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [tradeService];
