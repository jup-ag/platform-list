import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "wzrd",
  name: "WZRD",
  description:
    "WZRD is a Solana DeFi protocol that converts stream engagement into on-chain rewards. Participants earn CCM tokens through live stream activity, then claim, swap, stake, and compound rewards through a single interface.",
  links: {
    website: "https://app.twzrd.xyz/",
    twitter: "https://x.com/twaboreum",
    github: "https://github.com/twzrd",
    documentation: "https://docs.twzrd.xyz/",
  },
  platformToken: "Dxk8mAb3C7AM8JN6tAJfVuSja5yidhZM5sEKW3SRX2BM",
  tokens: [
    "E9Kt33axpCy3ve2PCY9BSrbPhcR9wdDsWQECAahzw2dS",
  ],
  tags: ["dapp", "vault", "defi"],
  addedAt: 1740009600000,
};

const channelVaultContract = {
  name: "Channel Vault",
  address: "5WH4UiSZ7fbPQbLrRCJyWxnTAoNyTZ3ZjcdgTuinCXmQ",
  networkId: NetworkId.solana,
};

export const vaultService: ServiceRaw = {
  id: `${platform.id}-vault`,
  name: "Vault",
  platformId: platform.id,
  contractsRaw: [channelVaultContract],
  link: "https://app.twzrd.xyz/",
  description:
    "Staking vault that accepts CCM deposits and mints vLOFI receipt tokens. Includes auto-compounding, an on-chain exchange rate oracle, and queued or instant redemption.",
};

export const claimsService: ServiceRaw = {
  id: `${platform.id}-claims`,
  name: "Claims",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Gasless merkle-proof reward distribution. Stream engagement scores are settled into merkle trees and claimed via sponsored relay transactions.",
};

export const services: ServiceRaw[] = [vaultService, claimsService];
export default services;
