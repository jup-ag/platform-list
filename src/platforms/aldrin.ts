import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "aldrin",
  name: "Aldrin",
  links: {
    website: "https://x.com/Aldrin_Exchange",
    twitter: "https://x.com/Aldrin_Exchange",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const ammV1Contract = {
  name: "AMM V1",
  address: "AMM55ShdkoGRB5jVYPjWziwk8m5MpwyDgsMWHaMSQWH6",
  networkId: NetworkId.solana,
};

const ammV2Contract = {
  name: "AMM V2",
  address: "CURVGoZn8zycx6FXwwevgBTB2gVvdbGTEpvMJDbgs2t4",
  networkId: NetworkId.solana,
};

const dexContract = {
  name: "DEX",
  address: "BookWizfXJLgda24JdN1drgWzqw3ta3rU1vGotFjpNTH",
  networkId: NetworkId.solana,
};

export const ammV1Service = {
  id: `${platform.id}-amm-v1`,
  name: "AMM V1",
  platformId: platform.id,
  contractsRaw: [ammV1Contract],
};

export const ammV2Service = {
  id: `${platform.id}-amm-v2`,
  name: "AMM V2",
  platformId: platform.id,
  contractsRaw: [ammV2Contract],
};

export const dexService = {
  id: `${platform.id}-dex`,
  name: "DEX",
  platformId: platform.id,
  contractsRaw: [dexContract],
};

export const services = [ammV1Service, ammV2Service, dexService];
