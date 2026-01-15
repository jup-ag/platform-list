import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "nodepay",
  name: "Nodepay",
  description:
    "Nodepay is a DePIN network enabling users to earn rewards by sharing unused bandwidth for AI training and data infrastructure.",
  tags: ["tool", "depin", "ai"],
  links: {
    website: "https://nodepay.ai/",
    discord: "https://discord.com/invite/nodepay",
    twitter: "https://x.com/nodepay",
    telegram: "https://t.me/nodepaycommunitychat",
  },
  addedAt: 1761912000000,
  platformToken: "B89Hd5Juz7JP2dxCZXFJWk4tMTcbw7feDhuWGb3kq5qE",
};

const stakingContract = {
  name: "Staking",
  address: "stakevLBn36MxF5qcjXFxChfFDhL9LrLqj4WC3HPpGT",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [service];
