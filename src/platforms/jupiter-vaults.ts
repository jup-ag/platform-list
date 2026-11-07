import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";

export const platform: PlatformRaw = {
  id: "jupiter-vaults",
  name: "Jupiter Vaults",
  description:
    "Jupiter Vaults, curated vaults whose shares are valued in USD across up to eight assets.",
  links: {
    website: "https://vaults.jup.ag",
    discord: "https://discord.gg/jup",
    twitter: "https://x.com/JupiterExchange",
    github: "https://github.com/jup-ag",
  },
  tags: ["dapp", "vault", "defi"],
  parentId: jupiterPlatform.id,
};

const contract = {
  name: "Vaults",
  address: "JUPVau1tSdENvv7KCwFY6Geer1a442q9mAfmaRXm83g",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
