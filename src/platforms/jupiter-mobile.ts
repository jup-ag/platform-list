import { PlatformRaw, ServiceRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";

export const platform: PlatformRaw = {
  id: "jupiter-mobile",
  name: "Jupiter Mobile",
  description:
    "The Most Powerful Mobile App in Crypto. Available on iOS & Android.",
  links: {
    website: "https://jup.ag/mobile",
    twitter: "https://x.com/jup_mobile",
  },
  tags: ["wallet"],
  parentId: jupiterPlatform.id,
};

export const services: ServiceRaw[] = [];
