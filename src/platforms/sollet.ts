import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "sollet",
  name: "Sollet",
  description: "An open-source web wallet for Solana created by Project Serum.",
  links: {
    website: "https://sollet.io/",
    github: "https://github.com/project-serum/spl-token-wallet",
  },
  tags: ["wallet"],
  isDeprecated: true,
};

export const services: ServiceRaw[] = [];
