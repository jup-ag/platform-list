import { PlatformRaw, ServiceRaw } from "../types";
import { platform as eternalstakefinancePlatform } from "./eternalstakefinance";

export const platform: PlatformRaw = {
  id: "myceliumfinance",
  name: "Mycelium Finance",
  parentId: eternalstakefinancePlatform.id,
  description:
    "Mycelium Finance pairs its MYC token with other Solana tokens in DEX liquidity pools and earns a share of trading fees.",
  links: {
    website: "https://www.myceliumfinance.com/",
    twitter: "https://x.com/myceliumfinance",
    discord: "https://discord.gg/5M7FsQcGq",
    github: "https://github.com/Mycelium-Finance",
  },
  tags: ["dapp", "defi", "liquidity-provider"],
  platformToken: "BN71JwRWvNuqYQtxWrfpuYsMpFn3nSs5xDKEN78nyn4",
};

export const services: ServiceRaw[] = [];
