import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "hadeswap",
  name: "Hadeswap",
  description:
    "Hadeswap was an NFT AMM marketplace enabling instant NFT trading with liquidity pools.",
  links: {
    website: "https://www.hadeswap.com/",
    twitter: "https://x.com/SwapHades",
    github: "https://github.com/hadeswap-solana",
  },
  tags: ["dapp", "nft-marketplace"],
  platformToken: "BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn",
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
