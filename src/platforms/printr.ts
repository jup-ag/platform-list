import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "printr",
  name: "Printr",
  description: "Printr is the most configurable launchpad on Solana.",
  links: {
    website: "https://www.printr.money/",
    twitter: "https://x.com/printr",
    documentation: "https://printr.gitbook.io/printr-docs",
  },
  tags: ["dapp", "launchpad"],
};

const mainContract = {
  name: "Printr Program",
  address: "T8HsGYv7sMk3kTnyaRqZrbRPuntYzdh12evXBkprint",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-program`,
  name: "Printr Program",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
