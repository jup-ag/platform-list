import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "hastra",
  name: "Hastra",
  tags: ["dapp"],
  links: {
    website: "https://www.hastra.io/",
    twitter: "https://x.com/HastraFi",
  },
};

const mintContract = {
  name: "Vault Mint",
  address: "9WUyNREiPDMgwMh5Gt81Fd3JpiCKxpjZ5Dpq9Bo1RhMV",
  networkId: NetworkId.solana,
};

const stakeContract = {
  name: "Vault Stake",
  address: "97V7JsExNC6yFWu5KjK1FLfVkNVvtMpAFL5QkLWKEGxY",
  networkId: NetworkId.solana,
};

export const mintService: ServiceRaw = {
  id: `${platform.id}-mint`,
  name: "Mint",
  platformId: platform.id,
  contractsRaw: [mintContract],
};

export const stakeService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Stake",
  platformId: platform.id,
  contractsRaw: [stakeContract],
};

export const services: ServiceRaw[] = [mintService, stakeService];
