import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "cashmere",
  name: "Cashmere",
  links: {
    website: "https://www.cashmere.finance/",
    twitter: "https://x.com/cashmerewallet",
  },
  tags: ["tool"],
  isDeprecated: true,
};

const multisigContract = {
  name: "Multisig",
  address: "AzHKmHjEoZ7JqiTUPgPVAZgtyNLwa3BTsRgffYxCVDDZ",
  networkId: NetworkId.solana,
};

export const multisigService = {
  id: `${platform.id}-multisig`,
  name: "Multisig",
  platformId: platform.id,
  contractsRaw: [multisigContract],
};

export const services = [multisigService];
