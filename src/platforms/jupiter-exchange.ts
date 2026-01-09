import { PlatformRaw, ServiceRaw, NetworkId, ContractRaw } from "../types";

export const platform: PlatformRaw = {
  id: "jupiter-exchange",
  name: "Jupiter",
  description:
    "Jupiter is building the infrastructure for an open financial future. With over $1 trillion in annual volume, Jupiter delivers a unified superapp experience that is simple to use, built to last, and proven at scale by operating a full-stack onchain product suite spanning self-custody, spot, perpetuals, lend, stake, stablecoin, token creation, prediction markets, developer APIs",
  defiLlamaId: "jupiter",
  links: {
    website: "https://jup.ag/",
    discord: "https://discord.gg/jup",
    twitter: "https://x.com/JupiterExchange",
    github: "https://github.com/jup-ag",
    documentation: "https://station.jup.ag/",
  },
  tokens: [
    "27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4",
    "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
    "JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD",
  ],
  tags: ["dapp", "lending", "trading", "stablecoin", "defi", "lst"],
};

export const jupiterV7Contract: ContractRaw = {
  name: "Swap V7",
  address: "JUP7pNXFL1G2BESRYMtZ1jepzfDQVffkkkf5JhXWWhC",
  networkId: NetworkId.solana,
};

export const jupiterV6Contract = {
  name: "Swap V6",
  address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
  networkId: NetworkId.solana,
};

const jupiterV5Contract = {
  name: "Swap v5",
  address: "JUP5pEAZeHdHrLxh5UCwAbpjGwYKKoquCpda2hfP4u8",
  networkId: NetworkId.solana,
};

const jupiterV4Contract = {
  name: "Swap v4",
  address: "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB",
  networkId: NetworkId.solana,
};

const jupiterV3Contract = {
  name: "Swap v3",
  address: "JUP3c2Uh3WA4Ng34tw6kPd2G4C5BB21Xo36Je1s32Ph",
  networkId: NetworkId.solana,
};

const jupiterV2Contract = {
  name: "Swap v2",
  address: "JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo",
  networkId: NetworkId.solana,
};

const jupiterV1Contract = {
  name: "Swap v1",
  address: "JUP6i4ozu5ydDCnLiMogSckDPpbtr7BJ4FtzYWkb5Rk",
  networkId: NetworkId.solana,
};

export const apeContract = {
  name: "Ape",
  address: "JSWX3pKDbj2EdCMu4ei7sPYSpdcwZNyjkDSteoHQ4UH",
  networkId: NetworkId.solana,
};

export const jupiterLimitContract = {
  name: "Limit",
  address: "jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu",
  networkId: NetworkId.solana,
};

export const jupiterLimitV1Contract = {
  name: "Limit V1",
  address: "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
  networkId: NetworkId.solana,
};

export const jupiterDcaContract = {
  name: "DCA",
  address: "DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M",
  networkId: NetworkId.solana,
};

const jupiterDcaVaContract = {
  name: "VA",
  address: "VALaaymxQh2mNy2trH9jUqHT1mTow76wpTcGmSWSwJe",
  networkId: NetworkId.solana,
};

export const jupiterLockContract = {
  name: "Lock",
  address: "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn",
  networkId: NetworkId.solana,
};

export const jupiterPerpsContract = {
  name: "Perps",
  address: "PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "meRjbQXFNf5En86FXT2YPz1dQzLj4Yb3xK8u1MVgqpb",
  networkId: NetworkId.solana,
};

const rfqContract = {
  name: "JupiterZ",
  address: "61DFfeTKM7trxYcPQCM78bJ794ddZprZpAwAnLiwTpYH",
  networkId: NetworkId.solana,
};

const inviteContract = {
  name: "Invite",
  address: "inv1tEtSwRMtM44tbvJGNiTxMvDfPVnX9StyqXfDfks",
  networkId: NetworkId.solana,
};

const lendVaultsContract = {
  name: "Lend Vaults",
  address: "jupr81YtYssSyPt8jbnGuiWon5f6x9TcDEFxYe3Bdzi",
  networkId: NetworkId.solana,
};

export const lendContract = {
  name: "Lend",
  address: "jup3YeL8QhtSx1e253b2FDvsMNC87fDrgQZivbrndc9",
  networkId: NetworkId.solana,
};

export const rewardsHubContract = {
  name: "Rewards Hub",
  address: "GenieRGuCtgfDGThwjp2GLreQMFtJoG1fqFE8MF1gAzG",
  networkId: NetworkId.solana,
};

const deltaNeutralVaultContract = {
  name: "Delta Neutral Vault",
  address: "BUNDeH5A4c47bcEoAjBhN3sCjLgYnRsmt9ibMztqVkC9",
  networkId: NetworkId.solana,
};

export const swapV7Service: ServiceRaw = {
  id: `${platform.id}-swap-v7`,
  name: "Swap v7",
  platformId: platform.id,
  contractsRaw: [jupiterV7Contract],
  link: "https://jup.ag/swap",
  description:
    "The swap service allows users to exchange one cryptocurrency for another directly through the Jupiter platform, leveraging its DEX aggregation capabilities to find the best rates across multiple liquidity sources.",
};

export const swapV6Service: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Swap v6",
  platformId: platform.id,
  contractsRaw: [jupiterV6Contract],
};

export const swapV5Service: ServiceRaw = {
  id: `${platform.id}-swap-v5`,
  name: "Swap v5",
  platformId: platform.id,
  contractsRaw: [jupiterV5Contract],
};

export const swapV4Service: ServiceRaw = {
  id: `${platform.id}-swap-v4`,
  name: "Swap v4",
  platformId: platform.id,
  contractsRaw: [jupiterV4Contract],
};

export const swapV3Service: ServiceRaw = {
  id: `${platform.id}-swap-v3`,
  name: "Swap v3",
  platformId: platform.id,
  contractsRaw: [jupiterV3Contract],
};

export const swapV2Service: ServiceRaw = {
  id: `${platform.id}-swap-v2`,
  name: "Swap v2",
  platformId: platform.id,
  contractsRaw: [jupiterV2Contract],
};

export const swapV1Service: ServiceRaw = {
  id: `${platform.id}-swap-v1`,
  name: "Swap v1",
  platformId: platform.id,
  contractsRaw: [jupiterV1Contract],
};

export const gaslessSwapService: ServiceRaw = {
  id: `${platform.id}-gasless-swap`,
  name: "Gasless Swap",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Gasless swaps allow users to perform token swaps without needing to hold SOL for transaction fees, as the platform covers these costs on behalf of the user.",
};

export const ultraSwapService: ServiceRaw = {
  id: `${platform.id}-ultra-swap`,
  name: "Ultra Swap",
  platformId: platform.id,
  contractsRaw: [],
};

export const manualSwapService: ServiceRaw = {
  id: `${platform.id}-manual-swap`,
  name: "Manual Swap",
  platformId: platform.id,
  contractsRaw: [],
};

export const apeService: ServiceRaw = {
  id: `${platform.id}-ape`,
  name: "Ape",
  platformId: platform.id,
  contractsRaw: [apeContract],
  description:
    "Quick-buy feature for rapid token purchases with simplified one-click trading flow.",
};

export const jupiterZService: ServiceRaw = {
  id: `${platform.id}-jupiter-z`,
  name: "JupiterZ",
  platformId: platform.id,
  contractsRaw: [rfqContract],
  description:
    "JupiterZ is a request-for-quote (RFQ) service that enables users to obtain personalized trade quotes for large or complex transactions, ensuring optimal pricing and execution through direct negotiation with liquidity providers.",
};

export const limitService: ServiceRaw = {
  id: `${platform.id}-limit`,
  name: "Limit",
  platformId: platform.id,
  contractsRaw: [jupiterLimitContract],
};

export const limitV1Service: ServiceRaw = {
  id: `${platform.id}-limit-v1`,
  name: "Limit V1",
  platformId: platform.id,
  contractsRaw: [jupiterLimitV1Contract],
  description:
    "Limit order execution engine filling orders when market prices match specified targets.",
  link: "https://jup.ag/?tab=limit",
};

export const limitV2Service: ServiceRaw = {
  id: `${platform.id}-limit-v2`,
  name: "Limit V2",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "The limit order service allows users to set limit orders for token swaps, enabling them to specify the desired price at which they want to buy or sell a cryptocurrency. This service enhances trading flexibility and control over execution prices.",
  link: "https://jup.ag/?tab=limit",
};

export const dcaService: ServiceRaw = {
  id: `${platform.id}-dca`,
  name: "DCA",
  platformId: platform.id,
  contractsRaw: [jupiterDcaContract],
  link: "https://jup.ag/?tab=recurring",
  description:
    "The DCA (Dollar-Cost Averaging) service enables users to set up recurring purchases of cryptocurrencies at regular intervals, helping to mitigate the impact of market volatility and build positions over time in a disciplined manner.",
};

export const dcaDepositService: ServiceRaw = {
  id: `${platform.id}-dca-deposit`,
  name: "DCA",
  platformId: platform.id,
  contractsRaw: [],
};

export const dcaVaService: ServiceRaw = {
  id: `${platform.id}-dca-va`,
  name: "DCA VA",
  platformId: platform.id,
  contractsRaw: [jupiterDcaVaContract],
  description:
    "Value Averaging DCA adjusting purchase amounts based on portfolio performance targets.",
};

export const lockService: ServiceRaw = {
  id: `${platform.id}-lock`,
  name: "Lock",
  platformId: platform.id,
  contractsRaw: [jupiterLockContract],
  link: "https://lock.jup.ag/",
  description:
    "The lock service allows users to securely lock their tokens for a specified period, providing benefits such as earning rewards or participating in governance. This feature enhances token utility and encourages long-term holding.",
};

export const perpsService: ServiceRaw = {
  id: `${platform.id}-perps`,
  name: "Perps",
  platformId: platform.id,
  contractsRaw: [jupiterPerpsContract],
  link: "https://jup.ag/perps",
  description:
    "The perpetuals (perps) service offers users the ability to trade perpetual futures contracts on various cryptocurrencies, allowing for leveraged trading and hedging strategies without an expiration date. This service provides advanced trading options for experienced users.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
  description:
    "JUP token distribution program for platform users and liquidity providers.",
};

export const inviteService: ServiceRaw = {
  id: `${platform.id}-invite`,
  name: "Invite",
  platformId: platform.id,
  contractsRaw: [inviteContract],
  description:
    "Referral program tracking invitations and rewarding users for onboarding new traders.",
};

export const lendService: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Lend",
  platformId: platform.id,
  contractsRaw: [lendContract, lendVaultsContract],
  link: "https://jup.ag/lend",
  description:
    "The lend service allows users to lend their cryptocurrencies to earn interest, providing a way to generate passive income from idle assets. This service facilitates liquidity provision and supports the broader DeFi ecosystem.",
};

export const rewardsHubService: ServiceRaw = {
  id: `${platform.id}-rewards-hub`,
  name: "Rewards Hub",
  platformId: platform.id,
  contractsRaw: [rewardsHubContract],
};

const deltaNeutralVaultService: ServiceRaw = {
  id: `${platform.id}-delta-neutral-vault`,
  name: "Delta Neutral Vault",
  platformId: platform.id,
  contractsRaw: [deltaNeutralVaultContract],
  description:
    "Delta Neutral Vaults providing hedged investment strategies to minimize market risk.",
};

export const services: ServiceRaw[] = [
  swapV7Service,
  swapV6Service,
  swapV5Service,
  swapV4Service,
  swapV3Service,
  swapV2Service,
  swapV1Service,
  gaslessSwapService,
  ultraSwapService,
  manualSwapService,
  apeService,
  jupiterZService,
  limitService,
  limitV1Service,
  limitV2Service,
  dcaService,
  dcaDepositService,
  dcaVaService,
  lockService,
  perpsService,
  airdropService,
  inviteService,
  lendService,
  rewardsHubService,
  deltaNeutralVaultService,
];
