import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "pumpfunbot-scanner",
  name: "PumpFunBot Scanner",
  description:
    "Read-only Solana token mint scanner displaying mint and freeze authorities and pump.fun route status. Reports are informational, not a guarantee of token safety.",
  links: {
    website: "https://pumpfunbot.app/scanner",
  },
  tags: ["tool"],
};

export const services: ServiceRaw[] = [];
export default services;
