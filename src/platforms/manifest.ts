import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "manifest",
  name: "Manifest",
  description:
    "Manifest is the 3rd-generation on-chain orderbook built on Solana.",
  tags: ["dex"],
  defiLlamaId: "manifest-trade",
  links: {
    website: "https://manifest.trade/",
    telegram: "https://t.me/manifest_trade",
    twitter: "https://x.com/ManifestTrade",
    documentation: "https://manifest.trade/whitepaper.pdf",
  },
};

const orderBookContract = {
  name: "Order Book",
  address: "wMNFSTkir3HgyZTsB7uqu3i7FA73grFCptPXgrZjksL",
  networkId: NetworkId.solana,
};

const vaultContract = {
  name: "Vault",
  address: "MNFSTqtC93rEfYHB6hF82sKdZpUDFWkViLByLd1k1Ms",
  networkId: NetworkId.solana,
};

export const orderBookService: ServiceRaw = {
  id: `${platform.id}-order-book`,
  name: "Order Book",
  platformId: platform.id,
  contractsRaw: [orderBookContract],
};

export const vaultService: ServiceRaw = {
  id: `${platform.id}-vault`,
  name: "Vault",
  platformId: platform.id,
  contractsRaw: [vaultContract],
};

export const services: ServiceRaw[] = [orderBookService, vaultService];
