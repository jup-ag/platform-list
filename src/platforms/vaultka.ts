import {
  Contract,
  ContractRaw,
  PlatformRaw,
  Service,
  ServiceRaw,
  NetworkId,
} from "../types";
export const platform: PlatformRaw = {
  id: "vaultka",
  name: "Vaultka",
  description: "Liquidity optimization layer for yield bearing tokens.",
  defiLlamaId: "vaultka",
  links: {
    website: "https://solana.vaultka.com/",
    discord: "https://discord.com/invite/hXagEmhN8F",
    twitter: "https://x.com/Vaultkaofficial",
    github: "https://github.com/Vaultka-Project",
    medium: "https://medium.com/@Vaultka",
    documentation: "https://docs.vaultka.com/",
  },
  tags: ["dapp"],
};

const lendingV1Contracts: ContractRaw[] = [
  "DE7BUY3Fa4CRc44RxRDpcknbCT6mYTY3LpZNFET7k3Hz",
  "DMhoXyVNpCFeCEfEjEQfS6gzAEcPUUSXM8Xnd2UXJfiS",
  "nKMLJtN1rr64K9DjmfzXvzaq4JEy5a4AJHHP9gY1dW6",
  "69oX4gmwgDAfXWxSRtTx9SHvWmu2bd9qVGjQPpAFHaBF",
].map((address) => ({
  name: "Lending V1",
  address,
  networkId: NetworkId.solana,
}));

const stragegyV1Contracts: ContractRaw[] = [
  "6UBsNdYq3MEao1m9NXQD1VEmXvptUXhfMwdHANGAo4bs",
  "B3FS1X2PZPBrtBZiyAN9oqABnu3o5YWwdY5ioqoVh64P",
  "SkFLfp7eSRsan13dEUZSVzMBj3vdyZnhaasFKQTzuiE",
  "6VwarrrqWVWAmZtNdgGafeyoXD3SsspKxuxkZVarZqTA",
  "9p5Sc5SvR8QpJCQV3U4q6zVUTupr4Tr9Jmf48sbcSjtX",
  "FRyGij76xTvAg1nPPTaXHfa3QxUfZuKARuAyAaMyoLPo",
  "A7PDwCJ3qcdVoZLqq7wHAwMq9yEKZU2vFx7Y9qbZ1dKJ",
].map((address) => ({
  name: "Stragegy V1",
  address,
  networkId: NetworkId.solana,
}));

const vaultkaV2Contract: ContractRaw = {
  name: "Vaultka V2",
  address: "V1enDN8GY531jkFp3DWEQiRxwYYsnir8SADjHmkt4RG",
  networkId: NetworkId.solana,
};

const lendingV1Service: ServiceRaw = {
  id: `${platform.id}-lending-v1`,
  name: "Lending V1",
  platformId: platform.id,
  contractsRaw: [...lendingV1Contracts],
};
const strategyV1Service: ServiceRaw = {
  id: `${platform.id}-stragegy-v1`,
  name: "Strategy V1",
  platformId: platform.id,
  contractsRaw: [...stragegyV1Contracts],
};

const lendingV2Service: ServiceRaw = {
  id: `${platform.id}-lending-v2`,
  name: "Lending V2",
  platformId: platform.id,
  contractsRaw: [vaultkaV2Contract],
};

const leverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [vaultkaV2Contract],
};

export const services: ServiceRaw[] = [
  lendingV1Service,
  strategyV1Service,
  lendingV2Service,
  leverageService,
];
