import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "halo",
  name: "Halo Supply",
  description:
    "Mining is the process by which new HALO tokens are created and distributed to users",
  tags: ["tool"],
  links: {
    website: "https://halo.supply/",
    documentation: "https://halo.supply/about",
  },
  platformToken: "HALozDi7vZmnzdhmriUJGRDy7A5RXiTPj7ZGuiALGgyX",
};

const v3Contract = {
  name: "Mining",
  address: "bCVZJnxmvTdTprYtP2Htmr7cHXEh8ETP3PXgt4QGrEQ",
  networkId: NetworkId.solana,
};

export const v3Service: ServiceRaw = {
  id: `${platform.id}-mining`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
