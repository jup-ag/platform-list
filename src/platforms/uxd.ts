import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "uxd",
  name: "UXD",
  description:
    "Decentralized stablecoin stabilized by an asset liability management module",
  defiLlamaId: "uxd",
  isDeprecated: true,
  tags: ["stablecoin"],
  links: {
    website: "https://uxd.fi/",
    discord: "https://discord.gg/CAuFvvd5qw",
    twitter: "https://twitter.com/UXDProtocol",
    github: "https://github.com/uxdprotocol",
    medium: "https://uxdprotocol.medium.com/",
    documentation: "https://docs.uxd.fi/uxdprotocol",
  },
  tokens: [
    "UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M",
    "7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT",
  ],
};

const stakingContract = {
  name: "Staking",
  address: "UXDSkps5NR8Lu1HB5uPLFfuB34hZ6DCk7RhYZZtGzbF",
  networkId: NetworkId.solana,
};

const mainContract = {
  name: "Main",
  address: "UXD8m9cvwk4RcSxnX2HZ9VudQCEeDH6fRnB4CAP57Dr",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services: ServiceRaw[] = [stakingService, mainService];
