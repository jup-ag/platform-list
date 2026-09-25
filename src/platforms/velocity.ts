import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "velocity",
  name: "Velocity",
  description:
    "Velocity brings on-chain, cross-margined perpetual futures and a money market to Solana, where one collateral balance backs positions and is lent to borrowers.",
  tags: ["dapp", "dex", "trading", "lending", "defi"],
  links: {
    website: "https://velocity.exchange/",
    discord: "https://discord.com/invite/95kByNnDy5",
    twitter: "https://x.com/VelocityDEX",
    github: "https://github.com/velocity-exchange",
    documentation: "https://docs.velocity.exchange/",
  },
  addedAt: 1790319958000,
};

const mainContract = {
  name: "Velocity",
  address: "vELoC1audYbSYVRXn1vPaV8Axoa9oU6BYmNGZZBDZ1P",
  networkId: NetworkId.solana,
};

const jitProxyContract = {
  name: "Jit Proxy",
  address: "J1TPRoXCtGuMcWiWFE6RB9eZU8U35PBMETCwNQLCNPhQ",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
  link: "https://app.velocity.exchange/",
  description:
    "Cross-margined perpetual futures trading, combining an on-chain order book, just-in-time market makers and AMM liquidity. Deposited collateral is lent to borrowers and earns the lending rate.",
};

export const marketMakerService: ServiceRaw = {
  id: `${platform.id}-market-maker`,
  name: "Market Maker",
  platformId: platform.id,
  contractsRaw: [jitProxyContract],
  description:
    "Just-in-time (JIT) liquidity proxy enabling market makers to provide liquidity and fill taker orders.",
};

export const services: ServiceRaw[] = [mainService, marketMakerService];
