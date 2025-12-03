import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "jupiter-governance",
  name: "Jupiter DAO",
  description: "The first voting platform for Cats in history.",
  links: {
    website: "https://vote.jup.ag/",
    twitter: "https://x.com/jup_dao",
  },
  tokens: ["JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"],
  tags: ["dao", "dapp"],
};

export const jupiterGovernanceContract = {
  name: "Governance",
  address: "GovaE4iu227srtG2s3tZzB4RmWBzw8sTwrCLZz7kN7rY",
};

export const jupiterVoteContract = {
  name: "Locker Vote",
  address: "voTpe3tHQ7AjQHMapgSue2HJFAh2cGsdokqN3XqmVSj",
};

const asrContract = {
  name: "ASR Distributor",
  address: "Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK",
};

const governanceService: ServiceRaw = {
  id: `jupiter-governance-vote`,
  name: "Vote",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [jupiterGovernanceContract, jupiterVoteContract],
};

const asrService: ServiceRaw = {
  id: `${platform.id}-asr`,
  name: "ASR",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [asrContract],
};

export const services: ServiceRaw[] = [asrService];
