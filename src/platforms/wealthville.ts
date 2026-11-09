import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "wealthville",
  name: "WealthVille",
  description:
    "Non-custodial yield optimizer on Solana. Smart vaults automatically allocate deposits across concentrated-liquidity pools, liquid staking and delta-neutral hedges, with AI-assisted risk scoring.",
  defiLlamaId: "wealthville",
  links: {
    website: "https://wealthville.net/",
    twitter: "https://x.com/wealthville_net",
    discord: "https://discord.gg/s6kR93NDE",
    telegram: "https://t.me/wealthville_signals",
    github: "https://github.com/amitesh-m/wealthville-integrations",
    documentation: "https://wealthville.net/whitepaper",
  },
  tags: ["defi", "dapp", "vault", "ai"],
  addedAt: 1785096650000,
};

const smartVaultProgram = {
  name: "Smart Vault",
  address: "6dtupVYfD3UP6mEsBxExfHeiBNojC4QNHSysYNewkaGu",
  networkId: NetworkId.solana,
};

export const vaultService: ServiceRaw = {
  id: `${platform.id}-vault`,
  name: "Smart Vault",
  platformId: platform.id,
  contractsRaw: [smartVaultProgram],
  description:
    "Non-custodial vault that allocates deposited capital into concentrated-liquidity positions, liquid staking and perp hedges, and compounds fees automatically.",
};

export const services: ServiceRaw[] = [vaultService];
