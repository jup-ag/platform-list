import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "binance",
  name: "Binance",
  description:
    "Binance is a cryptocurrency exchange offering spot, futures, and derivatives trading along with staking and lending services.",
  links: {
    website: "https://www.binance.com/",
    twitter: "https://x.com/binance",
  },
  tags: ["cex"],
};

const mainContract = {
  name: "Binance Alpha 2.0",
  address: "BN111TK638zTi7uSXCKkzXYPSRt3rKNSDBK6VsjS772b",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-alpha-2`,
  name: "Binance Alpha 2.0",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
