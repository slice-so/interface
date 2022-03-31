/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SlicerPurchasable,
  SlicerPurchasableInterface,
} from "../SlicerPurchasable";

const _abi = [
  {
    inputs: [],
    name: "NotPurchase",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSuccessful",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongSlicer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slicerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "customData",
        type: "bytes",
      },
    ],
    name: "isPurchaseAllowed",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onProductPurchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class SlicerPurchasable__factory {
  static readonly abi = _abi;
  static createInterface(): SlicerPurchasableInterface {
    return new utils.Interface(_abi) as SlicerPurchasableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlicerPurchasable {
    return new Contract(address, _abi, signerOrProvider) as SlicerPurchasable;
  }
}
