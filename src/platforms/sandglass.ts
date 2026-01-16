import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "sandglass",
  name: "Sandglass",
  description:
    "A yield trading protocol on Solana that enables users to trade future yields",
  defiLlamaId: "sandglass",
  links: {
    website: "https://sandglass.so/",
    discord: "https://discord.gg/jSNe84QZ67",
    twitter: "https://x.com/sandglass_so",
    medium:
      "https://medium.com/@lifinity.io/introducing-sandglass-a-yield-trading-protocol-on-solana-9b5ee5b33aff",
  },
  tags: ["dapp", "defi"],
};

const mainContract = {
  name: "Markets",
  address: "SANDsy8SBzwUE8Zio2mrYZYqL52Phr2WQb9DDKuXMVK",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
