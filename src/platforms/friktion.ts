import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "friktion",
  name: "Friktion",
  links: {
    website: "",
    github: "https://github.com/Friktion-Labs",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "VoLT1mJz1sbnxwq5Fv2SXjdVDgPXrb9tJyC8WpMDkSp",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
