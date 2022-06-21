/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface EvmoswapFactoryInterface extends utils.Interface {
  functions: {
    'INIT_CODE_PAIR_HASH()': FunctionFragment;
    'allPairs(uint256)': FunctionFragment;
    'allPairsLength()': FunctionFragment;
    'createPair(address,address)': FunctionFragment;
    'feeTo()': FunctionFragment;
    'feeToSetter()': FunctionFragment;
    'getPair(address,address)': FunctionFragment;
    'setFeeTo(address)': FunctionFragment;
    'setFeeToSetter(address)': FunctionFragment;
    'setPairFee(address,uint32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'INIT_CODE_PAIR_HASH'
      | 'allPairs'
      | 'allPairsLength'
      | 'createPair'
      | 'feeTo'
      | 'feeToSetter'
      | 'getPair'
      | 'setFeeTo'
      | 'setFeeToSetter'
      | 'setPairFee',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'INIT_CODE_PAIR_HASH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allPairs', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'allPairsLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'createPair', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'feeTo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'feeToSetter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPair', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'setFeeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'setFeeToSetter', values: [string]): string;
  encodeFunctionData(functionFragment: 'setPairFee', values: [string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'INIT_CODE_PAIR_HASH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allPairs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allPairsLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeToSetter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeToSetter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPairFee', data: BytesLike): Result;

  events: {
    'PairCreated(address,address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'PairCreated'): EventFragment;
}

export interface PairCreatedEventObject {
  token0: string;
  token1: string;
  pair: string;
  arg3: BigNumber;
}
export type PairCreatedEvent = TypedEvent<[string, string, string, BigNumber], PairCreatedEventObject>;

export type PairCreatedEventFilter = TypedEventFilter<PairCreatedEvent>;

export interface EvmoswapFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EvmoswapFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<[string]>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    feeToSetter(overrides?: CallOverrides): Promise<[string]>;

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;

    setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPairFee(
      _pair: string,
      _pairFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<string>;

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

  createPair(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  feeToSetter(overrides?: CallOverrides): Promise<string>;

  getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;

  setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setFeeToSetter(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPairFee(
    _pair: string,
    _pairFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<string>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    feeToSetter(overrides?: CallOverrides): Promise<string>;

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    setFeeToSetter(_feeToSetter: string, overrides?: CallOverrides): Promise<void>;

    setPairFee(_pair: string, _pairFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'PairCreated(address,address,address,uint256)'(
      token0?: string | null,
      token1?: string | null,
      pair?: null,
      arg3?: null,
    ): PairCreatedEventFilter;
    PairCreated(token0?: string | null, token1?: string | null, pair?: null, arg3?: null): PairCreatedEventFilter;
  };

  estimateGas: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setPairFee(
      _pair: string,
      _pairFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPairFee(
      _pair: string,
      _pairFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}