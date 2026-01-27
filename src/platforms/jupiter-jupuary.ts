import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";

export const platform: PlatformRaw = {
  id: "jupiter-jupuary",
  name: "Jupiter Jupuary",
  description:
    "Jupuary is Jupiter's annual airdrop event for their governance token.",
  links: {
    website: "https://jupuary.jup.ag/",
  },
  tags: ["dao"],
  parentId: jupiterPlatform.id,
};

const jupiterJupuaryContract = {
  name: "Jupuary",
  address: "DiS3nNjFVMieMgmiQFm6wgJL7nevk4NrhXKLbtEH1Z2R",
  networkId: NetworkId.solana,
};

export const jupuaryService: ServiceRaw = {
  id: `${platform.id}-service`,
  name: "Jupuary",
  platformId: platform.id,
  contractsRaw: [jupiterJupuaryContract],
};

export const services: ServiceRaw[] = [jupuaryService];
