import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "save",
  name: "Save",
  description:
    "Solend is an algorithmic, decentralized protocol for lending and borrowing on Solana. ",
  defiLlamaId: "save",
  tags: ["dapp"],
  links: {
    website: "https://save.finance/",
    discord: "https://discord.com/invite/J7m48UUPkJ",
    twitter: "https://x.com/save_finance",
    github: "https://github.com/solendprotocol",
    documentation: "https://docs.save.finance/",
  },
  tokens: [
    "SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp",
    "SAVEaeeqeXNKYb4Lyx28DkUms5gyZ76vGa6fCfdzWfK",
  ],
};

export const saveContract = {
  name: "Lending",
  address: "So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo",
  networkId: NetworkId.solana,
};

const migrationContract = {
  name: "Save Migration",
  address: "S2SquuEfKRHm1riCj13WobJJzf3CgUwu7QmijxjpTfx",
  networkId: NetworkId.solana,
};

const rewardContract = {
  name: "Reward",
  address: "mrksLcZ6rMs9xkmJgw6oKiR3GECw44Gb5NeDqu64kiw",
  networkId: NetworkId.solana,
};

const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [saveContract],
};

const migrationService: ServiceRaw = {
  id: `${platform.id}-migration`,
  name: "Migration",
  platformId: platform.id,
  contractsRaw: [migrationContract],
};

const rewardService: ServiceRaw = {
  id: `${platform.id}-reward`,
  name: "Reward",
  platformId: platform.id,
  contractsRaw: [rewardContract],
};

export const services: ServiceRaw[] = [
  lendingService,
  migrationService,
  rewardService,
];
