import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "riftbeam",
  name: "RiftBeam",
  parentId: "swaptitan",
  description:
    "RiftBeam is the on-chain Solana routing engine behind SwapTitan, aggregating DEX liquidity across Raydium, Orca and Pump AMM with an adaptive-fee guard to settle best-price multi-rail swaps.",
  tags: ["dex", "defi", "infrastructure"],
  links: {
    website: "https://riftbeam.cloud/",
    twitter: "https://x.com/PolsolU",
    github: "https://github.com/polsolbridge/riftbeam-program",
  },
  addedAt: 1794096000000,
};

const riftbeamProgram = {
  name: "RiftBeam Program",
  address: "DYR2SfXreL4wMPKjWzgWv17r7qHJk3kyp1R7k3MsKkEV",
  networkId: NetworkId.solana,
};

const routerService: ServiceRaw = {
  id: `${platform.id}-router`,
  name: "RiftBeam Router",
  platformId: platform.id,
  contractsRaw: [riftbeamProgram],
  description:
    "Verified Solana routing program aggregating DEX liquidity for best-price swaps.",
};

export const services: ServiceRaw[] = [routerService];
