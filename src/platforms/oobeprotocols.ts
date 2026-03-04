import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "oobe-protocol",
  name: "OOBE Protocol",
  description:
    "OOBE Protocol builds Solana’s agent execution infrastructure. Synapse is our product suite: the Execution Layer (agent runtime + automation) and the RPC Provider / Gateway Layer that powers fast, reliable on-chain operations for builders and AI agents.",

  links: {
    website: "https://www.oobeprotocol.ai/",
    twitter: "https://x.com/OOBEonSol",
    github: "https://github.com/OOBE-PROTOCOL",
    documentation: "https://synapse.oobeprotocol.ai/",
  },

  platformToken: "EikyJKSVWPK28rX5FG8KyJcSzv3D2b2Qg7VodzqQoobe",

  tags: ["infrastructure", "tool", "ai", "payments", "trading"],
  addedAt: 1772406000000,
};

export const services: ServiceRaw[] = [];
export default services;