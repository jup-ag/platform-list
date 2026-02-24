import { PlatformRaw, ServiceRaw, NetworkId } from "../types";

export const platform: PlatformRaw = {
  id: "arcium",
  name: "Arcium",
  description:
    "Arcium is building the encrypted execution engine enabling compute over fully encrypted data at Solana speed and scale.",
  links: {
    website: "https://arcium.com/",
    discord: "https://discord.gg/arcium",
    twitter: "https://x.com/arcium",
    github: "https://github.com/arcium-hq",
    documentation: "https://docs.arcium.com/",
  },
  tags: ["tool", "infrastructure", "privacy"],
  addedAt: 1739750400000,
};

const mxeContract = {
  name: "MXE",
  address: "Arcj82pX7HxYKLR92qvgZUAd7vGS1k4hQvAFcPATFdEQ",
  networkId: NetworkId.solana,
};

export const mxeService: ServiceRaw = {
  id: `${platform.id}-mxe`,
  name: "MXE",
  platformId: platform.id,
  contractsRaw: [mxeContract],
};

export const services: ServiceRaw[] = [mxeService];
export default services;
