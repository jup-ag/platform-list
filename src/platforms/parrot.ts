import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "parrot",
  name: "Parrot",
  links: {
    website: "https://parrot.fi/",
    twitter: "https://x.com/gopartyparrot",
    github: "https://github.com/gopartyparrot",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const lendingContract = {
  name: "Lending",
  address: "HajXYaDXmohtq2ZxZ6QVNEpqNn1T53Zc9FnR1CnaNnUf",
  networkId: NetworkId.solana,
};

export const lendingService = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
};

export const services = [lendingService];
