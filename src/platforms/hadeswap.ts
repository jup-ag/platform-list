import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "hadeswap",
  name: "Hadeswap",
  links: {
    website: "https://www.hadeswap.com/",
    twitter: "https://x.com/hadeswap/",
    github: "https://github.com/hadeswap-solana",
  },
  tags: ["dapp", "nft-marketplace"],
  tokens: ["BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn"],
  isDeprecated: true,
};

const mainContract = {
  name: "Swap",
  address: "hadeK9DLv9eA7ya5KCTqSvSvRZeJC3JgD5a9Y3CNbvu",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Swap",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
