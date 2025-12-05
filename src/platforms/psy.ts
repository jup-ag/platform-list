import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "psy",
  name: "Psy Finance",
  links: {
    website: "",
    twitter: "https://x.com/PsyOptions",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const securedPutContract = {
  name: "Secured Put",
  address: "PSYFiYqguvMXwpDooGdYV6mju92YEbFobbvW617VNcq",
  networkId: NetworkId.solana,
};

const marketMakerContract = {
  name: "Market Maker",
  address: "PSYAFJTojpfAjYcHMcFdU89s5hwKA6hgihnvD9Hitue",
  networkId: NetworkId.solana,
};

const stakeContract = {
  name: "Stake",
  address: "pSystkitWgLkzprdAvraP8DSBiXwee715wiSXGJe8yr",
  networkId: NetworkId.solana,
};

export const securePutService = {
  id: `${platform.id}-secure-put`,
  name: "Secure Put",
  platformId: platform.id,
  contractsRaw: [securedPutContract],
};

export const stakeService = {
  id: `${platform.id}-stake`,
  name: "Stake",
  platformId: platform.id,
  contractsRaw: [stakeContract],
};

export const marketMakerService = {
  id: `${platform.id}-market-maker`,
  name: "Market Maker",
  platformId: platform.id,
  contractsRaw: [marketMakerContract],
};

export const services = [securePutService, marketMakerService, stakeService];
