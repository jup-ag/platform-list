import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "friktion",
  name: "Friktion",
  links: {
    website: "",
    twitter: "https://x.com/goblingold_fi",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "GGo1dnYpjKfe9omzUaFtaCyizvwpAMf3NhxSCMD61F3A",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
