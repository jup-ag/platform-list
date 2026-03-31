import { NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "smithii",
  name: "Smithii",
  description:
    "Smithii is an all-in-one suite of tools designed for blockchain token creators to launch, edit, and manage the liquidity of their crypto projects quickly, affordably, and without the need for programming knowledge.",
  defiLlamaId: "smithii",
  links: {
    website: "https://tools.smithii.io/",
    twitter: "https://x.com/SmithiiTools",
    discord: "https://discord.gg/fgwUfZT9Qw",
    documentation: "https://docs.smithii.io/",
    github: "https://github.com/SmithiiDev",
  },
  tags: ["dapp", "tool"],
  addedAt: 1771329600000,
  isDeprecated: true,
};

const contract = {
  name: "Launchpad",
  address: "payTxVMsrh3oo81ocHb6xFge4vGUJenEFFa3sRdLNX2",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-launchpad`,
  name: "Launchpad",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
