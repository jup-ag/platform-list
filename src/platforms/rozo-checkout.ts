import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "rozo-checkout",
  name: "ROZO Checkout CLI",
  description:
    "Command-line payment tool for AI agents and developers to pay Coinbase-hosted invoices using crypto, including SOL, USDC and USDT on Solana.",
  links: {
    website: "https://checkout.rozo.ai/agent.html",
    github: "https://github.com/RozoAI/rozo-checkout-skill",
    documentation: "https://github.com/RozoAI/rozo-checkout-skill#readme",
  },
  tags: ["ai", "payments", "tool"],
  addedAt: 1793207226671,
};

export const services: ServiceRaw[] = [];
export default services;
