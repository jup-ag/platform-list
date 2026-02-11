import { platforms as platformsRaw } from "./platforms/index";
import { services as servicesRaw } from "./platforms/index";
import { Contract, Platform, Service } from "./types";

export { Contract, ContractRaw, Platform, Service, ServiceRaw } from "./types";
export * from "./utils";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/jup-ag/platform-list/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

const services: Service[] = servicesRaw.map((s): Service => {
  const { contractsRaw, ...rest } = s;
  return {
    ...rest,
    contracts: contractsRaw.map((c) => ({
      ...c,
      id: `${c.networkId}-${c.address}`,
      platformId: s.platformId,
      serviceId: s.id,
      networkId: c.networkId,
    })),
  };
});

const contracts: Contract[] = services
  .map((s): Contract[] => s.contracts)
  .flat();

export { platforms, services, contracts };
