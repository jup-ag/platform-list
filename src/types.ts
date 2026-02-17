import { NetworkIdType } from "@sonarwatch/portfolio-core";

export { NetworkId } from "@sonarwatch/portfolio-core";

export type Platform = {
  id: string;
  name: string;
  image: string;
  description?: string;
  defiLlamaId?: string;
  isDeprecated: boolean;
  addedAt?: number;
  platformToken?: string;
  tokens?: string[];
  tags: PlatformTag[];
  parentId?: string;
  links: {
    website: string;
    discord?: string;
    telegram?: string;
    twitter?: string;
    github?: string;
    medium?: string;
    documentation?: string;
  };
};

export type PlatformTag =
  | "dapp"
  | "tool"
  | "cex"
  | "nft-collection"
  | "nft-marketplace"
  | "lst"
  | "gaming"
  | "bridge"
  | "dao"
  | "memecoin"
  | "stablecoin"
  | "wallet"
  | "launchpad"
  | "dex"
  | "social"
  | "depin"
  | "desci"
  | "fitness"
  | "liquidity-provider"
  | "lending"
  | "rwa"
  | "institutional"
  | "prediction"
  | "trading"
  | "infrastructure"
  | "amm"
  | "vault"
  | "defi"
  | "ai"
  | "restaking"
  | "options"
  | "payments"
  | "oracle"
  | "nft"
  | "bitcoin"
  | "card"
  | "privacy";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type PlatformRaw = Omit<Optional<Platform, "isDeprecated">, "image">;

export type Service = {
  id: string;
  name: string;
  platformId: string;
  contracts: Contract[];
  link?: string;
  description?: string;
};

export type ServiceRaw = Omit<Service, "contracts"> & {
  contractsRaw: ContractRaw[];
};

/**
 * Represents a smart contract/program
 */
export type Contract = {
  id: string;
  name: string;
  address: string;
  serviceId: string;
  platformId: string;
  networkId: NetworkIdType;
};

export type ContractRaw = Omit<Contract, "id" | "serviceId" | "platformId">;
