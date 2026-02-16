# @jup-ag/platform-list

A comprehensive registry of platforms in the Solana DeFi ecosystem. This package provides structured platform data including metadata, links, and token information.

## Installation

```bash
npm install @jup-ag/platform-list
# or
yarn add @jup-ag/platform-list
```

## Usage

Get platforms locally

```typescript
import { platforms } from "@jup-ag/platform-list";

console.log(platforms);
```

Get platforms dynamically

```typescript
import { fetchPlatforms } from "@jup-ag/platform-list";

fetchPlatforms()
  .then((fetchedPlatforms) => {
    console.log(fetchedPlatforms);
  })
  .catch((error) => {
    console.error("Error fetching platforms:", error);
  });
```

## Contributing

We welcome contributions from the community! If you want to add a new platform, smart contract, or service to the registry, please read our [Contributing Guide](CONTRIBUTING.md).

### Quick Start for Contributors

1. Fork the repository
2. Create a platform file in `src/platforms/yourplatform.ts`
3. Add a 400x400 `.webp` image in `img/yourplatform.webp`
4. Follow the rules:
   - Platform IDs must be lowercase
   - Images must be `.webp` format, 400x400 pixels
5. Submit a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions and examples.

## Publishing

To publish a new version:

```bash
npm run format
npm run build:index
npm run commit:index
npm version patch
git push origin main --tags

# or
npm version patch && git push origin main --tags
```
