import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "nirvana",
  name: "Nirvana",
  description:
    "Nirvana was a stablecoin protocol offering ANA, a partially-collateralized asset with a rising floor price, and NIRV superstable token.",
  defiLlamaId: "nirvana",
  tags: ["dapp", "defi"],
  links: {
    website: "https://www.nirvana.finance/",
    discord: "http://discord.gg/nirvanadao",
    twitter: "https://x.com/nirvana_fi",
    github: "https://github.com/orgs/AdrenaFoundation",
    documentation: "http://docs.nirvana.finance/",
    telegram: "https://t.me/nirvanafi",
    medium: "https://medium.com/@nirvanafinance",
  },
  tokens: [
    "5DkzT65YJvCsZcot9L6qwkJnsBCPmKHjJz3QU7t7QeRW",
    "3eamaYJ7yicyRd3mYz4YeNyNPGVo6zMmKUp5UP25AxRM",
    "CLr7G2af9VSfH1PFZ5fYvB8WK1DTgE85qrVjpa8Xkg4N",
  ],
};
const contract: ContractRaw = {
  name: "Borrow & Governance",
  address: "NirvHuZvrm2zSxjkBvSbaF2tHfP5j7cvMj9QmdoHVwb",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-borrow-governance`,
  name: "Borrow & Governance",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [mainService];
