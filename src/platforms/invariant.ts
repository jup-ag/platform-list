import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "invariant",
  name: "Invariant",
  links: {
    website: "https://invariant.app/",
    twitter: "https://x.com/invariant_labs",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "HyaB3W9q6XdA5xwpU4XnSZV94htfmbmqJXZcEbRaJutt",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
