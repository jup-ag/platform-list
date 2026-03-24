import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "yo",
  name: "YO",
  description:
    "YO is a DeFi protocol that helps you easily boost your crypto earnings without the hassle.",
  links: {
    website: "https://app.yo.xyz/",
    twitter: "https://x.com/yield",
    documentation: "https://docs.yo.xyz/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "SOL Vault",
  address: "yvSoLSBaLoqZ2yQttGbaYzHDXr9Bo9UdqtiRDiVaMxP",
  networkId: NetworkId.solana,
};

export const solVaultService: ServiceRaw = {
  id: `${platform.id}-sol-vault`,
  name: "yoSOL Vault",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [solVaultService];
