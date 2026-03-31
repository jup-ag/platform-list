import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "garden",
  name: "Garden",
  description:
    "Garden is the fastest and most cost-efficient way to move native Bitcoin between chains, without giving up custody.",
  tags: ["tool", "bridge", "dapp"],
  defiLlamaId: "garden",
  links: {
    website: "https://garden.finance",
    twitter: "https://x.com/gardenfi",
  },
};

const contract = {
  name: "Bridge",
  address: "2bag6xpshpvPe7SJ9nSDLHpxqhEAoHPGpEkjNSv7gxoF",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "Bridge",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
