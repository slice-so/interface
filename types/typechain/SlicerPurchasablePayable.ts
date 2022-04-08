/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SlicerPurchasablePayableInterface extends utils.Interface {
  contractName: "SlicerPurchasablePayable";
  functions: {
    "isPurchaseAllowed(uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "onProductPurchase(bytes)": FunctionFragment;
    "releaseToCollector()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isPurchaseAllowed",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onProductPurchase",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseToCollector",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "isPurchaseAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onProductPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseToCollector",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SlicerPurchasablePayable extends BaseContract {
  contractName: "SlicerPurchasablePayable";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SlicerPurchasablePayableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isPurchaseAllowed(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      customData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onProductPurchase(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releaseToCollector(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  isPurchaseAllowed(
    slicerId: BigNumberish,
    productId: BigNumberish,
    account: string,
    quantity: BigNumberish,
    customData: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onProductPurchase(
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseToCollector(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isPurchaseAllowed(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      customData: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onProductPurchase(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseToCollector(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    isPurchaseAllowed(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      customData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onProductPurchase(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseToCollector(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isPurchaseAllowed(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      customData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onProductPurchase(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseToCollector(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
