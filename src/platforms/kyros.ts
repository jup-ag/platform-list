import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "kyros",
  name: "Kyros",
  description:
    "Kyros is a liquid restaking protocol built on Jito Restaking, offering kySOL that combines staking, MEV, and restaking rewards.",
  defiLlamaId: "kyros",
  tags: ["dapp", "lst", "restaking"],
  links: {
    website: "https://app.kyros.fi/",
    twitter: "https://x.com/kyrosfi",
    discord: "https://discord.gg/kyros",
  },
  tokens: [
    "kySo1nETpsZE2NWe5vj2C64mPSciH1SppmHb4XieQ7B",
    "kyJtowDDACsJDm2jr3VZdpCA6pZcKAaNftQwrJ8KBQP",
    "kyKYFGGhy5YAg6Yotedj7ZtByUBepsraT4BFkF3Uxmk",
  ],
  platformToken: "kyrosJC2dtm6EoLV5wffZsS4RZVm2hRafKZCLsc38JE",
};

const contract = {
  name: "Airdrop",
  address: "MerKyPxu2fs6U1oqRbj5KVYApbFcAKzBWG8TDCeEpQ4",
  networkId: NetworkId.solana,
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [airdropService];
