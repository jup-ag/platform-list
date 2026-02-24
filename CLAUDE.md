# Adding a new platform

## Research rules
1. **Description** — Must be neutral and factual. Never invent or embellish. Stick to what the project actually does.
2. **Links** — All links (github, discord, twitter, docs) must be verified as exact. Scrape the website footer or about page to find the official social links rather than guessing.
3. **Tokens** — Only list tokens actually created by the platform. Verify via trusted sources (CoinGecko, CoinMarketCap, official Twitter announcements).
4. **Contracts** — Look for deployed program addresses in the project's GitHub repos (e.g. in `lib.rs`, `Anchor.toml`, deploy scripts, docs). Present found addresses with their source link for user verification before adding them.

## Steps
1. **Research** the platform following the rules above
2. **Create** `src/platforms/<id>.ts` following the pattern below
3. **Regenerate index**: `npx ts-node scripts/generate-imports.ts`
4. **Fetch image**: `npx ts-node scripts/fetch-img.ts` (downloads Twitter avatar via unavatar.io, converts to 400x400 WebP in `img/`)
5. **Type-check**: `npx tsc --noEmit`

## Platform file pattern (`src/platforms/<id>.ts`)
```ts
import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
// Only import NetworkId if you actually use it (for contracts)

export const platform: PlatformRaw = {
  id: "<id>",              // kebab-case, matches filename
  name: "<Display Name>",
  description: "<one-liner>",
  links: {
    website: "https://...",
    twitter: "https://x.com/...",
    github: "https://github.com/...",     // optional
    discord: "https://discord.gg/...",     // optional
    documentation: "https://docs...",      // optional
  },
  platformToken: "<solana token address>", // optional
  tags: ["dapp", ...],                     // see PlatformTag in types.ts
  addedAt: <unix ms timestamp>,            // optional
  isDeprecated: true,                      // only if deprecated
};

// If platform has contracts:
const mainContract = {
  name: "...",
  address: "<solana program address>",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-<service>`,
  name: "...",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [mainService];
// If no services/contracts, just: export const services: ServiceRaw[] = [];
```

## Key files
- `src/types.ts` — PlatformRaw, ServiceRaw, PlatformTag, NetworkId
- `src/platforms/index.ts` — auto-generated, DO NOT edit manually
- `scripts/generate-imports.ts` — regenerates index.ts
- `scripts/fetch-img.ts` — downloads Twitter avatars → `img/<id>.webp` (400x400)

## Re-fetching a specific image
Delete the existing image first (`rm img/<id>.webp`), then run `npx ts-node scripts/fetch-img.ts`. The script skips images that are already 400x400.

## Tags
Available `PlatformTag` values are defined in `src/types.ts`.
