import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "cytonic",
  name: "Cytonic",
  description:
    "Cytonic is a multi-virtual-machine Layer 1 blockchain enabling atomic cross-chain swaps between EVM and SVM chains like Ethereum and Solana.",
  tags: ["bridge", "tool", "dapp", "infrastructure"],
  links: {
    website: "https://www.cytonic.com/",
    discord: "https://discord.com/invite/cytonic",
    github: "https://github.com/cytonic-network",
    telegram: "https://t.me/cytonic_official",
  },
};

const solanaContract = {
  name: "Main",
  address: "HYDqq5GfUj4aBuPpSCs4fkmeS7jZHRhrrQ3q72KsJdD4",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-solana`,
  name: "Solana",
  platformId: platform.id,
  contractsRaw: [solanaContract],
};

export const services: ServiceRaw[] = [service];
