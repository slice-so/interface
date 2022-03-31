/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Active14DaysFundingCycleBallot,
  Active14DaysFundingCycleBallotInterface,
} from "../Active14DaysFundingCycleBallot";

const _abi = [
  {
    inputs: [],
    name: "duration",
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
    name: "reconfigurationDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configured",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum BallotState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610158806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806304f49616146100465780630fb5a6b4146100635780634d393dc91461006c575b600080fd5b6100506212750081565b6040519081526020015b60405180910390f35b62127500610050565b61007f61007a3660046100b2565b61008c565b60405161005a91906100d4565b600061009b62127500836100fc565b42116100a85760016100ab565b60005b9392505050565b600080604083850312156100c557600080fd5b50508035926020909101359150565b60208101600483106100f657634e487b7160e01b600052602160045260246000fd5b91905290565b6000821982111561011d57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220a5a0b8ed5b2999bf73f1590c0bec7d8f192bbc0e88a7502429779e097111cdad64736f6c634300080d0033";

type Active14DaysFundingCycleBallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Active14DaysFundingCycleBallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Active14DaysFundingCycleBallot__factory extends ContractFactory {
  constructor(...args: Active14DaysFundingCycleBallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Active14DaysFundingCycleBallot";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Active14DaysFundingCycleBallot> {
    return super.deploy(
      overrides || {}
    ) as Promise<Active14DaysFundingCycleBallot>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Active14DaysFundingCycleBallot {
    return super.attach(address) as Active14DaysFundingCycleBallot;
  }
  connect(signer: Signer): Active14DaysFundingCycleBallot__factory {
    return super.connect(signer) as Active14DaysFundingCycleBallot__factory;
  }
  static readonly contractName: "Active14DaysFundingCycleBallot";
  public readonly contractName: "Active14DaysFundingCycleBallot";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Active14DaysFundingCycleBallotInterface {
    return new utils.Interface(_abi) as Active14DaysFundingCycleBallotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Active14DaysFundingCycleBallot {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Active14DaysFundingCycleBallot;
  }
}
