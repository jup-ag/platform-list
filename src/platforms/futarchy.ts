import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "futarchy",
  name: "MetaDAO",
  description:
    "MetaDAO is a DAO that uses prediction markets to make decisions.",
  links: {
    website: "https://metadao.fi/",
    discord: "https://discord.com/invite/metadao",
    twitter: "https://x.com/MetaDAOProject",
    github: "https://github.com/metaDAOproject",
    documentation: "https://docs.metadao.fi/",
  },
  defiLlamaId: "metadao",
  platformToken: "METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta",
  tokens: ["METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr"],
  tags: ["dapp", "dao"],
};

const contract = {
  name: "Futarchy DAO",
  address: "autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg",
  networkId: NetworkId.solana,
};

const launchpadContract = {
  name: "Launchpad",
  address: "AfJJJ5UqxhBKoE3grkKAZZsoXDE9kncbMKvqSHGsCNrE",
  networkId: NetworkId.solana,
};

const conditionalContract = {
  name: "Conditional Vault",
  address: "VLTX1ishMBbcX3rdBWGssxawAo1Q2X2qxYFYqiGodVg",
  networkId: NetworkId.solana,
};

const ammContract = {
  name: "AMM",
  address: "AMMyu265tkBpRW21iGQxKGLaves3gKm2JcMUqfXNSpqD",
  networkId: NetworkId.solana,
};

const ICOContract = {
  name: "ICO",
  address: "moontUzsdepotRGe5xsfip7vLPTJnVuafqdUWexVnPM",
  networkId: NetworkId.solana,
};

export const launchpadService: ServiceRaw = {
  id: "futarchy-launchpad",
  name: "Launchpad",
  platformId: platform.id,
  contractsRaw: [launchpadContract],
  link: "https://metadao.fi/launchpad",
  description:
    "Futarchy-governed token launchpad issuing ownership coins with on-chain treasuries and performance-locked team allocations.",
};

export const decisionMarketService: ServiceRaw = {
  id: "futarchy-decision-market",
  name: "Decision Market",
  platformId: platform.id,
  contractsRaw: [contract, conditionalContract, ammContract],
  link: "https://metadao.fi/",
  description:
    "Prediction market governance system where proposals pass or fail based on their predicted impact on token price via conditional markets.",
};

export const ICOService: ServiceRaw = {
  id: "futarchy-ico",
  name: "ICO",
  platformId: platform.id,
  contractsRaw: [ICOContract],
  link: "https://metadao.fi/",
  description:
    "Raise money while putting ownership into the hands of your early users and believers.d",
};

export const services: ServiceRaw[] = [
  launchpadService,
  decisionMarketService,
  ICOService,
];
