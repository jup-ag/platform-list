import { PlatformRaw, ServiceRaw } from "../types";
import { platform as magicedenPlatform } from "./magiceden";

export const platform: PlatformRaw = {
  id: "magiceden-wallet",
  name: "Magic Eden Wallet",
  description:
    "Multi-chain crypto wallet supporting Solana, Bitcoin, Ethereum, and Polygon.",
  links: {
    website: "https://wallet.magiceden.io/",
    twitter: "https://x.com/MagicEden",
    discord: "https://discord.gg/magiceden",
    documentation: "https://docs-wallet.magiceden.io/",
  },
  tags: ["wallet"],
  isDeprecated: true,
  parentId: magicedenPlatform.id,
};

export const services: ServiceRaw[] = [];
