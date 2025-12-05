import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "yawww",
  name: "Yawww",
  links: {
    website: "",
    twitter: "https://x.com/yawwwnft",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "5SKmrbAxnHV2sgqyDXkGrLrokZYtWWVEEk5Soed7VLVN",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
