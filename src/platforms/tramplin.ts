import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "tramplin",
  name: "Tramplin",
  description: "Boost your savings with randomized yield.",
  links: {
    website: "https://tramplin.io/",
    twitter: "https://x.com/Tramplin_io",
    discord: "https://discord.com/invite/tramplin",
  },
  tags: ["dapp"],
  addedAt: 1770897600000,
};

const mainContract = {
  name: "Tramplin",
  address: "3NJyzGWjSHP4hZvsqakodi7jAtbufwd52vn1ek6EzQ35",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Tramplin",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
