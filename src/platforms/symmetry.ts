import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "symmetry",
  name: "Symmetry",
  description:
    "Symmetry is an on-chain asset management protocol enabling creation and management of token baskets, indices, and actively managed funds.",
  defiLlamaId: "symmetry",
  links: {
    website: "https://www.symmetry.fi/",
    discord: "http://discord.gg/ahdqBRgE7G",
    telegram: "https://t.me/symmetry_fi",
    twitter: "https://x.com/symmetry_fi",
    github: "https://github.com/symmetry-protocol",
    medium: "https://symmetry-fi.medium.com/",
    documentation: "https://docs.symmetry.fi/",
  },
  tags: ["dapp", "defi", "vault"],
};

const v2Contract = {
  name: "Symmetry V2",
  address: "2KehYt3KsEQR53jYcxjbQp2d2kCp4AkuQW68atufRwSr",
  networkId: NetworkId.solana,
};

const v3Contract = {
  name: "Symmetry V3",
  address: "BASKT7aKd8n7ibpUbwLP3Wiyxyi3yoiXsxBk4Hpumate",
  networkId: NetworkId.solana,
};

export const v2Service: ServiceRaw = {
  id: "symmetry-main",
  name: "V2",
  platformId: platform.id,
  contractsRaw: [v2Contract],
};

export const v3Service: ServiceRaw = {
  id: "symmetry-v3",
  name: "V3",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v2Service, v3Service];
