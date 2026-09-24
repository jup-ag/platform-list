import { NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "nolus",
  name: "Nolus",
  description:
    "Fixed-rate spot margin and lending protocol connected to Solana through Solray.",
  links: {
    website: "https://nolus.io/",
    twitter: "https://x.com/NolusProtocol",
    github: "https://github.com/nolus-protocol",
    documentation: "https://docs.nolus.io/docs",
  },
  platformToken: "B9Vhg6XrNswZvLdKgpKhZ9Fj9yV7j2RxQKUaq5fmuphv",
  tags: ["dapp", "defi", "lending", "trading"],
  addedAt: 1790208000000,
};

const solrayProgram = {
  name: "Solray",
  address: "9ATDq9dpDcM517hncjHnbWsBXzsNxKvqdfJ4L5qHJYy2",
  networkId: NetworkId.solana,
};

export const solrayService: ServiceRaw = {
  id: `${platform.id}-solray`,
  name: "Solray",
  platformId: platform.id,
  contractsRaw: [solrayProgram],
  link: "https://app.nolus.io/",
  description: "IBC token transfers and remote spot margin leases on Solana.",
};

export const services: ServiceRaw[] = [solrayService];
