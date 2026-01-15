import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "citrus",
  name: "Citrus",
  description:
    "Citrus is an NFT lending platform by Famous Fox Federation, enabling users to borrow SOL against NFT collateral or lend to earn yield.",
  defiLlamaId: "citrus",
  links: {
    website: "https://citrus.famousfoxes.com/",
    discord: "https://discord.com/invite/famousfoxes",
    twitter: "https://x.com/FamousFoxFed",
    documentation: "https://citrus.famousfoxes.com/faq",
  },
  tags: ["dapp", "lending", "defi"],
  platformToken: "FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq",
};

const lendingContract = {
  name: "Lending",
  address: "JCFRaPv7852ESRwJJGRy2mysUMydXZgVVhrMLmExvmVp",
  networkId: NetworkId.solana,
};

export const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
};

export const services: ServiceRaw[] = [lendingService];
