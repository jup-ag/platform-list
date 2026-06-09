import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "gum",
  name: "GUM",
  links: {
    website: "https://x.com/Jupnet",
    twitter: "https://x.com/Jupnet",
  },
  tags: ["dex"],
  parentId: jupiterPlatform.id,
};

const contract = {
  name: "Bank",
  address: "bk1PDAkbHEBGtVRiM94Lzets8gVFP7FgySyfkAc8MPN",
  networkId: NetworkId.solana,
};

const bankProgram = {
  name: "Bank Program",
  address: "BankK1Y7HK6ZYmPorzAuUNk1TbJixDFQnqfWnP7HNmFZ",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-global-deposits`,
  name: "Global Deposit",
  platformId: platform.id,
  contractsRaw: [contract, bankProgram],
};

export const services: ServiceRaw[] = [service];
