import { platforms as platformsRaw } from "./platforms/index";
import { services as servicesRaw } from "./platforms/index";
import { Platform, Service } from "./types";

export { Platform, Service } from "./types";
export * from "./utils";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/jup-ag/platform-list/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

const services: Service[] = servicesRaw.map(
  (s): Service => ({
    ...s,
    contracts: s.contractsRaw.map((c) => ({
      ...c,
      platformId: s.platformId,
      serviceId: s.id,
      networkId: s.networkId,
    })),
  }),
);

export { platforms, services };
