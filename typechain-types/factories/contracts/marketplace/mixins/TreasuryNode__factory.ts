/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TreasuryNode,
  TreasuryNodeInterface,
} from "../../../../contracts/marketplace/mixins/TreasuryNode";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "getTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class TreasuryNode__factory {
  static readonly abi = _abi;
  static createInterface(): TreasuryNodeInterface {
    return new utils.Interface(_abi) as TreasuryNodeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryNode {
    return new Contract(address, _abi, signerOrProvider) as TreasuryNode;
  }
}