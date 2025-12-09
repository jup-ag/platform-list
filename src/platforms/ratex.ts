import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "ratex",
  name: "RateX",
  description:
    "RateX Protocol is a decentralized exchange (DEX) specializing in leveraged yield trading.",
  defiLlamaId: "ratex",
  links: {
    website: "https://rate-x.io/",
    discord: "https://discord.com/invite/ratex",
    telegram: "https://t.me/RateXofficial",
    twitter: "https://x.com/RateX_Dex",
    github: "https://github.com/RateX-Protocol",
    documentation: "https://docs.rate-x.io/ratex",
  },
  tags: ["dapp"],
};

// lookupAddressTable Es56bH1dokFwohpWS8XYSfTXavvSEuyob2FnUYzF6pCL
// lookupAddressTable J1NBWaniyDdnnm4dsdTXKmNJog5p4ye1AtVeqkkrUFyM
export const programIds = [
  "RAtEwzA1rerjeWip6uMuheQtzykxYCrEQRaSFCCrf2D",
  "RATEuvat8kBBvomUgsbGDS2EV4KjKCoMKCP3DpxYmF8",
  "RAtEjoYMC6U3fWrbxcuda1N4hcgDbgqQN8MFCsA7ge2",
  "rAtEti4KRfAtVTYhcdYbVznJkbt8yTAXebwHEAr31xr",
  "RAtegmyRsp72GuTVFrg68KC4EryqHYp5tWNdm9qJ3ub",
  "rATeLFtHiGs6Q1rz4VNsp62vc3B8dLsDrNFm2NzKHSR",
  "rAtERVnFCEdaY3BqP7w1wdMJFphHz9m8uTyLjRkw8Fu",
  "ratEH6tibNBomaJtiFtivmPk7pxcPPvRg3mEt8vZiEK",
  "rATEA6NzH5jVXbJkAwPsknuvviVrSnSpARNATkG2ZJ6",
  "raTeSRo3LFRvsrcXFKgu1P8F4DLE39h6b1zeT2HfwAq",
  "RaTEiNdQ31benKiF11k1kzv48EeK69HHNadvQXiFq6Z",
  "raTeSq8Ebeb1JR3xRgSz7i2DP35Fyz5zsszkijgnXKm",
  "RaTeUhvvohYGErSb2Sy3RA5EdMv9A9jtiJe8FHTg7uK",
  "rAtewzmMSgn1QGewCM8PHdoW49bbuzrDQi4ftFoTFWo",
  "ratEoDQr8juEipHZ7kx1Vu7BffJ2t2R27ScJCJHDiSV",
  "RAtELWRTmTxPtDUue6ihnoXRhLzjbFixvJmH9RwymLo",
  "raTeaQusQToYvnH1kU531VJiUnsBjvwF19CUvFW3EAj",
  "RatEdYzPhpaBhUCoaUm7Vcq2PVXyKt1qzPS1VBqYpGz",
  "RatEYEfgg9jtNHS6Szk5FZsJWCtDJufqXQXajzFstrt",
  "RAtERBd1ujYhv3ddY2sYtxvTLggwwQckureGz7XrKYU",
  "rATE72gUT1BBYk5aLujzHumXqnnm9v1BrYngLadL2nw",
  "rAtEFNJKz4T1ccUj7A5PpDgwyBhZbba8wSoFMfAju9J",
  "RATEvhkMJiUPxD4VoPKWutvf87sj1n3rqKWgfQgaBRs",
  "RAte2gSaXmo5YSbpGHDKpK64J7frAmonHBpi4odtyRV",
  "RatEimg3gZ3fkM5ivJ7kBEt2CYCyBe78cZokkbJYWUN",
  "RatE8tuHWtSQSHqk9dtcZKQipUJfZXMvjxqFQuAjMnL",
  "raTeAJ92EGM17TBENyDNvrsjmhhujvaanXCFKuxF494",
  "RatEqyzDoJW8bAk2dBp9rTZCYykhLxt4P7CDxodKK1L",
  "RAtePjCQkLqCECgAWPgGaSje5rnoSbpHXc8HuBBZxaU",
  "rateE3GompDX8X8a6WEqwve7kge6YwCGEhN8krmTFjB",
  "RaTEA6Gx8Yg7hK5N1nNC2zLe8KSm1NMEL3fMqMrDyiX",
  "rateqk9kmMstT8SdVDyiV81Wuv4snjYyBjYoPkGqywK",
  "rAtEXKMmfaKu3c7WyfnwZkpHb5bMbu4uYHhpX2DVUhY",
  "ratEMFkpZf6movMQZPUAvtn72BzhVkABzUr53wQDXbp",
  "rAte14X4CFgBXqPLEhmcLxkXVRoFthL3fcbBHVuvmxo",
  "raTEMK3K8ahgwLuWUHEvp7aJXjVmcbNgj8XmQVMgt5q",
  "RateFzvQT8Dz2HqDHAQj22ujp8B5kaBm2FUUkSoLgZm",
  "raTEkEMFeDsvsELyQ5CMk4dS8Yhh3wyXXRL6QESd7p2",
  "rAtEYiVSYnNEDcwqrFGwCbi7gFDYCssu2vmdozzyv4Q",
];

export const service: ServiceRaw = {
  id: `ratex-main`,
  name: "RateX",
  platformId: "ratex",
  contractsRaw: programIds.map((programId) => ({
    name: "RateX",
    address: programId,
    networkId: NetworkId.solana,
  })),
};

export const services: ServiceRaw[] = [service];
