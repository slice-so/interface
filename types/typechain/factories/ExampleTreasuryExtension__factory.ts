/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExampleTreasuryExtension,
  ExampleTreasuryExtensionInterface,
} from "../ExampleTreasuryExtension";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ETHValue",
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a58061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b37961da14602d575b600080fd5b604560383660046057565b50670de0b6b3a764000090565b60405190815260200160405180910390f35b600060208284031215606857600080fd5b503591905056fea264697066735822122093187a85a52a4f4253e0871b6d14914d552075d522f4cd3b66abf566e89755f664736f6c634300080d0033";

type ExampleTreasuryExtensionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleTreasuryExtensionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleTreasuryExtension__factory extends ContractFactory {
  constructor(...args: ExampleTreasuryExtensionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExampleTreasuryExtension";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleTreasuryExtension> {
    return super.deploy(overrides || {}) as Promise<ExampleTreasuryExtension>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExampleTreasuryExtension {
    return super.attach(address) as ExampleTreasuryExtension;
  }
  connect(signer: Signer): ExampleTreasuryExtension__factory {
    return super.connect(signer) as ExampleTreasuryExtension__factory;
  }
  static readonly contractName: "ExampleTreasuryExtension";
  public readonly contractName: "ExampleTreasuryExtension";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleTreasuryExtensionInterface {
    return new utils.Interface(_abi) as ExampleTreasuryExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleTreasuryExtension {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExampleTreasuryExtension;
  }
}
