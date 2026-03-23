import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";

export const platform: PlatformRaw = {
  id: "jupiter-offerbook",
  name: "Jupiter Offerbook",
  links: {
    website: "https://offerbook.jup.ag/",
    twitter: "https://x.com/jup_offerbook",
  },
  tags: ["defi", "dapp"],
  parentId: jupiterPlatform.id,
};

export const contract = {
  name: "Loans",
  address: "Loanq3nXSZtyb2QC2Xv9PBb7mwb99vSQUJ22cEwi3qH",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `jupiter-offerbook-main`,
  name: "Offerbook",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
