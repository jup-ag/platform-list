import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "wormhole",
  name: "Wormhole",
  description:
    "Wormhole is a cross-chain messaging protocol enabling asset and data transfers between Solana and over 30 other blockchains.",
  links: {
    website: "https://wormhole.com/",
    discord: "https://discord.com/invite/wormholecrypto",
    telegram: "https://t.me/wormholecrypto",
    twitter: "https://x.com/wormhole",
    github: "https://github.com/wormhole-foundation",
    documentation: "https://wormhole.com/docs/",
  },
  platformToken: "85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ",
  tags: ["tool", "bridge", "dapp"],
  tokens: [
    "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
    "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
  ],
};

const mainContract = {
  name: "Main",
  address: "HDwcJBJXjL9FpJ7UBsYBtaDjsBUhuLCUYoz3zr8SWWaQ",
  networkId: NetworkId.solana,
};

const coreContract = {
  name: "Core",
  address: "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth",
  networkId: NetworkId.solana,
};

const legacyStakingContract = {
  name: "Legacy Staking",
  address: "sspu65omPW2zJGWDxmx8btqxudHezoQHSGZmnW8jbVz",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "MGoV9M6YUsdhJzjzH9JMCW2tRe1LLxF1CjwqKC7DR1B",
  networkId: NetworkId.solana,
};

const tokenBridgeContract = {
  name: "Token Bridge",
  address: "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb",
  networkId: NetworkId.solana,
};

const tokenBridgeRelayerContract = {
  name: "Token Bridge Relayer",
  address: "3vxKRPwUTiEkeUVyoZ9MXFe1V71sRLbLqu1gRYaWmehQ",
  networkId: NetworkId.solana,
};

const tbtcBridgeContract = {
  name: "tBTC Bridge",
  address: "87MEvHZCXE3ML5rrmh5uX1FbShHmRXXS32xJDGbQ7h5t",
  networkId: NetworkId.solana,
};

export const legacyStakingService: ServiceRaw = {
  id: `${platform.id}-legacy-staking`,
  name: "Legacy Staking",
  platformId: platform.id,
  contractsRaw: [legacyStakingContract],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  description:
    "W token staking program allowing holders to lock tokens for governance participation and earn staking rewards.",
};

export const tbtcBridgeService: ServiceRaw = {
  id: `${platform.id}-tbtc-bridge`,
  name: "tBTC Bridge",
  platformId: platform.id,
  contractsRaw: [tbtcBridgeContract],
  description:
    "Specialized bridge for transferring tBTC (threshold Bitcoin) between Ethereum and other supported chains.",
};

export const coreService: ServiceRaw = {
  id: `${platform.id}-core`,
  name: "Core",
  platformId: platform.id,
  contractsRaw: [coreContract, mainContract],
  description:
    "Core messaging layer enabling cross-chain communication by verifying and relaying messages between connected blockchains.",
};

export const tokenBridgeService: ServiceRaw = {
  id: `${platform.id}-token-bridge`,
  name: "Token Bridge",
  platformId: platform.id,
  contractsRaw: [tokenBridgeContract, tokenBridgeRelayerContract],
  link: "https://w.wormhole.com/",
  description:
    "Token transfer bridge enabling assets to move between 30+ blockchain networks through lock-and-mint or burn-and-unlock mechanisms.",
};

export const services: ServiceRaw[] = [
  legacyStakingService,
  stakingService,
  tbtcBridgeService,
  coreService,
  tokenBridgeService,
];
