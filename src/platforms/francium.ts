import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "francium",
  name: "Francium",
  description:
    "Francium is a DeFi yield strategy Platform on Solana, providing leveraged/hedged farming, DeFi strategies & on-chain trading strategies.",
  defiLlamaId: "francium",
  isDeprecated: true,
  links: {
    website: "https://francium.io/",
    discord: "https://discord.gg/francium",
    telegram: "https://t.me/franciumprotocol",
    twitter: "https://x.com/Francium_Defi",
    github: "https://github.com/Francium-DeFi",
    medium: "https://francium-defi.medium.com/",
  },
  tags: ["dapp"],
};

const mainContract = {
  name: "Main",
  address: "2nAAsYdXF3eTQzaeUQS3fr4o782dDg8L28mX39Wr5j8N",
  networkId: NetworkId.solana,
};

const orcaContract = {
  name: "Orca",
  address: "DmzAmomATKpNp2rCBfYLS7CSwQqeQTsgRYJA1oSSAJaP",
  networkId: NetworkId.solana,
};

const lendingContract = {
  name: "Lending",
  address: "FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj",
  networkId: NetworkId.solana,
};

export const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [mainContract, lendingContract],
};

export const orcaService: ServiceRaw = {
  id: `${platform.id}-orca`,
  name: "Orca",
  platformId: platform.id,
  contractsRaw: [orcaContract],
};

export const services: ServiceRaw[] = [orcaService, lendingService];
