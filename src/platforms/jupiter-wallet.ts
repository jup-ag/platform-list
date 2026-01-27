import { PlatformRaw, ServiceRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";

export const platform: PlatformRaw = {
  id: "jupiter-wallet",
  name: "Jupiter Wallet",
  description: "The most powerful trading wallet on Solana.",
  links: {
    website:
      "https://chromewebstore.google.com/detail/Jupiter%20Wallet/iledlaeogohbilgbfhmbgkgmpplbfboh",
  },
  tags: ["wallet"],
  parentId: jupiterPlatform.id,
};

export const services: ServiceRaw[] = [];
