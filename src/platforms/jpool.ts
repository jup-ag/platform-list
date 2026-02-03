import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
    id: "jpool",
    name: "JPool Solana Staking Pool",
    description:
        "JPool is the most trusted liquid staking platform, built for top yield and offering a range of flexible strategies, as well as handy auxiliary tools.",
    tags: ["lst", "dapp"],
    links: {
        website: "https://jpool.one/",
        discord: "https://discord.com/invite/qR4BA9QXVR",
        twitter: "https://x.com/JPoolSolana",
        github: "https://github.com/mfactory-lab",
        documentation: "https://docs.jpool.one/",
    },
    tokens: ["7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn"],
};

export const nativeStakeService: ServiceRaw = {
    id: `${platform.id}-native-stake`,
    name: "Native Stake",
    platformId: platform.id,
    contractsRaw: [],
    link: "https://app.jpool.one/",
    description:
        "Non-custodial liquid staking protocol that delegates SOL across a curated set of validators using an automated strategy designed to enhance decentralization, optimize performance, and generate sustainable staking rewards.",
};

export const directStakeService: ServiceRaw = {
    id: `${platform.id}-direct-stake`,
    name: "Direct Stake",
    platformId: platform.id,
    contractsRaw: [],
    link: "https://app.jpool.one/direct-staking",
    description:
        "Non-custodial staking service enabling direct delegation to validators or leveraged staking strategies to enhance capital efficiency and potential rewards.",
};

export const validatorsDashboardService: ServiceRaw = {
    id: `${platform.id}-validators-dashboard`,
    name: "Validators Dashboard",
    platformId: platform.id,
    contractsRaw: [],
    link: "https://app.jpool.one/validators",
    description:
        "Comprehensive validator analytics platform offering real-time performance data, stake metrics, and decentralization insights for smarter delegation.",
};

export const services: ServiceRaw[] = [
    nativeStakeService,
    directStakeService,
    validatorsDashboardService
];
export default services;