import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "portal-bridge",
  name: "Portal Bridge",
  description:
    "Portal Bridge is a cross-chain token transfer interface powered by Wormhole, supporting bridging of assets across 30+ blockchains.",
  links: {
    website: "https://portalbridge.com/",
    twitter: "https://x.com/portalbridge_",
  },
  tags: ["bridge", "dapp"],
  parentId: "wormhole",
};

export const services: ServiceRaw[] = [];
