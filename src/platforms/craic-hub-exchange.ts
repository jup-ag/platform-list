import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "craic-hub-exchange",
  name: "Craic Hub Exchange",
  description:
    "Craic Hub Exchange is a non-custodial Solana exchange front end. Swaps are signed in the user's wallet and routed via Jupiter, and users can also launch coins and create Meteora pools. A platform fee of 0-0.75% applies to swaps.",
  tags: ["dapp", "dex", "trading", "launchpad"],
  links: {
    website: "https://exchange.craiccoin.com/",
    twitter: "https://x.com/CraicCoinSol",
    telegram: "https://t.me/CraicCoinChat",
  },
  platformToken: "GXNXwLeoeupXEvufsXDQoEfk1immBtaE4kVFC4tBpump",
  addedAt: 1792368000000,
};

export const services: ServiceRaw[] = [];
