import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "marinade",
  name: "Marinade",
  description: "Marinade connects SOL holders with the best staking rates.",
  defiLlamaId: "marinade-finance",
  links: {
    website: "https://marinade.finance/",
    discord: "https://discord.gg/yTdH8YkYKg",
    twitter: "https://x.com/MarinadeFinance",
    github: "https://github.com/marinade-finance",
    documentation: "https://docs.marinade.finance/",
  },
  tokens: [
    "MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey",
    "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
  ],
  tags: ["lst", "dapp"],
};

const contract = {
  name: "Ticket",
  address: "MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "indiXdKbsC4QSLQQnn6ngZvkqfywn6KgEeQbkGSpk1V",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-ticket`,
  name: "Ticket",
  platformId: platform.id,
  contractsRaw: [contract],
  description:
    "Delayed unstaking ticket system for converting mSOL back to SOL at a 1:1 ratio after the standard unstaking period.",
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const nativeStakeService: ServiceRaw = {
  id: `${platform.id}-native-stake`,
  name: "Native Stake",
  platformId: platform.id,
  contractsRaw: [],
  link: "https://marinade.finance/app/native/",
  description:
    "Non-custodial native staking service that delegates SOL directly to validators selected by an automated strategy promoting network decentralization.",
};

export const services: ServiceRaw[] = [
  service,
  airdropService,
  nativeStakeService,
];
