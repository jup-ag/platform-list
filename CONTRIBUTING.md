# Contributing Guide

Thank you for your interest in contributing to the Jupiter Platform List! This guide will help you add new platforms, smart contracts, and services to the registry.

## Table of Contents

- [Getting Started](#getting-started)
- [Adding a New Platform](#adding-a-new-platform)
- [Platform Structure](#platform-structure)
- [Services and Contracts](#services-and-contracts)
- [Global Rules](#global-rules)
- [Testing](#testing)
- [Submitting Your Contribution](#submitting-your-contribution)

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your platform:
   ```bash
   git checkout -b add-platform-yourplatform
   ```

## Adding a New Platform

To add a new platform to the registry, you need to:

1. Create a platform file in [src/platforms/](src/platforms/)
2. Add a platform image in the [img/](img/) directory
3. Define services and contracts (if applicable)

### Step 1: Create Platform File

Create a new TypeScript file in `src/platforms/` named after your platform ID (e.g., `myplatform.ts`):

```typescript
import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

export const platform: PlatformRaw = {
  id: "myplatform",
  name: "My Platform",
  description: "A brief description of what your platform does",
  defiLlamaId: "your-defillama-id", // Optional
  links: {
    website: "https://myplatform.io/",
    twitter: "https://x.com/MyPlatform",
    discord: "https://discord.gg/myplatform", // Optional
    telegram: "https://t.me/myplatform", // Optional
    github: "https://github.com/myplatform", // Optional
    medium: "https://medium.com/@myplatform", // Optional
    documentation: "https://docs.myplatform.io/", // Optional
  },
  tokens: ["TokenMintAddress1", "TokenMintAddress2"], // Optional
  tags: ["dapp", "dex"], // See available tags below
};

export const services: ServiceRaw[] = [];
export default services;
```

### Step 2: Add Platform Image

Add a logo image for your platform in the `img/` directory:

- **File name**: Must match your platform ID exactly (e.g., `myplatform.webp`)
- **Format**: `.webp`
- **Dimensions**: Exactly **64x64 pixels**

You can convert images to WebP format using tools like:

- Online: [Squoosh](https://squoosh.app/)
- CLI: `cwebp input.png -o output.webp`

## Platform Structure

### Platform Metadata

| Field          | Type          | Required | Description                                     |
| -------------- | ------------- | -------- | ----------------------------------------------- |
| `id`           | string        | Yes      | Unique identifier (lowercase, no spaces)        |
| `name`         | string        | Yes      | Display name of the platform                    |
| `description`  | string        | No       | Brief description of the platform               |
| `defiLlamaId`  | string        | No       | DefiLlama protocol ID                           |
| `isDeprecated` | boolean       | No       | Mark platform as deprecated (defaults to false) |
| `tokens`       | string[]      | No       | Array of token mint addresses                   |
| `tags`         | PlatformTag[] | Yes      | Platform categories (see below)                 |
| `links`        | object        | Yes      | Social links and resources                      |

### Available Tags

Choose one or more tags that best describe your platform:

- `dapp` - Decentralized application
- `tool` - Utility or infrastructure tool
- `cex` - Centralized exchange
- `nft-collection` - NFT collection
- `nft-marketplace` - NFT marketplace
- `lst` - Liquid staking token
- `gaming` - Gaming platform
- `bridge` - Cross-chain bridge
- `dao` - Decentralized autonomous organization
- `memecoin` - Memecoin project
- `stablecoin` - Stablecoin issuer
- `wallet` - Wallet provider
- `launchpad` - Token launchpad
- `dex` - Decentralized exchange
- `social` - Social platform
- `depin` - Decentralized physical infrastructure
- `desci` - Decentralized science
- `fitness` - Fitness/health platform
- `liquidity-provider` - Liquidity provider

## Services and Contracts

Services represent specific features or smart contracts of your platform (e.g., Swap, Lending, Staking).

### Basic Service with One Contract

```typescript
import { NetworkId } from "@sonarwatch/portfolio-core";

const contract = {
  name: "Swap",
  address: "YourProgramPublicKeyHere",
};

const service: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
export default services;
```

### Multiple Services

```typescript
const swapContract = {
  name: "Swap",
  address: "SwapProgramAddress",
};

const stakingContract = {
  name: "Staking",
  address: "StakingProgramAddress",
};

const swapService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [swapContract],
};

const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [swapService, stakingService];
export default services;
```

### Service with Multiple Contracts

Some services may use multiple contracts (for example, a Multiply service that uses both a lending contract and a swap contract):

```typescript

const lendingContract = {
  name: "Lending",
  address: "LendingProgramAddress",
};

const swapingContract = {
  name : "Swap"
  address : "SwapProgramAddress"
}

const multiplyService: ServiceRaw = {
  id: `${platform.id}-multiply`,
  name: "Multiply",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [lendingContract, swapingContract],
};

export const services: ServiceRaw[] = [multiplyService];
export default services;
```

### Exporting Contracts for Reuse

If your contracts are used by other platforms, you can export them:

```typescript
// In your platform file
export const myContract = {
  name: "My Contract",
  address: "MyContractAddress",
};

// In another platform file
import { myContract } from "./myplatform";

const service: ServiceRaw = {
  id: `${platform.id}-service`,
  name: "Service",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [myContract, otherContract],
};
```

## Global Rules

Please follow these rules when contributing:

### 1. Image Requirements

- **Format**: All images MUST be in `.webp` format
- **Dimensions**: All images MUST be exactly **64x64 pixels**
- **File name**: Must match the platform ID exactly
- **Location**: Place in the `img/` directory

### 2. Naming Conventions

- **Platform IDs**: Always in lowercase, use hyphens for spaces (e.g., `my-platform`)
- **File names**: Match platform ID exactly (e.g., `my-platform.ts`, `my-platform.webp`)
- **Service IDs**: Format as `{platform-id}-{service-name}` (e.g., `jupiter-exchange-swap`)

### 3. Code Quality

- Use TypeScript types provided by the library (`PlatformRaw`, `ServiceRaw`, `ContractRaw`)
- Follow the existing code structure and patterns
- Ensure all required fields are filled
- Validate contract addresses are correct
- Always export `services` as both a named export and default export

## Testing

Before submitting your contribution, run the test suite:

```bash
# Run tests
npm test

# Build the project
npm run build

# Generate platform index
npm run build:index
```

Make sure all tests pass and there are no TypeScript errors.

## Submitting Your Contribution

1. Commit your changes:

   ```bash
   git add .
   git commit -m "feat: add [platform-name] platform"
   ```

2. Push to your fork:

   ```bash
   git push origin add-platform-yourplatform
   ```

3. Create a Pull Request on GitHub with:

   - Clear title: "Add [Platform Name] platform"
   - Description including:
     - Platform website
     - What services/contracts you're adding
     - Any special considerations

4. Wait for review and address any feedback

## Complete Example

Here's a complete example of a platform file with all the elements:

```typescript
import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";

// Platform definition
export const platform: PlatformRaw = {
  id: "jupiter-governance",
  name: "Jupiter DAO",
  description: "The first voting platform for Cats in history.",
  links: {
    website: "https://vote.jup.ag/",
    twitter: "https://x.com/jup_dao",
  },
  tokens: ["JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"],
  tags: ["dao", "dapp"],
};

// Export contracts that might be used by other platforms
export const jupiterGovernanceContract = {
  name: "Governance",
  address: "GovaE4iu227srtG2s3tZzB4RmWBzw8sTwrCLZz7kN7rY",
};

export const jupiterVoteContract = {
  name: "Locker Vote",
  address: "voTpe3tHQ7AjQHMapgSue2HJFAh2cGsdokqN3XqmVSj",
};

// Internal contract (not exported)
const asrContract = {
  name: "ASR Distributor",
  address: "Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK",
};

// Service definition
const asrService: ServiceRaw = {
  id: `${platform.id}-asr`,
  name: "ASR",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contractsRaw: [asrContract],
};

// Export services (both named export and default export)
export const services: ServiceRaw[] = [asrService];
export default services;
```

**Key points from this example:**

- Platform ID is lowercase (`jupiter-governance`)
- Contracts that other platforms might use are exported (`jupiterGovernanceContract`, `jupiterVoteContract`)
- Internal contracts are not exported (`asrContract`)
- Service ID follows the pattern `{platform-id}-{service-name}`
- Services are exported both as a named export and default export
- Image file should be at `img/jupiter-governance.webp` (64x64 pixels, .webp format)

## Questions?

If you have questions or need help:

- Open an issue on GitHub
- Check existing platforms for examples
- Review the TypeScript types in [src/types.ts](src/types.ts)

Thank you for contributing to the Jupiter Platform List!
