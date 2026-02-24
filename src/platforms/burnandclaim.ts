import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "burnandclaim",
  name: "Burn and Claim",
  description:
    "The All-In-One Solana Incinerator. Burn Tokens & NFTs. Close Accounts. Claim Back SOL.",
  links: {
    website: "https://www.burnandclaim.com",
    twitter: "https://x.com/burnandclaim",
  },
  tags: ["tool"],
};

const burnAndClaimContract = {
  name: "Incinerator",
  address: "abrn446KXzKZxSowJdHN9XumbGfQi4DdAfWHBT7X81r",
  networkId: NetworkId.solana,
};

export const cleanupService: ServiceRaw = {
  id: `${platform.id}-cleanup`,
  name: "Cleanup",
  platformId: platform.id,
  contractsRaw: [burnAndClaimContract],
};

export const services: ServiceRaw[] = [cleanupService];
export default services;
