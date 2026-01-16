import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "mooncake",
  name: "Mooncake",
  description:
    "Mooncake is a permissionless tokenized perpetual market offering leveraged tokens for long and short exposure.",
  defiLlamaId: "mooncake",
  links: {
    website: "https://app.mooncake.fi/",
    documentation: "https://docs.mooncake.fi/",
    twitter: "https://x.com/mooncake_fi",
  },
  tags: ["dapp", "trading", "defi", "vault"],
  platformToken: "J1wnHdKvP34fg7TtYdX63UPJMTdXNzJGEqfNJB22vKjU",
};

const contract = {
  name: "Mooncake",
  address: "mnCk3moW6q9UszVev3C9JjtE4YoviXgLwiLCnUy3c4D",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "mooncake-leveraged-tokens",
  name: "Leveraged Tokens",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
