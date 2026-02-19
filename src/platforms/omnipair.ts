import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "omnipair",
  name: "Omnipair",
  description:
    "Omnipair is a decentralized hyperstructure protocol for spot and margin trading, designed for permissionless, oracle-less, and isolated-collateral markets on Solana.",
  links: {
    website: "https://omnipair.fi/",
    discord: "https://discord.gg/omnipair",
    twitter: "https://x.com/omnipair",
    github: "https://github.com/omnipair",
    documentation: "https://docs.omnipair.fi/",
  },
  platformToken: "omfgRBnxHsNJh6YeGbGAmWenNkenzsXyBXm3WDhmeta",
  tags: ["dapp", "dex", "amm", "defi"],
  addedAt: 1771499370000,
};

const contract: ContractRaw = {
  name: `Borrow`,
  address: "omnixgS8fnqHfCcTGKWj6JtKjzpJZ1Y5y9pyFkQDkYE",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-borrow`,
  name: "Borrow",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
