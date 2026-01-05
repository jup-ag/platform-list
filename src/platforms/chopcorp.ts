import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "chopcorp",
  name: "Chopcorp",
  description:
    "LOG is a digital commodity on the Solana blockchain.",
  tags: ["tool"],
  links: {
    website: "https://chopcorp.io/",
    discord: "https://discord.gg/fCNHMaYE7v",
    twitter: "https://x.com/Chopcorpsol",
    documentation: "https://chopcorp.io/about",
  },
  tokens: ["chopmfFa3T1CzZj9WUgq5e18aMvjufSHGfPTvyKkydL"],
};

const v3Contract = {
  name: "V3",
  address: "mineWsRs2Rmw2jPMkVbgAbDjV1E23yQ8TEodaX3iza4",
  networkId: NetworkId.solana,
};

export const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
