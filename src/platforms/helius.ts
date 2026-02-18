import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "helius",
  name: "Helius",
  description:
    "Helius is an infrastructure provider offering RPC nodes, APIs, webhooks, and developer tools for building applications.",
  links: {
    website: "https://www.helius.dev/",
    discord: "https://discord.gg/helius",
    twitter: "https://x.com/Helius",
    github: "https://github.com/helius-labs",
    documentation: "https://www.helius.dev/docs",
  },
  tokens: ["he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A"],
  tags: ["tool", "infrastructure", "lst"],
};

export const billingService: ServiceRaw = {
  id: `${platform.id}-billing`,
  name: "Billing",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [billingService];
