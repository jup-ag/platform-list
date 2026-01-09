import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solomon",
  name: "Solomon",
  description: "Solomon is a native synthetic dollar protocol.",
  defiLlamaId: "solomon-usdv",
  tags: ["stablecoin", "dapp"],
  links: {
    website: "https://solomonlabs.org/",
    telegram: "https://t.me/solomonlabs",
    twitter: "https://x.com/solomon_labs",
  },
  tokens: [
    "Ex5DaKYMCN6QWFA4n67TmMwsH8MJV68RX6YXTmVM532C",
    "pTA4St7D5WshfLUPBXoaxn5m8e3k2ort2DVt3gUTa17",
  ],
};

const contract = {
  name: "Stake",
  address: "HSnn7bDvkZSEwujZDPtUcdo9KL7Conycgmy8m6mBFD5",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-usdv`,
  name: "Stake",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
