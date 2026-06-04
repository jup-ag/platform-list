import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "packs",
  name: "Packs",
  description:
    "Packs is a Solana-based on-chain card collecting protocol centered around group pack openings, card rewards, and staking.",
  tags: ["dapp"],
  links: {
    website: "https://packs.supply",
    twitter: "https://x.com/packs_supply",
    documentation: "https://packs.supply/about",
  },
  platformToken: "packDNgLRrmHPwnpbTKs87e2uRN9UgRsfkwQuSf2JwL",
};

const mainContract = {
  name: "Packs Mining",
  address: "98GFMMGucYHmHSk91HWr4W4mHAxU38sUM7RYf8rVRBmQ",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-mining`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
