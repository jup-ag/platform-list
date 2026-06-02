import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "banx",
  name: "Banx",
  description:
    "Banx is a DeFi lending protocol for borrowing and lending against tokens and NFTs with no expiration and no price-based liquidation.",
  defiLlamaId: "banx",
  tags: ["dapp", "lending", "defi"],
  links: {
    website: "https://banx.gg/",
    discord: "https://discord.com/invite/banxfromfrakt",
    twitter: "https://x.com/banx_gg",
    github: "https://github.com/frakt-solana",
    documentation: "https://docs.banx.gg/",
  },
  platformToken: "BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR",
  isDeprecated: true,
};

export const bondsContract = {
  name: "Banx Bonds",
  address: "4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt",
  networkId: NetworkId.solana,
};

const vaultsContract = {
  name: "Vaults",
  address: "BanxxEcFZPJLKhS59EkwTa8SZez8vDYTiJVN78mGHWDi",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "BanxBXWfsNL1Fg2dwJV6ZJ5qBieYn9pHqb5PAVrwPigN",
  networkId: NetworkId.solana,
};

export const bondsService: ServiceRaw = {
  id: "banx-bonds",
  name: "Bonds",
  platformId: platform.id,
  contractsRaw: [bondsContract],
  link: "https://banx.gg/",
  description:
    "Perpetual loans on NFTs and tokens using a bonds mechanism with no expiration dates and protection against price-based liquidations.",
};

export const vaultsService: ServiceRaw = {
  id: "banx-vaults",
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [vaultsContract],
  description:
    "Lending vaults where users deposit SOL to fund loans and earn yield from interest paid by borrowers.",
};

export const airdropService: ServiceRaw = {
  id: "banx-airdrop",
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  bondsService,
  vaultsService,
  airdropService,
];
