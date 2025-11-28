export const contractAddress = "0x3CfC7176Ab2d9317c5C69CF26248348AbAe3a345";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
  {
    inputs: [],
    name: "getRandomEmoji",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
