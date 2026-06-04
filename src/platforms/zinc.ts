import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "zinc",
  name: "Zinc",
  description:
    "Zinc is a private proof-of-work mining protocol on Solana powered by MetaDAO and Arcium.",
  tags: ["dapp"],
  links: {
    website: "https://zinc.cash",
    twitter: "https://x.com/zinc_cash",
    github: "https://github.com/sphalerite-foundry",
  },
  platformToken: "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi",
};

const mainContract = {
  name: "ZINC Mining",
  address: "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-mining`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
