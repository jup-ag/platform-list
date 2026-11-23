import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "seedless",
  name: "Seedless",
  description:
    "Seedless is a passkey-native Solana wallet that replaces seed phrases with biometrics. It features gasless transactions, stealth addresses for privacy, and burner wallets for disposable identities.",
  links: {
    website: "https://seedlesslabs.xyz/",
    twitter: "https://x.com/seedless_wallet",
    github: "https://github.com/seedless-labs",
  },
  tags: ["wallet", "privacy"],
};

export const transferService: ServiceRaw = {
  id: `${platform.id}-transfer`,
  name: "Transfer",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [transferService];
