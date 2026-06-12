import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solana",
  name: "Solana",
  description:
    "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
  links: {
    website: "https://solana.com/",
    discord: "https://solana.com/discord",
    telegram: "https://solana.com/telegram",
    twitter: "https://x.com/solana",
    github: "https://solana.com/github",
    documentation: "https://solana.com/docs",
  },
  tags: ["dapp"],
  platformToken: "So11111111111111111111111111111111111111111",
};

export const systemContract = {
  name: "System",
  address: "11111111111111111111111111111111",
  networkId: NetworkId.solana,
};

export const solanaComputeBudgetContract = {
  name: "Compute Budget",
  address: "ComputeBudget111111111111111111111111111111",
  networkId: NetworkId.solana,
};

const solanaStakingContract = {
  name: "Staking",
  address: "Stake11111111111111111111111111111111111111",
  networkId: NetworkId.solana,
};

export const addressLookupTableContract = {
  name: "Address Lookup Table",
  address: "AddressLookupTab1e1111111111111111111111111",
  networkId: NetworkId.solana,
};

export const solanaAssociatedTokenContract = {
  name: "Associated Token Account",
  address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
  networkId: NetworkId.solana,
};

export const solanaTokenProgramContract = {
  name: "Token Program",
  address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  networkId: NetworkId.solana,
};

export const solanaToken2022ProgramContract = {
  name: "Token 2022 Program",
  address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
  networkId: NetworkId.solana,
};

const solanaStakePoolContract = {
  name: "Stake Pool",
  address: "SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy",
  networkId: NetworkId.solana,
};

const singleValidatorStakePoolContract = {
  name: "Single Validator Stake Pool",
  address: "SVSPxpvHdN29nkVg9rPapPNDddN5DipNLRUFhyjFThE",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-stake`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [solanaStakingContract],
  description:
    "Native stake program for delegating SOL to validators and earning staking rewards.",
};

export const stakePoolService: ServiceRaw = {
  id: `${platform.id}-stake-pool`,
  name: "Stake Pool",
  platformId: platform.id,
  contractsRaw: [solanaStakePoolContract],
  description:
    "Stake pool program enabling liquid staking through pooled validator delegation.",
};

export const singleValidatorStakePoolService: ServiceRaw = {
  id: `${platform.id}-single-validator-stake-pool`,
  name: "Single-Validator Stake Pool",
  platformId: platform.id,
  contractsRaw: [singleValidatorStakePoolContract],
  description:
    "Simplified stake pool for liquid staking with a single validator operator.",
};

export const closeAccountService: ServiceRaw = {
  id: `${platform.id}-close-account`,
  name: "Close Token Account",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Token account closure reclaiming rent-exempt SOL from empty token accounts.",
};

export const createAccountService: ServiceRaw = {
  id: `${platform.id}-create-account`,
  name: "Create Token Account",
  platformId: platform.id,
  contractsRaw: [],
  description: "Associated token account creation for holding SPL tokens.",
};

export const addressLookupTableService: ServiceRaw = {
  id: `${platform.id}-address-lookup-table`,
  name: "Address Lookup Table",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Lookup table management for compressing transaction account addresses.",
};

export const transferService: ServiceRaw = {
  id: `${platform.id}-transfer`,
  name: "Transfer",
  platformId: platform.id,
  contractsRaw: [],
  description: "Native SOL and SPL token transfers between accounts.",
};

export const burnService: ServiceRaw = {
  id: `${platform.id}-burn`,
  name: "Burn",
  platformId: platform.id,
  contractsRaw: [],
  description: "Token burning permanently removing tokens from circulation.",
};

export const delegateService: ServiceRaw = {
  id: `${platform.id}-delegate`,
  name: "Delegate",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Token delegation granting spending authority to another account.",
};

export const setAuthorityService: ServiceRaw = {
  id: `${platform.id}-set-authority`,
  name: "Set Authority",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Authority management for modifying token mint or freeze permissions.",
};

export const unwrapWsolService: ServiceRaw = {
  id: `${platform.id}-unwrap-wsol`,
  name: "Unwrap wSOL",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Wrapped SOL account closure converting wSOL back to native SOL.",
};

export {
  solanaStakingContract,
  solanaStakePoolContract,
  singleValidatorStakePoolContract,
};

export const services: ServiceRaw[] = [
  stakingService,
  stakePoolService,
  singleValidatorStakePoolService,
  closeAccountService,
  createAccountService,
  addressLookupTableService,
  transferService,
  burnService,
  delegateService,
  setAuthorityService,
  unwrapWsolService,
];
