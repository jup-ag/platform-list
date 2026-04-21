import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "iloop",
  name: "ILoop",
  description:
    "ILoop is an AI-optimized vault platform for automated LST and DeFi yield strategies.",
  defiLlamaId: "iloop",
  links: {
    website: "https://iloop.finance/",
    discord: "https://discord.com/invite/ffDUZZ4kuu",
    telegram: "https://t.me/iloophq",
    twitter: "https://x.com/iLoop_HQ",
    documentation: "https://iloop-1.gitbook.io/docs.iloop.finance",
  },
  tags: ["dapp", "vault", "defi", "ai", "lst"],
  isDeprecated: true,
};

const contract = {
  name: "Lending",
  address: "3i8rGP3ex8cjs7YYWrQeE4nWizuaStsVNUXpRGtMbs3H",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
