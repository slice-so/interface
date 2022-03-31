/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExampleYielder,
  ExampleYielderInterface,
} from "../ExampleYielder";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposited",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "withdrawAll",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610152806100206000396000f3fe6080604052600436106100495760003560e01c8062f714ce1461004e578063a57497101461006f578063d0e30db01461006d578063eef49ee31461006f578063fa09e63014610091575b600080fd5b34801561005a57600080fd5b5061006d6100693660046100ce565b5050565b005b34801561007b57600080fd5b5060005b60405190815260200160405180910390f35b34801561009d57600080fd5b5061007f6100ac3660046100fa565b50600090565b80356001600160a01b03811681146100c957600080fd5b919050565b600080604083850312156100e157600080fd5b823591506100f1602084016100b2565b90509250929050565b60006020828403121561010c57600080fd5b610115826100b2565b939250505056fea264697066735822122010cd3d3cec921f52b54f654e8b8d7037b944376d06991dd914b6cf7cea5915a264736f6c634300080d0033";

type ExampleYielderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleYielderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleYielder__factory extends ContractFactory {
  constructor(...args: ExampleYielderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExampleYielder";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleYielder> {
    return super.deploy(overrides || {}) as Promise<ExampleYielder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExampleYielder {
    return super.attach(address) as ExampleYielder;
  }
  connect(signer: Signer): ExampleYielder__factory {
    return super.connect(signer) as ExampleYielder__factory;
  }
  static readonly contractName: "ExampleYielder";
  public readonly contractName: "ExampleYielder";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleYielderInterface {
    return new utils.Interface(_abi) as ExampleYielderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleYielder {
    return new Contract(address, _abi, signerOrProvider) as ExampleYielder;
  }
}
