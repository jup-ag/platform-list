import { NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "deriverse",
  name: "Deriverse",
  description: "Deriverse is a spot & derivatives Solana liquidity layer.",
  links: {
    website: "https://www.deriverse.io/",
    twitter: "https://x.com/deriverse_io",
    documentation: "https://deriverse.gitbook.io/deriverse-v1",
  },
  tags: ["dapp", "dex", "defi"],
};

const mainContract = {
  name: "Deriverse",
  address: "DRVSpZ2YUYYKgZP8XtLhAGtT1zYSCKzeHfb4DgRnrgqD",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: "deriverse-main",
  name: "Deriverse",
  platformId: "deriverse",
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
