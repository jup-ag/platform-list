import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "quarry",
  name: "Quarry",
  defiLlamaId: "quarry",
  isDeprecated: true,
  links: {
    website: "https://app.quarry.so/",
    github: "https://github.com/QuarryProtocol",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Mine",
  address: "QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB",
  networkId: NetworkId.solana,
};

const mergeContract = {
  name: "Merge Mine",
  address: "QMMD16kjauP5knBwxNUJRZ1Z5o3deBuFrqVjBVmmqto",
  networkId: NetworkId.solana,
};

const redeemContract = {
  name: "Redeem",
  address: "QRDxhMw1P2NEfiw5mYXG79bwfgHTdasY2xNP76XSea9",
  networkId: NetworkId.solana,
};

const registryContract = {
  name: "Registry",
  address: "QREGBnEj9Sa5uR91AV8u3FxThgP5ZCvdZUW2bHAkfNc",
  networkId: NetworkId.solana,
};

export const minerService: ServiceRaw = {
  id: `${platform.id}-miner`,
  name: "Miner",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const mergeMinerService: ServiceRaw = {
  id: `${platform.id}-merge-miner`,
  name: "Merge Miner",
  platformId: platform.id,
  contractsRaw: [mergeContract],
};

export const redeemService: ServiceRaw = {
  id: `${platform.id}-redeemer`,
  name: "Redeemer",
  platformId: platform.id,
  contractsRaw: [redeemContract],
};

export const registryService: ServiceRaw = {
  id: `${platform.id}-registry`,
  name: "Registry",
  platformId: platform.id,
  contractsRaw: [registryContract],
};

export const services: ServiceRaw[] = [
  minerService,
  mergeMinerService,
  redeemService,
  registryService,
];
