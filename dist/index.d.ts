import * as WasmV4 from '@emurgo/csl-mobile-bridge';
import * as WasmContract from '@emurgo/cross-csl-core';
export declare const init: (ctx: string) => WasmContract.WasmModuleProxy;
export declare class MobileWasmModuleProxy
  implements WasmContract.WasmModuleProxy
{
  private _ctx;
  encryptWithPassword(
    password: string,
    salt: string,
    nonce: string,
    data: string
  ): Promise<string>;
  decryptWithPassword(password: string, salt: string): Promise<string>;
  encodeJsonStrToMetadatum(
    json: string,
    schema: number
  ): Promise<{
    toBytes(): Promise<Uint8Array>;
    kind(): Promise<number>;
    asMap(): Promise<WasmContract.MetadataMap>;
    asList(): Promise<WasmContract.MetadataList>;
    asInt(): Promise<WasmContract.Int>;
    asBytes(): Promise<Uint8Array>;
    asText(): Promise<string>;
    free(): Promise<void>;
    _wasm: WasmV4.TransactionMetadatum;
    readonly internalWasm: WasmV4.TransactionMetadatum;
    readonly wasm: WasmV4.TransactionMetadatum;
    hasValue(): boolean;
  }>;
  minAdaRequired(
    value: WasmContract.Value,
    hasDataHash: boolean,
    coinsPerUtxoWord: WasmContract.BigNum
  ): Promise<{
    toBytes(): Promise<Uint8Array>;
    toStr(): Promise<string>;
    checkedMul(other: any): Promise<any>;
    checkedAdd(other: any): Promise<any>;
    checkedSub(other: any): Promise<any>;
    clampedSub(other: any): Promise<any>;
    compare(rhs_value: any): Promise<number>;
    free(): Promise<void>;
    _wasm: WasmV4.BigNum;
    readonly internalWasm: WasmV4.BigNum;
    readonly wasm: WasmV4.BigNum;
    hasValue(): boolean;
  }>;
  minAdaForOutput(
    output: WasmContract.TransactionOutput,
    dataCost: WasmContract.DataCost
  ): Promise<{
    toBytes(): Promise<Uint8Array>;
    toStr(): Promise<string>;
    checkedMul(other: any): Promise<any>;
    checkedAdd(other: any): Promise<any>;
    checkedSub(other: any): Promise<any>;
    clampedSub(other: any): Promise<any>;
    compare(rhs_value: any): Promise<number>;
    free(): Promise<void>;
    _wasm: WasmV4.BigNum;
    readonly internalWasm: WasmV4.BigNum;
    readonly wasm: WasmV4.BigNum;
    hasValue(): boolean;
  }>;
  hashTransaction(txBody: WasmContract.TransactionBody): Promise<{
    toBytes(): Promise<Uint8Array>;
    toHex(): Promise<string>;
    free(): Promise<void>;
    _wasm: WasmV4.TransactionHash;
    readonly internalWasm: WasmV4.TransactionHash;
    readonly wasm: WasmV4.TransactionHash;
    hasValue(): boolean;
  }>;
  hashPlutusData(
    plutusData: WasmContract.PlutusData
  ): Promise<WasmContract.DataHash>;
  hashScriptData(
    redeemers: WasmContract.Redeemers,
    costModels: WasmContract.Costmdls,
    datums?: WasmContract.PlutusList
  ): Promise<WasmContract.ScriptDataHash>;
  makeVkeyWitness(
    txBodyHash: WasmContract.TransactionHash,
    sk: WasmContract.PrivateKey
  ): Promise<{
    toBytes(): Promise<Uint8Array>;
    signature(): Promise<WasmContract.Ed25519Signature>;
    free(): Promise<void>;
    _wasm: WasmV4.Vkeywitness;
    readonly internalWasm: WasmV4.Vkeywitness;
    readonly wasm: WasmV4.Vkeywitness;
    hasValue(): boolean;
  }>;
  makeIcarusBootstrapWitness(
    txBodyHash: WasmContract.TransactionHash,
    addr: WasmContract.ByronAddress,
    key: WasmContract.Bip32PrivateKey
  ): Promise<{
    toBytes(): Promise<Uint8Array>;
    free(): Promise<void>;
    _wasm: WasmV4.BootstrapWitness;
    readonly internalWasm: WasmV4.BootstrapWitness;
    readonly wasm: WasmV4.BootstrapWitness;
    hasValue(): boolean;
  }>;
  decodeMetadatumToJsonStr(
    metadatum: WasmContract.TransactionMetadatum,
    schema: number
  ): Promise<string>;
  encodeJsonStrToPlutusDatum(
    json: string,
    schema: WasmContract.PlutusDatumSchema
  ): Promise<WasmContract.PlutusData | undefined>;
  constructor(ctx: string);
  BigNum: {
    new (wasm: WasmV4.BigNum, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toStr(): Promise<string>;
      checkedMul(other: any): Promise<any>;
      checkedAdd(other: any): Promise<any>;
      checkedSub(other: any): Promise<any>;
      clampedSub(other: any): Promise<any>;
      compare(rhs_value: any): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.BigNum;
      readonly internalWasm: WasmV4.BigNum;
      readonly wasm: WasmV4.BigNum;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toStr(): Promise<string>;
      checkedMul(other: any): Promise<any>;
      checkedAdd(other: any): Promise<any>;
      checkedSub(other: any): Promise<any>;
      clampedSub(other: any): Promise<any>;
      compare(rhs_value: any): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.BigNum;
      readonly internalWasm: WasmV4.BigNum;
      readonly wasm: WasmV4.BigNum;
      hasValue(): boolean;
    }>;
    fromStr(string: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toStr(): Promise<string>;
      checkedMul(other: any): Promise<any>;
      checkedAdd(other: any): Promise<any>;
      checkedSub(other: any): Promise<any>;
      clampedSub(other: any): Promise<any>;
      compare(rhs_value: any): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.BigNum;
      readonly internalWasm: WasmV4.BigNum;
      readonly wasm: WasmV4.BigNum;
      hasValue(): boolean;
    }>;
  };
  LinearFee: {
    new (wasm: WasmV4.LinearFee, ctx: string): {
      constant(): Promise<WasmContract.BigNum>;
      coefficient(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.LinearFee;
      readonly internalWasm: WasmV4.LinearFee;
      readonly wasm: WasmV4.LinearFee;
      hasValue(): boolean;
    };
    new (
      coefficient: WasmContract.BigNum,
      constant: WasmContract.BigNum
    ): Promise<{
      constant(): Promise<WasmContract.BigNum>;
      coefficient(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.LinearFee;
      readonly internalWasm: WasmV4.LinearFee;
      readonly wasm: WasmV4.LinearFee;
      hasValue(): boolean;
    }>;
  };
  GeneralTransactionMetadata: {
    new (wasm: WasmV4.GeneralTransactionMetadata, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.BigNum,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum>;
      get(key: WasmContract.BigNum): Promise<WasmContract.TransactionMetadatum>;
      keys(): Promise<WasmContract.TransactionMetadatumLabels>;
      free(): Promise<void>;
      _wasm: WasmV4.GeneralTransactionMetadata;
      readonly internalWasm: WasmV4.GeneralTransactionMetadata;
      readonly wasm: WasmV4.GeneralTransactionMetadata;
      hasValue(): boolean;
    };
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.BigNum,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum>;
      get(key: WasmContract.BigNum): Promise<WasmContract.TransactionMetadatum>;
      keys(): Promise<WasmContract.TransactionMetadatumLabels>;
      free(): Promise<void>;
      _wasm: WasmV4.GeneralTransactionMetadata;
      readonly internalWasm: WasmV4.GeneralTransactionMetadata;
      readonly wasm: WasmV4.GeneralTransactionMetadata;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.BigNum,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum>;
      get(key: WasmContract.BigNum): Promise<WasmContract.TransactionMetadatum>;
      keys(): Promise<WasmContract.TransactionMetadatumLabels>;
      free(): Promise<void>;
      _wasm: WasmV4.GeneralTransactionMetadata;
      readonly internalWasm: WasmV4.GeneralTransactionMetadata;
      readonly wasm: WasmV4.GeneralTransactionMetadata;
      hasValue(): boolean;
    }>;
  };
  TransactionMetadatumLabels: {
    new (wasm: WasmV4.TransactionMetadatumLabels, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.BigNum>;
      add(elem: WasmContract.BigNum): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatumLabels;
      readonly internalWasm: WasmV4.TransactionMetadatumLabels;
      readonly wasm: WasmV4.TransactionMetadatumLabels;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.BigNum>;
      add(elem: WasmContract.BigNum): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatumLabels;
      readonly internalWasm: WasmV4.TransactionMetadatumLabels;
      readonly wasm: WasmV4.TransactionMetadatumLabels;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.BigNum>;
      add(elem: WasmContract.BigNum): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatumLabels;
      readonly internalWasm: WasmV4.TransactionMetadatumLabels;
      readonly wasm: WasmV4.TransactionMetadatumLabels;
      hasValue(): boolean;
    }>;
  };
  MetadataMap: {
    new (wasm: WasmV4.MetadataMap, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.TransactionMetadatum,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      insertStr(
        key: string,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      insertI32(
        key: number,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      get(
        key: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum>;
      getStr(key: string): Promise<WasmContract.TransactionMetadatum>;
      getI32(key: number): Promise<WasmContract.TransactionMetadatum>;
      has(key: WasmContract.TransactionMetadatum): Promise<boolean>;
      keys(): Promise<WasmContract.MetadataList>;
      free(): Promise<void>;
      _wasm: WasmV4.MetadataMap;
      readonly internalWasm: WasmV4.MetadataMap;
      readonly wasm: WasmV4.MetadataMap;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.TransactionMetadatum,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      insertStr(
        key: string,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      insertI32(
        key: number,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      get(
        key: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum>;
      getStr(key: string): Promise<WasmContract.TransactionMetadatum>;
      getI32(key: number): Promise<WasmContract.TransactionMetadatum>;
      has(key: WasmContract.TransactionMetadatum): Promise<boolean>;
      keys(): Promise<WasmContract.MetadataList>;
      free(): Promise<void>;
      _wasm: WasmV4.MetadataMap;
      readonly internalWasm: WasmV4.MetadataMap;
      readonly wasm: WasmV4.MetadataMap;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.TransactionMetadatum,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      insertStr(
        key: string,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      insertI32(
        key: number,
        value: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum | undefined>;
      get(
        key: WasmContract.TransactionMetadatum
      ): Promise<WasmContract.TransactionMetadatum>;
      getStr(key: string): Promise<WasmContract.TransactionMetadatum>;
      getI32(key: number): Promise<WasmContract.TransactionMetadatum>;
      has(key: WasmContract.TransactionMetadatum): Promise<boolean>;
      keys(): Promise<WasmContract.MetadataList>;
      free(): Promise<void>;
      _wasm: WasmV4.MetadataMap;
      readonly internalWasm: WasmV4.MetadataMap;
      readonly wasm: WasmV4.MetadataMap;
      hasValue(): boolean;
    }>;
  };
  Int: {
    new (wasm: WasmV4.Int, ctx: string): {
      isPositive(): Promise<boolean>;
      asPositive(): Promise<WasmContract.BigNum | undefined>;
      asNegative(): Promise<WasmContract.BigNum | undefined>;
      asI32(): Promise<number | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.Int;
      readonly internalWasm: WasmV4.Int;
      readonly wasm: WasmV4.Int;
      hasValue(): boolean;
    };
    new (x: WasmContract.BigNum): Promise<{
      isPositive(): Promise<boolean>;
      asPositive(): Promise<WasmContract.BigNum | undefined>;
      asNegative(): Promise<WasmContract.BigNum | undefined>;
      asI32(): Promise<number | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.Int;
      readonly internalWasm: WasmV4.Int;
      readonly wasm: WasmV4.Int;
      hasValue(): boolean;
    }>;
    newNegative(x: WasmContract.BigNum): Promise<{
      isPositive(): Promise<boolean>;
      asPositive(): Promise<WasmContract.BigNum | undefined>;
      asNegative(): Promise<WasmContract.BigNum | undefined>;
      asI32(): Promise<number | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.Int;
      readonly internalWasm: WasmV4.Int;
      readonly wasm: WasmV4.Int;
      hasValue(): boolean;
    }>;
    newI32(x: number): Promise<{
      isPositive(): Promise<boolean>;
      asPositive(): Promise<WasmContract.BigNum | undefined>;
      asNegative(): Promise<WasmContract.BigNum | undefined>;
      asI32(): Promise<number | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.Int;
      readonly internalWasm: WasmV4.Int;
      readonly wasm: WasmV4.Int;
      hasValue(): boolean;
    }>;
  };
  TransactionMetadatum: {
    new (wasm: WasmV4.TransactionMetadatum, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    }>;
    newMap(map: WasmContract.MetadataMap): Promise<{
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    }>;
    newList(list: WasmContract.MetadataList): Promise<{
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    }>;
    newInt(int: WasmContract.Int): Promise<{
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    }>;
    newBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    }>;
    newText(text: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      kind(): Promise<number>;
      asMap(): Promise<WasmContract.MetadataMap>;
      asList(): Promise<WasmContract.MetadataList>;
      asInt(): Promise<WasmContract.Int>;
      asBytes(): Promise<Uint8Array>;
      asText(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionMetadatum;
      readonly internalWasm: WasmV4.TransactionMetadatum;
      readonly wasm: WasmV4.TransactionMetadatum;
      hasValue(): boolean;
    }>;
  };
  AuxiliaryData: {
    new (wasm: WasmV4.AuxiliaryData, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      metadata(): Promise<WasmContract.GeneralTransactionMetadata>;
      setMetadata(
        metadata: WasmContract.GeneralTransactionMetadata
      ): Promise<void>;
      nativeScripts(): Promise<WasmContract.NativeScripts | undefined>;
      setNativeScripts(
        native_scripts: WasmContract.NativeScripts
      ): Promise<void>;
      plutusScripts(): Promise<WasmContract.PlutusScripts | undefined>;
      setPlutusScripts(
        plutus_scripts: WasmContract.PlutusScripts
      ): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.AuxiliaryData;
      readonly internalWasm: WasmV4.AuxiliaryData;
      readonly wasm: WasmV4.AuxiliaryData;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      metadata(): Promise<WasmContract.GeneralTransactionMetadata>;
      setMetadata(
        metadata: WasmContract.GeneralTransactionMetadata
      ): Promise<void>;
      nativeScripts(): Promise<WasmContract.NativeScripts | undefined>;
      setNativeScripts(
        native_scripts: WasmContract.NativeScripts
      ): Promise<void>;
      plutusScripts(): Promise<WasmContract.PlutusScripts | undefined>;
      setPlutusScripts(
        plutus_scripts: WasmContract.PlutusScripts
      ): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.AuxiliaryData;
      readonly internalWasm: WasmV4.AuxiliaryData;
      readonly wasm: WasmV4.AuxiliaryData;
      hasValue(): boolean;
    }>;
    new (metadata: WasmContract.GeneralTransactionMetadata): Promise<{
      toBytes(): Promise<Uint8Array>;
      metadata(): Promise<WasmContract.GeneralTransactionMetadata>;
      setMetadata(
        metadata: WasmContract.GeneralTransactionMetadata
      ): Promise<void>;
      nativeScripts(): Promise<WasmContract.NativeScripts | undefined>;
      setNativeScripts(
        native_scripts: WasmContract.NativeScripts
      ): Promise<void>;
      plutusScripts(): Promise<WasmContract.PlutusScripts | undefined>;
      setPlutusScripts(
        plutus_scripts: WasmContract.PlutusScripts
      ): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.AuxiliaryData;
      readonly internalWasm: WasmV4.AuxiliaryData;
      readonly wasm: WasmV4.AuxiliaryData;
      hasValue(): boolean;
    }>;
    empty(): Promise<{
      toBytes(): Promise<Uint8Array>;
      metadata(): Promise<WasmContract.GeneralTransactionMetadata>;
      setMetadata(
        metadata: WasmContract.GeneralTransactionMetadata
      ): Promise<void>;
      nativeScripts(): Promise<WasmContract.NativeScripts | undefined>;
      setNativeScripts(
        native_scripts: WasmContract.NativeScripts
      ): Promise<void>;
      plutusScripts(): Promise<WasmContract.PlutusScripts | undefined>;
      setPlutusScripts(
        plutus_scripts: WasmContract.PlutusScripts
      ): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.AuxiliaryData;
      readonly internalWasm: WasmV4.AuxiliaryData;
      readonly wasm: WasmV4.AuxiliaryData;
      hasValue(): boolean;
    }>;
  };
  AssetName: {
    new (wasm: WasmV4.AssetName, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      name(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.AssetName;
      readonly internalWasm: WasmV4.AssetName;
      readonly wasm: WasmV4.AssetName;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      name(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.AssetName;
      readonly internalWasm: WasmV4.AssetName;
      readonly wasm: WasmV4.AssetName;
      hasValue(): boolean;
    }>;
    new (name: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      name(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.AssetName;
      readonly internalWasm: WasmV4.AssetName;
      readonly wasm: WasmV4.AssetName;
      hasValue(): boolean;
    }>;
  };
  AssetNames: {
    new (wasm: WasmV4.AssetNames, ctx: string): {
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.AssetName>;
      add(item: WasmContract.AssetName): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.AssetNames;
      readonly internalWasm: WasmV4.AssetNames;
      readonly wasm: WasmV4.AssetNames;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.AssetName>;
      add(item: WasmContract.AssetName): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.AssetNames;
      readonly internalWasm: WasmV4.AssetNames;
      readonly wasm: WasmV4.AssetNames;
      hasValue(): boolean;
    }>;
  };
  Assets: {
    new (wasm: WasmV4.Assets, ctx: string): {
      len(): Promise<number>;
      insert(
        key: WasmContract.AssetName,
        value: WasmContract.BigNum
      ): Promise<WasmContract.BigNum>;
      get(key: WasmContract.AssetName): Promise<WasmContract.BigNum>;
      keys(): Promise<WasmContract.AssetNames>;
      free(): Promise<void>;
      _wasm: WasmV4.Assets;
      readonly internalWasm: WasmV4.Assets;
      readonly wasm: WasmV4.Assets;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      insert(
        key: WasmContract.AssetName,
        value: WasmContract.BigNum
      ): Promise<WasmContract.BigNum>;
      get(key: WasmContract.AssetName): Promise<WasmContract.BigNum>;
      keys(): Promise<WasmContract.AssetNames>;
      free(): Promise<void>;
      _wasm: WasmV4.Assets;
      readonly internalWasm: WasmV4.Assets;
      readonly wasm: WasmV4.Assets;
      hasValue(): boolean;
    }>;
  };
  ScriptHash: {
    new (wasm: WasmV4.ScriptHash, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      _wasm: WasmV4.ScriptHash;
      readonly internalWasm: WasmV4.ScriptHash;
      readonly wasm: WasmV4.ScriptHash;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      _wasm: WasmV4.ScriptHash;
      readonly internalWasm: WasmV4.ScriptHash;
      readonly wasm: WasmV4.ScriptHash;
      hasValue(): boolean;
    }>;
  };
  ScriptHashes: {
    new (wasm: WasmV4.ScriptHashes, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.ScriptHash>;
      add(item: WasmContract.ScriptHash): Promise<void>;
      _wasm: WasmV4.ScriptHashes;
      readonly internalWasm: WasmV4.ScriptHashes;
      readonly wasm: WasmV4.ScriptHashes;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.ScriptHash>;
      add(item: WasmContract.ScriptHash): Promise<void>;
      _wasm: WasmV4.ScriptHashes;
      readonly internalWasm: WasmV4.ScriptHashes;
      readonly wasm: WasmV4.ScriptHashes;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.ScriptHash>;
      add(item: WasmContract.ScriptHash): Promise<void>;
      _wasm: WasmV4.ScriptHashes;
      readonly internalWasm: WasmV4.ScriptHashes;
      readonly wasm: WasmV4.ScriptHashes;
      hasValue(): boolean;
    }>;
  };
  MultiAsset: {
    new (wasm: WasmV4.MultiAsset, ctx: string): {
      len(): Promise<number>;
      insert(
        key: WasmContract.ScriptHash,
        value: WasmContract.Assets
      ): Promise<WasmContract.Assets>;
      get(key: WasmContract.ScriptHash): Promise<WasmContract.Assets>;
      keys(): Promise<WasmContract.ScriptHashes>;
      sub(rhs: any): Promise<any>;
      free(): Promise<void>;
      _wasm: WasmV4.MultiAsset;
      readonly internalWasm: WasmV4.MultiAsset;
      readonly wasm: WasmV4.MultiAsset;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      insert(
        key: WasmContract.ScriptHash,
        value: WasmContract.Assets
      ): Promise<WasmContract.Assets>;
      get(key: WasmContract.ScriptHash): Promise<WasmContract.Assets>;
      keys(): Promise<WasmContract.ScriptHashes>;
      sub(rhs: any): Promise<any>;
      free(): Promise<void>;
      _wasm: WasmV4.MultiAsset;
      readonly internalWasm: WasmV4.MultiAsset;
      readonly wasm: WasmV4.MultiAsset;
      hasValue(): boolean;
    }>;
  };
  Ed25519KeyHash: {
    new (wasm: WasmV4.Ed25519KeyHash, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHash;
      readonly internalWasm: WasmV4.Ed25519KeyHash;
      readonly wasm: WasmV4.Ed25519KeyHash;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHash;
      readonly internalWasm: WasmV4.Ed25519KeyHash;
      readonly wasm: WasmV4.Ed25519KeyHash;
      hasValue(): boolean;
    }>;
  };
  TransactionHash: {
    new (wasm: WasmV4.TransactionHash, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionHash;
      readonly internalWasm: WasmV4.TransactionHash;
      readonly wasm: WasmV4.TransactionHash;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionHash;
      readonly internalWasm: WasmV4.TransactionHash;
      readonly wasm: WasmV4.TransactionHash;
      hasValue(): boolean;
    }>;
  };
  TransactionInput: {
    new (wasm: WasmV4.TransactionInput, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      transactionId(): Promise<WasmContract.TransactionHash>;
      index(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionInput;
      readonly internalWasm: WasmV4.TransactionInput;
      readonly wasm: WasmV4.TransactionInput;
      hasValue(): boolean;
    };
    new (transactionId: WasmContract.TransactionHash, index: number): Promise<{
      toBytes(): Promise<Uint8Array>;
      transactionId(): Promise<WasmContract.TransactionHash>;
      index(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionInput;
      readonly internalWasm: WasmV4.TransactionInput;
      readonly wasm: WasmV4.TransactionInput;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      transactionId(): Promise<WasmContract.TransactionHash>;
      index(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionInput;
      readonly internalWasm: WasmV4.TransactionInput;
      readonly wasm: WasmV4.TransactionInput;
      hasValue(): boolean;
    }>;
  };
  Value: {
    new (wasm: WasmV4.Value, ctx: string): {
      coin(): Promise<WasmContract.BigNum>;
      setCoin(coin: WasmContract.BigNum): Promise<void>;
      multiasset(): Promise<WasmContract.MultiAsset>;
      setMultiasset(multiasset: WasmContract.MultiAsset): Promise<void>;
      checkedAdd(rhs: any): Promise<any>;
      checkedSub(rhs: any): Promise<any>;
      clampedSub(rhs: any): Promise<any>;
      compare(rhs: any): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Value;
      readonly internalWasm: WasmV4.Value;
      readonly wasm: WasmV4.Value;
      hasValue(): boolean;
    };
    new (coin: WasmContract.BigNum): Promise<{
      coin(): Promise<WasmContract.BigNum>;
      setCoin(coin: WasmContract.BigNum): Promise<void>;
      multiasset(): Promise<WasmContract.MultiAsset>;
      setMultiasset(multiasset: WasmContract.MultiAsset): Promise<void>;
      checkedAdd(rhs: any): Promise<any>;
      checkedSub(rhs: any): Promise<any>;
      clampedSub(rhs: any): Promise<any>;
      compare(rhs: any): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Value;
      readonly internalWasm: WasmV4.Value;
      readonly wasm: WasmV4.Value;
      hasValue(): boolean;
    }>;
  };
  Address: {
    new (wasm: WasmV4.Address, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toBech32(prefix?: string): Promise<string>;
      networkId(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Address;
      readonly internalWasm: WasmV4.Address;
      readonly wasm: WasmV4.Address;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toBech32(prefix?: string): Promise<string>;
      networkId(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Address;
      readonly internalWasm: WasmV4.Address;
      readonly wasm: WasmV4.Address;
      hasValue(): boolean;
    }>;
    fromBech32(string: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toBech32(prefix?: string): Promise<string>;
      networkId(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Address;
      readonly internalWasm: WasmV4.Address;
      readonly wasm: WasmV4.Address;
      hasValue(): boolean;
    }>;
  };
  PublicKey: {
    new (wasm: WasmV4.PublicKey, ctx: string): {
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      hash(): Promise<WasmContract.Ed25519KeyHash>;
      free(): Promise<void>;
      _wasm: WasmV4.PublicKey;
      readonly internalWasm: WasmV4.PublicKey;
      readonly wasm: WasmV4.PublicKey;
      hasValue(): boolean;
    };
    fromBech32(bech32_str: string): Promise<{
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      hash(): Promise<WasmContract.Ed25519KeyHash>;
      free(): Promise<void>;
      _wasm: WasmV4.PublicKey;
      readonly internalWasm: WasmV4.PublicKey;
      readonly wasm: WasmV4.PublicKey;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      hash(): Promise<WasmContract.Ed25519KeyHash>;
      free(): Promise<void>;
      _wasm: WasmV4.PublicKey;
      readonly internalWasm: WasmV4.PublicKey;
      readonly wasm: WasmV4.PublicKey;
      hasValue(): boolean;
    }>;
  };
  Bip32PublicKey: {
    new (wasm: WasmV4.Bip32PublicKey, ctx: string): {
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      chaincode(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PublicKey;
      readonly internalWasm: WasmV4.Bip32PublicKey;
      readonly wasm: WasmV4.Bip32PublicKey;
      hasValue(): boolean;
    };
    fromBech32(bech32_str: string): Promise<{
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      chaincode(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PublicKey;
      readonly internalWasm: WasmV4.Bip32PublicKey;
      readonly wasm: WasmV4.Bip32PublicKey;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      chaincode(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PublicKey;
      readonly internalWasm: WasmV4.Bip32PublicKey;
      readonly wasm: WasmV4.Bip32PublicKey;
      hasValue(): boolean;
    }>;
  };
  PrivateKey: {
    new (wasm: WasmV4.PrivateKey, ctx: string): {
      toPublic(): Promise<WasmContract.PublicKey>;
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      sign(message: Uint8Array): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.PrivateKey;
      readonly internalWasm: WasmV4.PrivateKey;
      readonly wasm: WasmV4.PrivateKey;
      hasValue(): boolean;
    };
    fromExtendedBytes(bytes: Uint8Array): Promise<{
      toPublic(): Promise<WasmContract.PublicKey>;
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      sign(message: Uint8Array): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.PrivateKey;
      readonly internalWasm: WasmV4.PrivateKey;
      readonly wasm: WasmV4.PrivateKey;
      hasValue(): boolean;
    }>;
    fromNormalBytes(bytes: Uint8Array): Promise<{
      toPublic(): Promise<WasmContract.PublicKey>;
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      sign(message: Uint8Array): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.PrivateKey;
      readonly internalWasm: WasmV4.PrivateKey;
      readonly wasm: WasmV4.PrivateKey;
      hasValue(): boolean;
    }>;
    generateEd25519(): Promise<{
      toPublic(): Promise<WasmContract.PublicKey>;
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      sign(message: Uint8Array): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.PrivateKey;
      readonly internalWasm: WasmV4.PrivateKey;
      readonly wasm: WasmV4.PrivateKey;
      hasValue(): boolean;
    }>;
    generateEd25519extended(): Promise<{
      toPublic(): Promise<WasmContract.PublicKey>;
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      sign(message: Uint8Array): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.PrivateKey;
      readonly internalWasm: WasmV4.PrivateKey;
      readonly wasm: WasmV4.PrivateKey;
      hasValue(): boolean;
    }>;
    fromBech32(bech32Str: string): Promise<{
      toPublic(): Promise<WasmContract.PublicKey>;
      toBech32(): Promise<string>;
      asBytes(): Promise<Uint8Array>;
      sign(message: Uint8Array): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.PrivateKey;
      readonly internalWasm: WasmV4.PrivateKey;
      readonly wasm: WasmV4.PrivateKey;
      hasValue(): boolean;
    }>;
  };
  Bip32PrivateKey: {
    new (wasm: WasmV4.Bip32PrivateKey, ctx: string): {
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PrivateKey>;
      toPublic(): Promise<WasmContract.Bip32PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PrivateKey;
      readonly internalWasm: WasmV4.Bip32PrivateKey;
      readonly wasm: WasmV4.Bip32PrivateKey;
      hasValue(): boolean;
    };
    fromBip39Entropy(
      entropy: Uint8Array,
      password: Uint8Array
    ): Promise<{
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PrivateKey>;
      toPublic(): Promise<WasmContract.Bip32PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PrivateKey;
      readonly internalWasm: WasmV4.Bip32PrivateKey;
      readonly wasm: WasmV4.Bip32PrivateKey;
      hasValue(): boolean;
    }>;
    fromBech32(bech32Str: string): Promise<{
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PrivateKey>;
      toPublic(): Promise<WasmContract.Bip32PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PrivateKey;
      readonly internalWasm: WasmV4.Bip32PrivateKey;
      readonly wasm: WasmV4.Bip32PrivateKey;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PrivateKey>;
      toPublic(): Promise<WasmContract.Bip32PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PrivateKey;
      readonly internalWasm: WasmV4.Bip32PrivateKey;
      readonly wasm: WasmV4.Bip32PrivateKey;
      hasValue(): boolean;
    }>;
    generateEd25519Bip32(): Promise<{
      derive(index: number): Promise<any>;
      toRawKey(): Promise<WasmContract.PrivateKey>;
      toPublic(): Promise<WasmContract.Bip32PublicKey>;
      asBytes(): Promise<Uint8Array>;
      toBech32(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Bip32PrivateKey;
      readonly internalWasm: WasmV4.Bip32PrivateKey;
      readonly wasm: WasmV4.Bip32PrivateKey;
      hasValue(): boolean;
    }>;
  };
  ByronAddress: {
    new (wasm: WasmV4.ByronAddress, ctx: string): {
      toBase58(): Promise<string>;
      toAddress(): Promise<WasmContract.Address>;
      byronProtocolMagic(): Promise<number>;
      attributes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.ByronAddress;
      readonly internalWasm: WasmV4.ByronAddress;
      readonly wasm: WasmV4.ByronAddress;
      hasValue(): boolean;
    };
    icarusFromKey(
      key: WasmContract.Bip32PublicKey,
      protocolMagic: number
    ): Promise<{
      toBase58(): Promise<string>;
      toAddress(): Promise<WasmContract.Address>;
      byronProtocolMagic(): Promise<number>;
      attributes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.ByronAddress;
      readonly internalWasm: WasmV4.ByronAddress;
      readonly wasm: WasmV4.ByronAddress;
      hasValue(): boolean;
    }>;
    fromBase58(string: string): Promise<{
      toBase58(): Promise<string>;
      toAddress(): Promise<WasmContract.Address>;
      byronProtocolMagic(): Promise<number>;
      attributes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.ByronAddress;
      readonly internalWasm: WasmV4.ByronAddress;
      readonly wasm: WasmV4.ByronAddress;
      hasValue(): boolean;
    }>;
    isValid(string: string): Promise<boolean>;
    fromAddress(addr: WasmContract.Address): Promise<{
      toBase58(): Promise<string>;
      toAddress(): Promise<WasmContract.Address>;
      byronProtocolMagic(): Promise<number>;
      attributes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.ByronAddress;
      readonly internalWasm: WasmV4.ByronAddress;
      readonly wasm: WasmV4.ByronAddress;
      hasValue(): boolean;
    }>;
  };
  TransactionOutput: {
    new (wasm: WasmV4.TransactionOutput, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      address(): Promise<WasmContract.Address>;
      amount(): Promise<WasmContract.Value>;
      hasPlutusData(): Promise<boolean>;
      setPlutusData(plutusData: WasmContract.PlutusData): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusData | undefined>;
      hasDataHash(): Promise<boolean>;
      setDataHash(dataHash: WasmContract.DataHash): Promise<void>;
      dataHash(): Promise<WasmContract.DataHash | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionOutput;
      readonly internalWasm: WasmV4.TransactionOutput;
      readonly wasm: WasmV4.TransactionOutput;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      address(): Promise<WasmContract.Address>;
      amount(): Promise<WasmContract.Value>;
      hasPlutusData(): Promise<boolean>;
      setPlutusData(plutusData: WasmContract.PlutusData): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusData | undefined>;
      hasDataHash(): Promise<boolean>;
      setDataHash(dataHash: WasmContract.DataHash): Promise<void>;
      dataHash(): Promise<WasmContract.DataHash | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionOutput;
      readonly internalWasm: WasmV4.TransactionOutput;
      readonly wasm: WasmV4.TransactionOutput;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      address(): Promise<WasmContract.Address>;
      amount(): Promise<WasmContract.Value>;
      hasPlutusData(): Promise<boolean>;
      setPlutusData(plutusData: WasmContract.PlutusData): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusData | undefined>;
      hasDataHash(): Promise<boolean>;
      setDataHash(dataHash: WasmContract.DataHash): Promise<void>;
      dataHash(): Promise<WasmContract.DataHash | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionOutput;
      readonly internalWasm: WasmV4.TransactionOutput;
      readonly wasm: WasmV4.TransactionOutput;
      hasValue(): boolean;
    }>;
    new (address: WasmContract.Address, amount: WasmContract.Value): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      address(): Promise<WasmContract.Address>;
      amount(): Promise<WasmContract.Value>;
      hasPlutusData(): Promise<boolean>;
      setPlutusData(plutusData: WasmContract.PlutusData): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusData | undefined>;
      hasDataHash(): Promise<boolean>;
      setDataHash(dataHash: WasmContract.DataHash): Promise<void>;
      dataHash(): Promise<WasmContract.DataHash | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionOutput;
      readonly internalWasm: WasmV4.TransactionOutput;
      readonly wasm: WasmV4.TransactionOutput;
      hasValue(): boolean;
    }>;
  };
  DataHash: {
    new (wasm: WasmV4.DataHash, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toBech32(prefix: string): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.DataHash;
      readonly internalWasm: WasmV4.DataHash;
      readonly wasm: WasmV4.DataHash;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toBech32(prefix: string): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.DataHash;
      readonly internalWasm: WasmV4.DataHash;
      readonly wasm: WasmV4.DataHash;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<WasmContract.DataHash>;
    fromBech32(str: string): Promise<WasmContract.DataHash>;
  };
  PlutusData: {
    new (wasm: WasmV4.PlutusData, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusData;
      readonly internalWasm: WasmV4.PlutusData;
      readonly wasm: WasmV4.PlutusData;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusData;
      readonly internalWasm: WasmV4.PlutusData;
      readonly wasm: WasmV4.PlutusData;
      hasValue(): boolean;
    }>;
    fromJson(
      json: string,
      schema: WasmContract.PlutusDatumSchema
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusData;
      readonly internalWasm: WasmV4.PlutusData;
      readonly wasm: WasmV4.PlutusData;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusData;
      readonly internalWasm: WasmV4.PlutusData;
      readonly wasm: WasmV4.PlutusData;
      hasValue(): boolean;
    }>;
  };
  PlutusList: {
    new (wasm: WasmV4.PlutusList, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusData>;
      add(elem: WasmContract.PlutusData): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusList;
      readonly internalWasm: WasmV4.PlutusList;
      readonly wasm: WasmV4.PlutusList;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusData>;
      add(elem: WasmContract.PlutusData): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusList;
      readonly internalWasm: WasmV4.PlutusList;
      readonly wasm: WasmV4.PlutusList;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusData>;
      add(elem: WasmContract.PlutusData): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusList;
      readonly internalWasm: WasmV4.PlutusList;
      readonly wasm: WasmV4.PlutusList;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusData>;
      add(elem: WasmContract.PlutusData): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusList;
      readonly internalWasm: WasmV4.PlutusList;
      readonly wasm: WasmV4.PlutusList;
      hasValue(): boolean;
    }>;
  };
  ExUnits: {
    new (wasm: WasmV4.ExUnits, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      mem(): Promise<WasmContract.BigNum>;
      steps(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnits;
      readonly internalWasm: WasmV4.ExUnits;
      readonly wasm: WasmV4.ExUnits;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      mem(): Promise<WasmContract.BigNum>;
      steps(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnits;
      readonly internalWasm: WasmV4.ExUnits;
      readonly wasm: WasmV4.ExUnits;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      mem(): Promise<WasmContract.BigNum>;
      steps(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnits;
      readonly internalWasm: WasmV4.ExUnits;
      readonly wasm: WasmV4.ExUnits;
      hasValue(): boolean;
    }>;
    new (mem: WasmContract.BigNum, steps: WasmContract.BigNum): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      mem(): Promise<WasmContract.BigNum>;
      steps(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnits;
      readonly internalWasm: WasmV4.ExUnits;
      readonly wasm: WasmV4.ExUnits;
      hasValue(): boolean;
    }>;
  };
  Redeemer: {
    new (wasm: WasmV4.Redeemer, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      tag(): Promise<WasmContract.RedeemerTag>;
      index(): Promise<WasmContract.BigNum>;
      data(): Promise<WasmContract.PlutusData>;
      exUnits(): Promise<WasmContract.ExUnits>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemer;
      readonly internalWasm: WasmV4.Redeemer;
      readonly wasm: WasmV4.Redeemer;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      tag(): Promise<WasmContract.RedeemerTag>;
      index(): Promise<WasmContract.BigNum>;
      data(): Promise<WasmContract.PlutusData>;
      exUnits(): Promise<WasmContract.ExUnits>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemer;
      readonly internalWasm: WasmV4.Redeemer;
      readonly wasm: WasmV4.Redeemer;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      tag(): Promise<WasmContract.RedeemerTag>;
      index(): Promise<WasmContract.BigNum>;
      data(): Promise<WasmContract.PlutusData>;
      exUnits(): Promise<WasmContract.ExUnits>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemer;
      readonly internalWasm: WasmV4.Redeemer;
      readonly wasm: WasmV4.Redeemer;
      hasValue(): boolean;
    }>;
    new (
      tag: WasmContract.RedeemerTag,
      index: WasmContract.BigNum,
      data: WasmContract.PlutusData,
      exUnits: WasmContract.ExUnits
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      tag(): Promise<WasmContract.RedeemerTag>;
      index(): Promise<WasmContract.BigNum>;
      data(): Promise<WasmContract.PlutusData>;
      exUnits(): Promise<WasmContract.ExUnits>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemer;
      readonly internalWasm: WasmV4.Redeemer;
      readonly wasm: WasmV4.Redeemer;
      hasValue(): boolean;
    }>;
  };
  RedeemerTag: {
    new (wasm: WasmV4.RedeemerTag, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.RedeemerTag;
      readonly internalWasm: WasmV4.RedeemerTag;
      readonly wasm: WasmV4.RedeemerTag;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.RedeemerTag;
      readonly internalWasm: WasmV4.RedeemerTag;
      readonly wasm: WasmV4.RedeemerTag;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<WasmContract.RedeemerTag>;
    newSpend(): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.RedeemerTag;
      readonly internalWasm: WasmV4.RedeemerTag;
      readonly wasm: WasmV4.RedeemerTag;
      hasValue(): boolean;
    }>;
    newMint(): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.RedeemerTag;
      readonly internalWasm: WasmV4.RedeemerTag;
      readonly wasm: WasmV4.RedeemerTag;
      hasValue(): boolean;
    }>;
    newCert(): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.RedeemerTag;
      readonly internalWasm: WasmV4.RedeemerTag;
      readonly wasm: WasmV4.RedeemerTag;
      hasValue(): boolean;
    }>;
    newReward(): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.RedeemerTag;
      readonly internalWasm: WasmV4.RedeemerTag;
      readonly wasm: WasmV4.RedeemerTag;
      hasValue(): boolean;
    }>;
  };
  Redeemers: {
    new (wasm: WasmV4.Redeemers, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      totalExUnits(): Promise<WasmContract.ExUnits>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Redeemer>;
      add(elem: WasmContract.Redeemer): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemers;
      readonly internalWasm: WasmV4.Redeemers;
      readonly wasm: WasmV4.Redeemers;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      totalExUnits(): Promise<WasmContract.ExUnits>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Redeemer>;
      add(elem: WasmContract.Redeemer): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemers;
      readonly internalWasm: WasmV4.Redeemers;
      readonly wasm: WasmV4.Redeemers;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      totalExUnits(): Promise<WasmContract.ExUnits>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Redeemer>;
      add(elem: WasmContract.Redeemer): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemers;
      readonly internalWasm: WasmV4.Redeemers;
      readonly wasm: WasmV4.Redeemers;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      totalExUnits(): Promise<WasmContract.ExUnits>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Redeemer>;
      add(elem: WasmContract.Redeemer): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Redeemers;
      readonly internalWasm: WasmV4.Redeemers;
      readonly wasm: WasmV4.Redeemers;
      hasValue(): boolean;
    }>;
  };
  CostModel: {
    new (wasm: WasmV4.CostModel, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      get(operation: number): Promise<WasmContract.Int>;
      set(operation: number, cost: WasmContract.Int): Promise<WasmContract.Int>;
      len(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.CostModel;
      readonly internalWasm: WasmV4.CostModel;
      readonly wasm: WasmV4.CostModel;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      get(operation: number): Promise<WasmContract.Int>;
      set(operation: number, cost: WasmContract.Int): Promise<WasmContract.Int>;
      len(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.CostModel;
      readonly internalWasm: WasmV4.CostModel;
      readonly wasm: WasmV4.CostModel;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<WasmContract.CostModel>;
    new (): Promise<WasmContract.CostModel>;
  };
  Costmdls: {
    new (wasm: WasmV4.Costmdls, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(key: WasmContract.Language): Promise<WasmContract.CostModel>;
      insert(
        key: WasmContract.Language,
        value: WasmContract.CostModel
      ): Promise<WasmContract.CostModel | undefined>;
      keys(): Promise<WasmContract.Languages>;
      retainLanguageVersions(
        languages: WasmContract.Languages
      ): Promise<WasmContract.Costmdls>;
      free(): Promise<void>;
      _wasm: WasmV4.Costmdls;
      readonly internalWasm: WasmV4.Costmdls;
      readonly wasm: WasmV4.Costmdls;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(key: WasmContract.Language): Promise<WasmContract.CostModel>;
      insert(
        key: WasmContract.Language,
        value: WasmContract.CostModel
      ): Promise<WasmContract.CostModel | undefined>;
      keys(): Promise<WasmContract.Languages>;
      retainLanguageVersions(
        languages: WasmContract.Languages
      ): Promise<WasmContract.Costmdls>;
      free(): Promise<void>;
      _wasm: WasmV4.Costmdls;
      readonly internalWasm: WasmV4.Costmdls;
      readonly wasm: WasmV4.Costmdls;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(key: WasmContract.Language): Promise<WasmContract.CostModel>;
      insert(
        key: WasmContract.Language,
        value: WasmContract.CostModel
      ): Promise<WasmContract.CostModel | undefined>;
      keys(): Promise<WasmContract.Languages>;
      retainLanguageVersions(
        languages: WasmContract.Languages
      ): Promise<WasmContract.Costmdls>;
      free(): Promise<void>;
      _wasm: WasmV4.Costmdls;
      readonly internalWasm: WasmV4.Costmdls;
      readonly wasm: WasmV4.Costmdls;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      len(): Promise<number>;
      get(key: WasmContract.Language): Promise<WasmContract.CostModel>;
      insert(
        key: WasmContract.Language,
        value: WasmContract.CostModel
      ): Promise<WasmContract.CostModel | undefined>;
      keys(): Promise<WasmContract.Languages>;
      retainLanguageVersions(
        languages: WasmContract.Languages
      ): Promise<WasmContract.Costmdls>;
      free(): Promise<void>;
      _wasm: WasmV4.Costmdls;
      readonly internalWasm: WasmV4.Costmdls;
      readonly wasm: WasmV4.Costmdls;
      hasValue(): boolean;
    }>;
  };
  Language: {
    new (wasm: WasmV4.Language, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Language;
      readonly internalWasm: WasmV4.Language;
      readonly wasm: WasmV4.Language;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Language;
      readonly internalWasm: WasmV4.Language;
      readonly wasm: WasmV4.Language;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<WasmContract.Language>;
    newPlutusV1(): Promise<WasmContract.Language>;
    newPlutusV2(): Promise<WasmContract.Language>;
  };
  Languages: {
    new (wasm: WasmV4.Languages, ctx: string): {
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Language>;
      add(elem: WasmContract.Language): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Languages;
      readonly internalWasm: WasmV4.Languages;
      readonly wasm: WasmV4.Languages;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Language>;
      add(elem: WasmContract.Language): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Languages;
      readonly internalWasm: WasmV4.Languages;
      readonly wasm: WasmV4.Languages;
      hasValue(): boolean;
    }>;
    list(): Promise<WasmContract.Languages>;
  };
  ScriptDataHash: {
    new (wasm: WasmV4.ScriptDataHash, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toBech32(prefix: string): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.ScriptDataHash;
      readonly internalWasm: WasmV4.ScriptDataHash;
      readonly wasm: WasmV4.ScriptDataHash;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toBech32(prefix: string): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.ScriptDataHash;
      readonly internalWasm: WasmV4.ScriptDataHash;
      readonly wasm: WasmV4.ScriptDataHash;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<WasmContract.ScriptDataHash>;
    fromBech32(str: string): Promise<WasmContract.ScriptDataHash>;
  };
  Credential: {
    new (wasm: WasmV4.StakeCredential, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      toScripthash(): Promise<WasmContract.ScriptHash>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeCredential;
      readonly internalWasm: WasmV4.StakeCredential;
      readonly wasm: WasmV4.StakeCredential;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      toScripthash(): Promise<WasmContract.ScriptHash>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeCredential;
      readonly internalWasm: WasmV4.StakeCredential;
      readonly wasm: WasmV4.StakeCredential;
      hasValue(): boolean;
    }>;
    fromKeyhash(hash: WasmContract.Ed25519KeyHash): Promise<{
      toBytes(): Promise<Uint8Array>;
      toKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      toScripthash(): Promise<WasmContract.ScriptHash>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeCredential;
      readonly internalWasm: WasmV4.StakeCredential;
      readonly wasm: WasmV4.StakeCredential;
      hasValue(): boolean;
    }>;
    fromScripthash(hash: WasmContract.ScriptHash): Promise<{
      toBytes(): Promise<Uint8Array>;
      toKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      toScripthash(): Promise<WasmContract.ScriptHash>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeCredential;
      readonly internalWasm: WasmV4.StakeCredential;
      readonly wasm: WasmV4.StakeCredential;
      hasValue(): boolean;
    }>;
  };
  StakeRegistration: {
    new (wasm: WasmV4.StakeRegistration, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeRegistration;
      readonly internalWasm: WasmV4.StakeRegistration;
      readonly wasm: WasmV4.StakeRegistration;
      hasValue(): boolean;
    };
    new (stakeCredential: WasmContract.Credential): Promise<{
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeRegistration;
      readonly internalWasm: WasmV4.StakeRegistration;
      readonly wasm: WasmV4.StakeRegistration;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeRegistration;
      readonly internalWasm: WasmV4.StakeRegistration;
      readonly wasm: WasmV4.StakeRegistration;
      hasValue(): boolean;
    }>;
  };
  StakeDeregistration: {
    new (wasm: WasmV4.StakeDeregistration, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeDeregistration;
      readonly internalWasm: WasmV4.StakeDeregistration;
      readonly wasm: WasmV4.StakeDeregistration;
      hasValue(): boolean;
    };
    new (stakeCredential: WasmContract.Credential): Promise<{
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeDeregistration;
      readonly internalWasm: WasmV4.StakeDeregistration;
      readonly wasm: WasmV4.StakeDeregistration;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeDeregistration;
      readonly internalWasm: WasmV4.StakeDeregistration;
      readonly wasm: WasmV4.StakeDeregistration;
      hasValue(): boolean;
    }>;
  };
  StakeDelegation: {
    new (wasm: WasmV4.StakeDelegation, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      poolKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeDelegation;
      readonly internalWasm: WasmV4.StakeDelegation;
      readonly wasm: WasmV4.StakeDelegation;
      hasValue(): boolean;
    };
    new (
      stakeCredential: WasmContract.Credential,
      poolKeyHash: WasmContract.Ed25519KeyHash
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      poolKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeDelegation;
      readonly internalWasm: WasmV4.StakeDelegation;
      readonly wasm: WasmV4.StakeDelegation;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      stakeCredential(): Promise<WasmContract.Credential>;
      poolKeyhash(): Promise<WasmContract.Ed25519KeyHash>;
      free(): Promise<void>;
      _wasm: WasmV4.StakeDelegation;
      readonly internalWasm: WasmV4.StakeDelegation;
      readonly wasm: WasmV4.StakeDelegation;
      hasValue(): boolean;
    }>;
  };
  Certificate: {
    new (wasm: WasmV4.Certificate, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      asStakeRegistration(): Promise<WasmContract.StakeRegistration>;
      asStakeDeregistration(): Promise<WasmContract.StakeDeregistration>;
      asStakeDelegation(): Promise<WasmContract.StakeDelegation>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificate;
      readonly internalWasm: WasmV4.Certificate;
      readonly wasm: WasmV4.Certificate;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      asStakeRegistration(): Promise<WasmContract.StakeRegistration>;
      asStakeDeregistration(): Promise<WasmContract.StakeDeregistration>;
      asStakeDelegation(): Promise<WasmContract.StakeDelegation>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificate;
      readonly internalWasm: WasmV4.Certificate;
      readonly wasm: WasmV4.Certificate;
      hasValue(): boolean;
    }>;
    newStakeRegistration(
      stakeRegistration: WasmContract.StakeRegistration
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      asStakeRegistration(): Promise<WasmContract.StakeRegistration>;
      asStakeDeregistration(): Promise<WasmContract.StakeDeregistration>;
      asStakeDelegation(): Promise<WasmContract.StakeDelegation>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificate;
      readonly internalWasm: WasmV4.Certificate;
      readonly wasm: WasmV4.Certificate;
      hasValue(): boolean;
    }>;
    newStakeDeregistration(
      stakeDeregistration: WasmContract.StakeDeregistration
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      asStakeRegistration(): Promise<WasmContract.StakeRegistration>;
      asStakeDeregistration(): Promise<WasmContract.StakeDeregistration>;
      asStakeDelegation(): Promise<WasmContract.StakeDelegation>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificate;
      readonly internalWasm: WasmV4.Certificate;
      readonly wasm: WasmV4.Certificate;
      hasValue(): boolean;
    }>;
    newStakeDelegation(stakeDelegation: WasmContract.StakeDelegation): Promise<{
      toBytes(): Promise<Uint8Array>;
      asStakeRegistration(): Promise<WasmContract.StakeRegistration>;
      asStakeDeregistration(): Promise<WasmContract.StakeDeregistration>;
      asStakeDelegation(): Promise<WasmContract.StakeDelegation>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificate;
      readonly internalWasm: WasmV4.Certificate;
      readonly wasm: WasmV4.Certificate;
      hasValue(): boolean;
    }>;
  };
  Certificates: {
    new (wasm: WasmV4.Certificates, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Certificate>;
      add(item: WasmContract.Certificate): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificates;
      readonly internalWasm: WasmV4.Certificates;
      readonly wasm: WasmV4.Certificates;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Certificate>;
      add(item: WasmContract.Certificate): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificates;
      readonly internalWasm: WasmV4.Certificates;
      readonly wasm: WasmV4.Certificates;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Certificate>;
      add(item: WasmContract.Certificate): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.Certificates;
      readonly internalWasm: WasmV4.Certificates;
      readonly wasm: WasmV4.Certificates;
      hasValue(): boolean;
    }>;
  };
  RewardAddress: {
    new (wasm: WasmV4.RewardAddress, ctx: string): {
      paymentCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.RewardAddress;
      readonly internalWasm: WasmV4.RewardAddress;
      readonly wasm: WasmV4.RewardAddress;
      hasValue(): boolean;
    };
    fromAddress(addr: WasmContract.Address): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.RewardAddress;
      readonly internalWasm: WasmV4.RewardAddress;
      readonly wasm: WasmV4.RewardAddress;
      hasValue(): boolean;
    }>;
    new (network: number, payment: WasmContract.Credential): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.RewardAddress;
      readonly internalWasm: WasmV4.RewardAddress;
      readonly wasm: WasmV4.RewardAddress;
      hasValue(): boolean;
    }>;
  };
  RewardAddresses: {
    new (wasm: WasmV4.RewardAddresses, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.RewardAddress>;
      add(item: WasmContract.RewardAddress): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.RewardAddresses;
      readonly internalWasm: WasmV4.RewardAddresses;
      readonly wasm: WasmV4.RewardAddresses;
      hasValue(): boolean;
    };
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.RewardAddress>;
      add(item: WasmContract.RewardAddress): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.RewardAddresses;
      readonly internalWasm: WasmV4.RewardAddresses;
      readonly wasm: WasmV4.RewardAddresses;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.RewardAddress>;
      add(item: WasmContract.RewardAddress): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.RewardAddresses;
      readonly internalWasm: WasmV4.RewardAddresses;
      readonly wasm: WasmV4.RewardAddresses;
      hasValue(): boolean;
    }>;
  };
  Withdrawals: {
    new (wasm: WasmV4.Withdrawals, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.RewardAddress,
        value: WasmContract.BigNum
      ): Promise<WasmContract.BigNum>;
      get(key: WasmContract.RewardAddress): Promise<WasmContract.BigNum>;
      keys(): Promise<WasmContract.RewardAddresses>;
      free(): Promise<void>;
      _wasm: WasmV4.Withdrawals;
      readonly internalWasm: WasmV4.Withdrawals;
      readonly wasm: WasmV4.Withdrawals;
      hasValue(): boolean;
    };
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.RewardAddress,
        value: WasmContract.BigNum
      ): Promise<WasmContract.BigNum>;
      get(key: WasmContract.RewardAddress): Promise<WasmContract.BigNum>;
      keys(): Promise<WasmContract.RewardAddresses>;
      free(): Promise<void>;
      _wasm: WasmV4.Withdrawals;
      readonly internalWasm: WasmV4.Withdrawals;
      readonly wasm: WasmV4.Withdrawals;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      insert(
        key: WasmContract.RewardAddress,
        value: WasmContract.BigNum
      ): Promise<WasmContract.BigNum>;
      get(key: WasmContract.RewardAddress): Promise<WasmContract.BigNum>;
      keys(): Promise<WasmContract.RewardAddresses>;
      free(): Promise<void>;
      _wasm: WasmV4.Withdrawals;
      readonly internalWasm: WasmV4.Withdrawals;
      readonly wasm: WasmV4.Withdrawals;
      hasValue(): boolean;
    }>;
  };
  TransactionInputs: {
    new (wasm: WasmV4.TransactionInputs, ctx: string): {
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.TransactionInput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionInputs;
      readonly internalWasm: WasmV4.TransactionInputs;
      readonly wasm: WasmV4.TransactionInputs;
      hasValue(): boolean;
    };
  };
  TransactionOutputs: {
    new (wasm: WasmV4.TransactionOutputs, ctx: string): {
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.TransactionOutput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionOutputs;
      readonly internalWasm: WasmV4.TransactionOutputs;
      readonly wasm: WasmV4.TransactionOutputs;
      hasValue(): boolean;
    };
  };
  TransactionBody: {
    new (wasm: WasmV4.TransactionBody, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      requiredSigners(): Promise<WasmContract.Ed25519KeyHashes>;
      inputs(): Promise<WasmContract.TransactionInputs>;
      outputs(): Promise<WasmContract.TransactionOutputs>;
      fee(): Promise<WasmContract.BigNum>;
      ttl(): Promise<WasmContract.Optional<number | undefined>>;
      certs(): Promise<WasmContract.Certificates>;
      withdrawals(): Promise<WasmContract.Withdrawals>;
      scriptDataHash(): Promise<WasmContract.ScriptDataHash | undefined>;
      setScriptDataHash(
        scriptDataHash: WasmContract.ScriptDataHash
      ): Promise<void>;
      collateral(): Promise<WasmContract.TransactionInputs | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBody;
      readonly internalWasm: WasmV4.TransactionBody;
      readonly wasm: WasmV4.TransactionBody;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      requiredSigners(): Promise<WasmContract.Ed25519KeyHashes>;
      inputs(): Promise<WasmContract.TransactionInputs>;
      outputs(): Promise<WasmContract.TransactionOutputs>;
      fee(): Promise<WasmContract.BigNum>;
      ttl(): Promise<WasmContract.Optional<number | undefined>>;
      certs(): Promise<WasmContract.Certificates>;
      withdrawals(): Promise<WasmContract.Withdrawals>;
      scriptDataHash(): Promise<WasmContract.ScriptDataHash | undefined>;
      setScriptDataHash(
        scriptDataHash: WasmContract.ScriptDataHash
      ): Promise<void>;
      collateral(): Promise<WasmContract.TransactionInputs | undefined>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBody;
      readonly internalWasm: WasmV4.TransactionBody;
      readonly wasm: WasmV4.TransactionBody;
      hasValue(): boolean;
    }>;
  };
  TransactionBuilder: {
    new (wasm: WasmV4.TransactionBuilder, ctx: string): {
      addKeyInput(
        hash: WasmContract.Ed25519KeyHash,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      addBootstrapInput(
        hash: WasmContract.ByronAddress,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      addInput(
        address: WasmContract.Address,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      feeForInput(
        address: WasmContract.Address,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<WasmContract.BigNum>;
      addOutput(output: WasmContract.TransactionOutput): Promise<void>;
      feeForOutput(
        output: WasmContract.TransactionOutput
      ): Promise<WasmContract.BigNum>;
      setFee(fee: WasmContract.BigNum): Promise<void>;
      setTtl(ttl: number): Promise<void>;
      setValidityStartInterval(validityStartInterval: number): Promise<void>;
      setScriptDataHash(
        script_data_hash: WasmContract.ScriptDataHash
      ): Promise<void>;
      setCerts(certs: WasmContract.Certificates): Promise<void>;
      setWithdrawals(withdrawals: WasmContract.Withdrawals): Promise<void>;
      setAuxiliaryData(auxiliary: WasmContract.AuxiliaryData): Promise<void>;
      getExplicitInput(): Promise<WasmContract.Value>;
      getImplicitInput(): Promise<WasmContract.Value>;
      getExplicitOutput(): Promise<WasmContract.Value>;
      getTotalOutput(): Promise<WasmContract.Value>;
      getTotalInput(): Promise<WasmContract.Value>;
      getDeposit(): Promise<WasmContract.BigNum>;
      getFeeIfSet(): Promise<WasmContract.BigNum>;
      addChangeIfNeeded(address: WasmContract.Address): Promise<boolean>;
      addMintAsset(
        mintScript: WasmContract.NativeScript,
        mintName: WasmContract.AssetName,
        amount: WasmContract.Int
      ): Promise<void>;
      addJsonMetadatum(key: WasmContract.BigNum, value: string): Promise<void>;
      getAuxiliaryData(): Promise<WasmContract.AuxiliaryData | void>;
      addRequiredSigner(
        requiredSigner: WasmContract.Ed25519KeyHash
      ): Promise<void>;
      addNativeScriptInput(
        nativeScript: WasmContract.NativeScript,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      addPlutusScriptInput(
        witness: WasmContract.PlutusWitness,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      setCollateral(
        txInputsBuilder: WasmContract.TxInputsBuilder
      ): Promise<void>;
      calcScriptDataHash(costModels: WasmContract.Costmdls): Promise<void>;
      build(): Promise<WasmContract.TransactionBody>;
      minFee(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBuilder;
      readonly internalWasm: WasmV4.TransactionBuilder;
      readonly wasm: WasmV4.TransactionBuilder;
      hasValue(): boolean;
    };
    new (cfg: WasmContract.TransactionBuilderConfig): Promise<{
      addKeyInput(
        hash: WasmContract.Ed25519KeyHash,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      addBootstrapInput(
        hash: WasmContract.ByronAddress,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      addInput(
        address: WasmContract.Address,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      feeForInput(
        address: WasmContract.Address,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<WasmContract.BigNum>;
      addOutput(output: WasmContract.TransactionOutput): Promise<void>;
      feeForOutput(
        output: WasmContract.TransactionOutput
      ): Promise<WasmContract.BigNum>;
      setFee(fee: WasmContract.BigNum): Promise<void>;
      setTtl(ttl: number): Promise<void>;
      setValidityStartInterval(validityStartInterval: number): Promise<void>;
      setScriptDataHash(
        script_data_hash: WasmContract.ScriptDataHash
      ): Promise<void>;
      setCerts(certs: WasmContract.Certificates): Promise<void>;
      setWithdrawals(withdrawals: WasmContract.Withdrawals): Promise<void>;
      setAuxiliaryData(auxiliary: WasmContract.AuxiliaryData): Promise<void>;
      getExplicitInput(): Promise<WasmContract.Value>;
      getImplicitInput(): Promise<WasmContract.Value>;
      getExplicitOutput(): Promise<WasmContract.Value>;
      getTotalOutput(): Promise<WasmContract.Value>;
      getTotalInput(): Promise<WasmContract.Value>;
      getDeposit(): Promise<WasmContract.BigNum>;
      getFeeIfSet(): Promise<WasmContract.BigNum>;
      addChangeIfNeeded(address: WasmContract.Address): Promise<boolean>;
      addMintAsset(
        mintScript: WasmContract.NativeScript,
        mintName: WasmContract.AssetName,
        amount: WasmContract.Int
      ): Promise<void>;
      addJsonMetadatum(key: WasmContract.BigNum, value: string): Promise<void>;
      getAuxiliaryData(): Promise<WasmContract.AuxiliaryData | void>;
      addRequiredSigner(
        requiredSigner: WasmContract.Ed25519KeyHash
      ): Promise<void>;
      addNativeScriptInput(
        nativeScript: WasmContract.NativeScript,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      addPlutusScriptInput(
        witness: WasmContract.PlutusWitness,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      setCollateral(
        txInputsBuilder: WasmContract.TxInputsBuilder
      ): Promise<void>;
      calcScriptDataHash(costModels: WasmContract.Costmdls): Promise<void>;
      build(): Promise<WasmContract.TransactionBody>;
      minFee(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBuilder;
      readonly internalWasm: WasmV4.TransactionBuilder;
      readonly wasm: WasmV4.TransactionBuilder;
      hasValue(): boolean;
    }>;
  };
  BaseAddress: {
    new (wasm: WasmV4.BaseAddress, ctx: string): {
      paymentCred(): Promise<WasmContract.Credential>;
      stakeCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.BaseAddress;
      readonly internalWasm: WasmV4.BaseAddress;
      readonly wasm: WasmV4.BaseAddress;
      hasValue(): boolean;
    };
    fromAddress(addr: WasmContract.Address): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      stakeCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.BaseAddress;
      readonly internalWasm: WasmV4.BaseAddress;
      readonly wasm: WasmV4.BaseAddress;
      hasValue(): boolean;
    }>;
    new (
      network: number,
      payment: WasmContract.Credential,
      stake: WasmContract.Credential
    ): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      stakeCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.BaseAddress;
      readonly internalWasm: WasmV4.BaseAddress;
      readonly wasm: WasmV4.BaseAddress;
      hasValue(): boolean;
    }>;
  };
  PointerAddress: {
    new (wasm: WasmV4.PointerAddress, ctx: string): {
      paymentCred(): Promise<WasmContract.Credential>;
      stakePointer(): Promise<WasmContract.Pointer>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.PointerAddress;
      readonly internalWasm: WasmV4.PointerAddress;
      readonly wasm: WasmV4.PointerAddress;
      hasValue(): boolean;
    };
    fromAddress(addr: WasmContract.Address): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      stakePointer(): Promise<WasmContract.Pointer>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.PointerAddress;
      readonly internalWasm: WasmV4.PointerAddress;
      readonly wasm: WasmV4.PointerAddress;
      hasValue(): boolean;
    }>;
    new (
      network: number,
      payment: WasmContract.Credential,
      stake: WasmContract.Pointer
    ): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      stakePointer(): Promise<WasmContract.Pointer>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.PointerAddress;
      readonly internalWasm: WasmV4.PointerAddress;
      readonly wasm: WasmV4.PointerAddress;
      hasValue(): boolean;
    }>;
  };
  EnterpriseAddress: {
    new (wasm: WasmV4.EnterpriseAddress, ctx: string): {
      paymentCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.EnterpriseAddress;
      readonly internalWasm: WasmV4.EnterpriseAddress;
      readonly wasm: WasmV4.EnterpriseAddress;
      hasValue(): boolean;
    };
    fromAddress(addr: WasmContract.Address): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.EnterpriseAddress;
      readonly internalWasm: WasmV4.EnterpriseAddress;
      readonly wasm: WasmV4.EnterpriseAddress;
      hasValue(): boolean;
    }>;
    new (network: number, payment: WasmContract.Credential): Promise<{
      paymentCred(): Promise<WasmContract.Credential>;
      toAddress(): Promise<WasmContract.Address>;
      free(): Promise<void>;
      _wasm: WasmV4.EnterpriseAddress;
      readonly internalWasm: WasmV4.EnterpriseAddress;
      readonly wasm: WasmV4.EnterpriseAddress;
      hasValue(): boolean;
    }>;
  };
  Pointer: {
    new (wasm: WasmV4.Pointer, ctx: string): {
      slot(): Promise<number>;
      txIndex(): Promise<number>;
      certIndex(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Pointer;
      readonly internalWasm: WasmV4.Pointer;
      readonly wasm: WasmV4.Pointer;
      hasValue(): boolean;
    };
    new (slot: number, txIndex: number, certIndex: number): Promise<{
      slot(): Promise<number>;
      txIndex(): Promise<number>;
      certIndex(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.Pointer;
      readonly internalWasm: WasmV4.Pointer;
      readonly wasm: WasmV4.Pointer;
      hasValue(): boolean;
    }>;
  };
  Vkey: {
    new (wasm: WasmV4.Vkey, ctx: string): {
      free(): Promise<void>;
      _wasm: WasmV4.Vkey;
      readonly internalWasm: WasmV4.Vkey;
      readonly wasm: WasmV4.Vkey;
      hasValue(): boolean;
    };
    new (pk: WasmContract.PublicKey): Promise<{
      free(): Promise<void>;
      _wasm: WasmV4.Vkey;
      readonly internalWasm: WasmV4.Vkey;
      readonly wasm: WasmV4.Vkey;
      hasValue(): boolean;
    }>;
  };
  Ed25519Signature: {
    new (wasm: WasmV4.Ed25519Signature, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519Signature;
      readonly internalWasm: WasmV4.Ed25519Signature;
      readonly wasm: WasmV4.Ed25519Signature;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519Signature;
      readonly internalWasm: WasmV4.Ed25519Signature;
      readonly wasm: WasmV4.Ed25519Signature;
      hasValue(): boolean;
    }>;
  };
  Vkeywitness: {
    new (wasm: WasmV4.Vkeywitness, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      signature(): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.Vkeywitness;
      readonly internalWasm: WasmV4.Vkeywitness;
      readonly wasm: WasmV4.Vkeywitness;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      signature(): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.Vkeywitness;
      readonly internalWasm: WasmV4.Vkeywitness;
      readonly wasm: WasmV4.Vkeywitness;
      hasValue(): boolean;
    }>;
    new (
      vkey: WasmContract.Vkey,
      signature: WasmContract.Ed25519Signature
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      signature(): Promise<WasmContract.Ed25519Signature>;
      free(): Promise<void>;
      _wasm: WasmV4.Vkeywitness;
      readonly internalWasm: WasmV4.Vkeywitness;
      readonly wasm: WasmV4.Vkeywitness;
      hasValue(): boolean;
    }>;
  };
  Vkeywitnesses: {
    new (wasm: WasmV4.Vkeywitnesses, ctx: string): {
      len(): Promise<number>;
      add(item: WasmContract.Vkeywitness): Promise<void>;
      get(index: number): Promise<WasmContract.Vkeywitness>;
      free(): Promise<void>;
      _wasm: WasmV4.Vkeywitnesses;
      readonly internalWasm: WasmV4.Vkeywitnesses;
      readonly wasm: WasmV4.Vkeywitnesses;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      add(item: WasmContract.Vkeywitness): Promise<void>;
      get(index: number): Promise<WasmContract.Vkeywitness>;
      free(): Promise<void>;
      _wasm: WasmV4.Vkeywitnesses;
      readonly internalWasm: WasmV4.Vkeywitnesses;
      readonly wasm: WasmV4.Vkeywitnesses;
      hasValue(): boolean;
    }>;
  };
  BootstrapWitness: {
    new (wasm: WasmV4.BootstrapWitness, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.BootstrapWitness;
      readonly internalWasm: WasmV4.BootstrapWitness;
      readonly wasm: WasmV4.BootstrapWitness;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.BootstrapWitness;
      readonly internalWasm: WasmV4.BootstrapWitness;
      readonly wasm: WasmV4.BootstrapWitness;
      hasValue(): boolean;
    }>;
    new (
      vkey: WasmContract.Vkey,
      signature: WasmContract.Ed25519Signature,
      chainCode: Uint8Array,
      attributes: Uint8Array
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.BootstrapWitness;
      readonly internalWasm: WasmV4.BootstrapWitness;
      readonly wasm: WasmV4.BootstrapWitness;
      hasValue(): boolean;
    }>;
  };
  BootstrapWitnesses: {
    new (wasm: WasmV4.BootstrapWitnesses, ctx: string): {
      len(): Promise<number>;
      add(item: WasmContract.BootstrapWitness): Promise<void>;
      get(index: number): Promise<WasmContract.BootstrapWitness>;
      free(): Promise<void>;
      _wasm: WasmV4.BootstrapWitnesses;
      readonly internalWasm: WasmV4.BootstrapWitnesses;
      readonly wasm: WasmV4.BootstrapWitnesses;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      add(item: WasmContract.BootstrapWitness): Promise<void>;
      get(index: number): Promise<WasmContract.BootstrapWitness>;
      free(): Promise<void>;
      _wasm: WasmV4.BootstrapWitnesses;
      readonly internalWasm: WasmV4.BootstrapWitnesses;
      readonly wasm: WasmV4.BootstrapWitnesses;
      hasValue(): boolean;
    }>;
  };
  TransactionWitnessSet: {
    new (wasm: WasmV4.TransactionWitnessSet, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      plutusScripts(): Promise<WasmContract.PlutusScripts>;
      redeemers(): Promise<WasmContract.Redeemers>;
      toHex(): Promise<string>;
      setBootstraps(bootstraps: WasmContract.BootstrapWitnesses): Promise<void>;
      bootstraps(): Promise<WasmContract.BootstrapWitnesses>;
      setPlutusData(plutusData: WasmContract.PlutusList): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusList | undefined>;
      setVkeys(vkeywitnesses: WasmContract.Vkeywitnesses): Promise<void>;
      vkeys(): Promise<WasmContract.Vkeywitnesses>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionWitnessSet;
      readonly internalWasm: WasmV4.TransactionWitnessSet;
      readonly wasm: WasmV4.TransactionWitnessSet;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      plutusScripts(): Promise<WasmContract.PlutusScripts>;
      redeemers(): Promise<WasmContract.Redeemers>;
      toHex(): Promise<string>;
      setBootstraps(bootstraps: WasmContract.BootstrapWitnesses): Promise<void>;
      bootstraps(): Promise<WasmContract.BootstrapWitnesses>;
      setPlutusData(plutusData: WasmContract.PlutusList): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusList | undefined>;
      setVkeys(vkeywitnesses: WasmContract.Vkeywitnesses): Promise<void>;
      vkeys(): Promise<WasmContract.Vkeywitnesses>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionWitnessSet;
      readonly internalWasm: WasmV4.TransactionWitnessSet;
      readonly wasm: WasmV4.TransactionWitnessSet;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      plutusScripts(): Promise<WasmContract.PlutusScripts>;
      redeemers(): Promise<WasmContract.Redeemers>;
      toHex(): Promise<string>;
      setBootstraps(bootstraps: WasmContract.BootstrapWitnesses): Promise<void>;
      bootstraps(): Promise<WasmContract.BootstrapWitnesses>;
      setPlutusData(plutusData: WasmContract.PlutusList): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusList | undefined>;
      setVkeys(vkeywitnesses: WasmContract.Vkeywitnesses): Promise<void>;
      vkeys(): Promise<WasmContract.Vkeywitnesses>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionWitnessSet;
      readonly internalWasm: WasmV4.TransactionWitnessSet;
      readonly wasm: WasmV4.TransactionWitnessSet;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      plutusScripts(): Promise<WasmContract.PlutusScripts>;
      redeemers(): Promise<WasmContract.Redeemers>;
      toHex(): Promise<string>;
      setBootstraps(bootstraps: WasmContract.BootstrapWitnesses): Promise<void>;
      bootstraps(): Promise<WasmContract.BootstrapWitnesses>;
      setPlutusData(plutusData: WasmContract.PlutusList): Promise<void>;
      plutusData(): Promise<WasmContract.PlutusList | undefined>;
      setVkeys(vkeywitnesses: WasmContract.Vkeywitnesses): Promise<void>;
      vkeys(): Promise<WasmContract.Vkeywitnesses>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionWitnessSet;
      readonly internalWasm: WasmV4.TransactionWitnessSet;
      readonly wasm: WasmV4.TransactionWitnessSet;
      hasValue(): boolean;
    }>;
  };
  Transaction: {
    new (wasm: WasmV4.Transaction, ctx: string): {
      body(): Promise<WasmContract.TransactionBody>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      isValid(): Promise<boolean>;
      toBytes(): Promise<Uint8Array>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData>;
      free(): Promise<void>;
      _wasm: WasmV4.Transaction;
      readonly internalWasm: WasmV4.Transaction;
      readonly wasm: WasmV4.Transaction;
      hasValue(): boolean;
    };
    new (
      body: WasmContract.TransactionBody,
      witnessSet: WasmContract.TransactionWitnessSet,
      auxiliary?: WasmContract.AuxiliaryData
    ): Promise<{
      body(): Promise<WasmContract.TransactionBody>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      isValid(): Promise<boolean>;
      toBytes(): Promise<Uint8Array>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData>;
      free(): Promise<void>;
      _wasm: WasmV4.Transaction;
      readonly internalWasm: WasmV4.Transaction;
      readonly wasm: WasmV4.Transaction;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      body(): Promise<WasmContract.TransactionBody>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      isValid(): Promise<boolean>;
      toBytes(): Promise<Uint8Array>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData>;
      free(): Promise<void>;
      _wasm: WasmV4.Transaction;
      readonly internalWasm: WasmV4.Transaction;
      readonly wasm: WasmV4.Transaction;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      body(): Promise<WasmContract.TransactionBody>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      isValid(): Promise<boolean>;
      toBytes(): Promise<Uint8Array>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData>;
      free(): Promise<void>;
      _wasm: WasmV4.Transaction;
      readonly internalWasm: WasmV4.Transaction;
      readonly wasm: WasmV4.Transaction;
      hasValue(): boolean;
    }>;
  };
  /**
   * `NetworkInfo` is not exported by @emurgo/cls-mobile-bridge,
   * so we create our own fake implementation. The calls made to this object are not
   * proxied to WASM.
   */
  NetworkInfo: {
    new (wasm: WasmV4.NetworkInfo, ctx: string): {
      networkId(): Promise<number>;
      protocolMagic(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NetworkInfo;
      readonly internalWasm: WasmV4.NetworkInfo;
      readonly wasm: WasmV4.NetworkInfo;
      hasValue(): boolean;
    };
    new (networkId: number, protocolMagic: number): Promise<{
      networkId(): Promise<number>;
      protocolMagic(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NetworkInfo;
      readonly internalWasm: WasmV4.NetworkInfo;
      readonly wasm: WasmV4.NetworkInfo;
      hasValue(): boolean;
    }>;
    testnet(): Promise<{
      networkId(): Promise<number>;
      protocolMagic(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NetworkInfo;
      readonly internalWasm: WasmV4.NetworkInfo;
      readonly wasm: WasmV4.NetworkInfo;
      hasValue(): boolean;
    }>;
    testnetPreview(): Promise<{
      networkId(): Promise<number>;
      protocolMagic(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NetworkInfo;
      readonly internalWasm: WasmV4.NetworkInfo;
      readonly wasm: WasmV4.NetworkInfo;
      hasValue(): boolean;
    }>;
    testnetPreprod(): Promise<{
      networkId(): Promise<number>;
      protocolMagic(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NetworkInfo;
      readonly internalWasm: WasmV4.NetworkInfo;
      readonly wasm: WasmV4.NetworkInfo;
      hasValue(): boolean;
    }>;
    mainnet(): Promise<{
      networkId(): Promise<number>;
      protocolMagic(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NetworkInfo;
      readonly internalWasm: WasmV4.NetworkInfo;
      readonly wasm: WasmV4.NetworkInfo;
      hasValue(): boolean;
    }>;
  };
  MetadataList: {
    new (wasm: WasmV4.MetadataList, ctx: string): {
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.TransactionMetadatum>;
      add(item: WasmContract.TransactionMetadatum): Promise<void>;
      toBytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.MetadataList;
      readonly internalWasm: WasmV4.MetadataList;
      readonly wasm: WasmV4.MetadataList;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.TransactionMetadatum>;
      add(item: WasmContract.TransactionMetadatum): Promise<void>;
      toBytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.MetadataList;
      readonly internalWasm: WasmV4.MetadataList;
      readonly wasm: WasmV4.MetadataList;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.TransactionMetadatum>;
      add(item: WasmContract.TransactionMetadatum): Promise<void>;
      toBytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.MetadataList;
      readonly internalWasm: WasmV4.MetadataList;
      readonly wasm: WasmV4.MetadataList;
      hasValue(): boolean;
    }>;
  };
  NativeScript: {
    new (wasm: WasmV4.NativeScript, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      hash(): Promise<WasmContract.Ed25519KeyHash>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NativeScript;
      readonly internalWasm: WasmV4.NativeScript;
      readonly wasm: WasmV4.NativeScript;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      hash(): Promise<WasmContract.Ed25519KeyHash>;
      kind(): Promise<number>;
      free(): Promise<void>;
      _wasm: WasmV4.NativeScript;
      readonly internalWasm: WasmV4.NativeScript;
      readonly wasm: WasmV4.NativeScript;
      hasValue(): boolean;
    }>;
  };
  NativeScripts: {
    new (wasm: WasmV4.NativeScripts, ctx: string): {
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.NativeScript>;
      add(elem: WasmContract.NativeScript): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.NativeScripts;
      readonly internalWasm: WasmV4.NativeScripts;
      readonly wasm: WasmV4.NativeScripts;
      hasValue(): boolean;
    };
    new (): Promise<{
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.NativeScript>;
      add(elem: WasmContract.NativeScript): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.NativeScripts;
      readonly internalWasm: WasmV4.NativeScripts;
      readonly wasm: WasmV4.NativeScripts;
      hasValue(): boolean;
    }>;
  };
  PlutusScript: {
    new (wasm: WasmV4.PlutusScript, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      bytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScript;
      readonly internalWasm: WasmV4.PlutusScript;
      readonly wasm: WasmV4.PlutusScript;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      bytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScript;
      readonly internalWasm: WasmV4.PlutusScript;
      readonly wasm: WasmV4.PlutusScript;
      hasValue(): boolean;
    }>;
    new (bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      bytes(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScript;
      readonly internalWasm: WasmV4.PlutusScript;
      readonly wasm: WasmV4.PlutusScript;
      hasValue(): boolean;
    }>;
  };
  PlutusScripts: {
    new (wasm: WasmV4.PlutusScripts, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusScript>;
      add(elem: WasmContract.PlutusScript): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScripts;
      readonly internalWasm: WasmV4.PlutusScripts;
      readonly wasm: WasmV4.PlutusScripts;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusScript>;
      add(elem: WasmContract.PlutusScript): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScripts;
      readonly internalWasm: WasmV4.PlutusScripts;
      readonly wasm: WasmV4.PlutusScripts;
      hasValue(): boolean;
    }>;
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.PlutusScript>;
      add(elem: WasmContract.PlutusScript): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScripts;
      readonly internalWasm: WasmV4.PlutusScripts;
      readonly wasm: WasmV4.PlutusScripts;
      hasValue(): boolean;
    }>;
  };
  /**
   * WARNING! This type is here to comply with the exported interface, but it is not implemented
   */
  TxInputsBuilder: {
    new (wasm: WasmV4.TxInputsBuilder, ctx: string): {
      addInput(
        address: WasmContract.Address,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      inputs(): Promise<WasmContract.TransactionInputs>;
      addPlutusScriptInput(
        witness: WasmContract.PlutusWitness,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.TxInputsBuilder;
      readonly internalWasm: WasmV4.TxInputsBuilder;
      readonly wasm: WasmV4.TxInputsBuilder;
      hasValue(): boolean;
    };
    new (): Promise<{
      addInput(
        address: WasmContract.Address,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      inputs(): Promise<WasmContract.TransactionInputs>;
      addPlutusScriptInput(
        witness: WasmContract.PlutusWitness,
        input: WasmContract.TransactionInput,
        amount: WasmContract.Value
      ): Promise<void>;
      free(): Promise<void>;
      _wasm: WasmV4.TxInputsBuilder;
      readonly internalWasm: WasmV4.TxInputsBuilder;
      readonly wasm: WasmV4.TxInputsBuilder;
      hasValue(): boolean;
    }>;
  };
  DataCost: {
    new (wasm: WasmV4.DataCost, ctx: string): {
      coinsPerByte(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.DataCost;
      readonly internalWasm: WasmV4.DataCost;
      readonly wasm: WasmV4.DataCost;
      hasValue(): boolean;
    };
    newCoinsPerWord(coinsPerWord: WasmContract.BigNum): Promise<{
      coinsPerByte(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.DataCost;
      readonly internalWasm: WasmV4.DataCost;
      readonly wasm: WasmV4.DataCost;
      hasValue(): boolean;
    }>;
    newCoinsPerByte(coinsPerByte: WasmContract.BigNum): Promise<{
      coinsPerByte(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.DataCost;
      readonly internalWasm: WasmV4.DataCost;
      readonly wasm: WasmV4.DataCost;
      hasValue(): boolean;
    }>;
  };
  UnitInterval: {
    new (wasm: WasmV4.UnitInterval, ctx: string): {
      toHex(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toJson(): Promise<string>;
      numerator(): Promise<WasmContract.BigNum>;
      denominator(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.UnitInterval;
      readonly internalWasm: WasmV4.UnitInterval;
      readonly wasm: WasmV4.UnitInterval;
      hasValue(): boolean;
    };
    fromBytes(bytes: Uint8Array): Promise<{
      toHex(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toJson(): Promise<string>;
      numerator(): Promise<WasmContract.BigNum>;
      denominator(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.UnitInterval;
      readonly internalWasm: WasmV4.UnitInterval;
      readonly wasm: WasmV4.UnitInterval;
      hasValue(): boolean;
    }>;
    fromHex(hex: string): Promise<{
      toHex(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toJson(): Promise<string>;
      numerator(): Promise<WasmContract.BigNum>;
      denominator(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.UnitInterval;
      readonly internalWasm: WasmV4.UnitInterval;
      readonly wasm: WasmV4.UnitInterval;
      hasValue(): boolean;
    }>;
    fromJson(json: string): Promise<{
      toHex(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toJson(): Promise<string>;
      numerator(): Promise<WasmContract.BigNum>;
      denominator(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.UnitInterval;
      readonly internalWasm: WasmV4.UnitInterval;
      readonly wasm: WasmV4.UnitInterval;
      hasValue(): boolean;
    }>;
    new (
      numerator: WasmContract.BigNum,
      denominator: WasmContract.BigNum
    ): Promise<{
      toHex(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toJson(): Promise<string>;
      numerator(): Promise<WasmContract.BigNum>;
      denominator(): Promise<WasmContract.BigNum>;
      free(): Promise<void>;
      _wasm: WasmV4.UnitInterval;
      readonly internalWasm: WasmV4.UnitInterval;
      readonly wasm: WasmV4.UnitInterval;
      hasValue(): boolean;
    }>;
  };
  TransactionBuilderConfigBuilder: {
    new (wasm: WasmV4.TransactionBuilderConfigBuilder, ctx: string): {
      feeAlgo(linearFee: WasmContract.LinearFee): Promise<any>;
      coinsPerUtxoWord(coinsPerUtxoWord: WasmContract.BigNum): Promise<any>;
      coinsPerUtxoByte(coinsPerUtxoByte: WasmContract.BigNum): Promise<any>;
      exUnitPrices(exUnitPrices: WasmContract.ExUnitPrices): Promise<any>;
      poolDeposit(poolDeposit: WasmContract.BigNum): Promise<any>;
      keyDeposit(keyDeposit: WasmContract.BigNum): Promise<any>;
      maxValueSize(maxValueSize: number): Promise<any>;
      maxTxSize(maxTxSize: number): Promise<any>;
      preferPureChange(preferPureChange: boolean): Promise<any>;
      build(): Promise<WasmContract.TransactionBuilderConfig>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBuilderConfigBuilder;
      readonly internalWasm: WasmV4.TransactionBuilderConfigBuilder;
      readonly wasm: WasmV4.TransactionBuilderConfigBuilder;
      hasValue(): boolean;
    };
    new (): Promise<{
      feeAlgo(linearFee: WasmContract.LinearFee): Promise<any>;
      coinsPerUtxoWord(coinsPerUtxoWord: WasmContract.BigNum): Promise<any>;
      coinsPerUtxoByte(coinsPerUtxoByte: WasmContract.BigNum): Promise<any>;
      exUnitPrices(exUnitPrices: WasmContract.ExUnitPrices): Promise<any>;
      poolDeposit(poolDeposit: WasmContract.BigNum): Promise<any>;
      keyDeposit(keyDeposit: WasmContract.BigNum): Promise<any>;
      maxValueSize(maxValueSize: number): Promise<any>;
      maxTxSize(maxTxSize: number): Promise<any>;
      preferPureChange(preferPureChange: boolean): Promise<any>;
      build(): Promise<WasmContract.TransactionBuilderConfig>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBuilderConfigBuilder;
      readonly internalWasm: WasmV4.TransactionBuilderConfigBuilder;
      readonly wasm: WasmV4.TransactionBuilderConfigBuilder;
      hasValue(): boolean;
    }>;
  };
  TransactionBuilderConfig: {
    new (wasm: WasmV4.TransactionBuilderConfig, ctx: string): {
      free(): Promise<void>;
      _wasm: WasmV4.TransactionBuilderConfig;
      readonly internalWasm: WasmV4.TransactionBuilderConfig;
      readonly wasm: WasmV4.TransactionBuilderConfig;
      hasValue(): boolean;
    };
  };
  PlutusWitness: {
    new (wasm: WasmV4.PlutusWitness, ctx: string): {
      script(): Promise<WasmContract.PlutusScript>;
      datum(): Promise<WasmContract.PlutusData | undefined>;
      redeemer(): Promise<WasmContract.Redeemer>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusWitness;
      readonly internalWasm: WasmV4.PlutusWitness;
      readonly wasm: WasmV4.PlutusWitness;
      hasValue(): boolean;
    };
    new (
      script: WasmContract.PlutusScript,
      datum: WasmContract.PlutusData,
      redeemer: WasmContract.Redeemer
    ): Promise<{
      script(): Promise<WasmContract.PlutusScript>;
      datum(): Promise<WasmContract.PlutusData | undefined>;
      redeemer(): Promise<WasmContract.Redeemer>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusWitness;
      readonly internalWasm: WasmV4.PlutusWitness;
      readonly wasm: WasmV4.PlutusWitness;
      hasValue(): boolean;
    }>;
    newWithRef(
      script: WasmContract.PlutusScriptSource,
      datum: WasmContract.DatumSource,
      redeemer: WasmContract.Redeemer
    ): Promise<{
      script(): Promise<WasmContract.PlutusScript>;
      datum(): Promise<WasmContract.PlutusData | undefined>;
      redeemer(): Promise<WasmContract.Redeemer>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusWitness;
      readonly internalWasm: WasmV4.PlutusWitness;
      readonly wasm: WasmV4.PlutusWitness;
      hasValue(): boolean;
    }>;
    newWithoutDatum(
      script: WasmContract.PlutusScript,
      redeemer: WasmContract.Redeemer
    ): Promise<{
      script(): Promise<WasmContract.PlutusScript>;
      datum(): Promise<WasmContract.PlutusData | undefined>;
      redeemer(): Promise<WasmContract.Redeemer>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusWitness;
      readonly internalWasm: WasmV4.PlutusWitness;
      readonly wasm: WasmV4.PlutusWitness;
      hasValue(): boolean;
    }>;
    newWithRefWithoutDatum(
      script: WasmContract.PlutusScriptSource,
      redeemer: WasmContract.Redeemer
    ): Promise<{
      script(): Promise<WasmContract.PlutusScript>;
      datum(): Promise<WasmContract.PlutusData | undefined>;
      redeemer(): Promise<WasmContract.Redeemer>;
      free(): Promise<void>;
      _wasm: WasmV4.PlutusWitness;
      readonly internalWasm: WasmV4.PlutusWitness;
      readonly wasm: WasmV4.PlutusWitness;
      hasValue(): boolean;
    }>;
  };
  PlutusScriptSource: {
    new (wasm: WasmV4.PlutusScriptSource, ctx: string): {
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScriptSource;
      readonly internalWasm: WasmV4.PlutusScriptSource;
      readonly wasm: WasmV4.PlutusScriptSource;
      hasValue(): boolean;
    };
    new (script: WasmContract.PlutusScript): Promise<{
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScriptSource;
      readonly internalWasm: WasmV4.PlutusScriptSource;
      readonly wasm: WasmV4.PlutusScriptSource;
      hasValue(): boolean;
    }>;
    newRefInput(
      scriptHash: WasmContract.ScriptHash,
      input: WasmContract.TransactionInput
    ): Promise<{
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScriptSource;
      readonly internalWasm: WasmV4.PlutusScriptSource;
      readonly wasm: WasmV4.PlutusScriptSource;
      hasValue(): boolean;
    }>;
    newRefInputWithLangVer(
      scriptHash: WasmContract.ScriptHash,
      input: WasmContract.TransactionInput,
      langVer: WasmContract.Language
    ): Promise<{
      free(): Promise<void>;
      _wasm: WasmV4.PlutusScriptSource;
      readonly internalWasm: WasmV4.PlutusScriptSource;
      readonly wasm: WasmV4.PlutusScriptSource;
      hasValue(): boolean;
    }>;
  };
  DatumSource: {
    new (wasm: WasmV4.DatumSource, ctx: string): {
      free(): Promise<void>;
      _wasm: WasmV4.DatumSource;
      readonly internalWasm: WasmV4.DatumSource;
      readonly wasm: WasmV4.DatumSource;
      hasValue(): boolean;
    };
    new (datum: WasmContract.PlutusData): Promise<{
      free(): Promise<void>;
      _wasm: WasmV4.DatumSource;
      readonly internalWasm: WasmV4.DatumSource;
      readonly wasm: WasmV4.DatumSource;
      hasValue(): boolean;
    }>;
    newRefInput(input: WasmContract.TransactionInput): Promise<{
      free(): Promise<void>;
      _wasm: WasmV4.DatumSource;
      readonly internalWasm: WasmV4.DatumSource;
      readonly wasm: WasmV4.DatumSource;
      hasValue(): boolean;
    }>;
  };
  ExUnitPrices: {
    new (wasm: WasmV4.ExUnitPrices, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string | undefined>;
      memPrice(): Promise<WasmContract.UnitInterval>;
      stepPrice(): Promise<WasmContract.UnitInterval>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnitPrices;
      readonly internalWasm: WasmV4.ExUnitPrices;
      readonly wasm: WasmV4.ExUnitPrices;
      hasValue(): boolean;
    };
    new (
      memPrice: WasmContract.UnitInterval,
      stepPrice: WasmContract.UnitInterval
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string | undefined>;
      memPrice(): Promise<WasmContract.UnitInterval>;
      stepPrice(): Promise<WasmContract.UnitInterval>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnitPrices;
      readonly internalWasm: WasmV4.ExUnitPrices;
      readonly wasm: WasmV4.ExUnitPrices;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string | undefined>;
      memPrice(): Promise<WasmContract.UnitInterval>;
      stepPrice(): Promise<WasmContract.UnitInterval>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnitPrices;
      readonly internalWasm: WasmV4.ExUnitPrices;
      readonly wasm: WasmV4.ExUnitPrices;
      hasValue(): boolean;
    }>;
    fromHex(hexStr: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string | undefined>;
      memPrice(): Promise<WasmContract.UnitInterval>;
      stepPrice(): Promise<WasmContract.UnitInterval>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnitPrices;
      readonly internalWasm: WasmV4.ExUnitPrices;
      readonly wasm: WasmV4.ExUnitPrices;
      hasValue(): boolean;
    }>;
    fromJson(json: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string | undefined>;
      memPrice(): Promise<WasmContract.UnitInterval>;
      stepPrice(): Promise<WasmContract.UnitInterval>;
      free(): Promise<void>;
      _wasm: WasmV4.ExUnitPrices;
      readonly internalWasm: WasmV4.ExUnitPrices;
      readonly wasm: WasmV4.ExUnitPrices;
      hasValue(): boolean;
    }>;
  };
  FixedTransaction: {
    new (wasm: WasmV4.FixedTransaction, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      body(): Promise<WasmContract.TransactionBody>;
      rawBody(): Promise<Uint8Array>;
      setBody(body: Uint8Array): Promise<void>;
      setWitnessSet(witnessSet: Uint8Array): Promise<void>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      rawWitnessSet(): Promise<Uint8Array>;
      setIsValid(isValid: boolean): Promise<void>;
      isValid(): Promise<boolean>;
      setAuxiliaryData(auxiliaryData: Uint8Array): Promise<void>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData | undefined>;
      rawAuxiliaryData(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.FixedTransaction;
      readonly internalWasm: WasmV4.FixedTransaction;
      readonly wasm: WasmV4.FixedTransaction;
      hasValue(): boolean;
    };
    new (
      rawBody: Uint8Array,
      rawWitnessSet: Uint8Array,
      isValid: boolean
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      body(): Promise<WasmContract.TransactionBody>;
      rawBody(): Promise<Uint8Array>;
      setBody(body: Uint8Array): Promise<void>;
      setWitnessSet(witnessSet: Uint8Array): Promise<void>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      rawWitnessSet(): Promise<Uint8Array>;
      setIsValid(isValid: boolean): Promise<void>;
      isValid(): Promise<boolean>;
      setAuxiliaryData(auxiliaryData: Uint8Array): Promise<void>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData | undefined>;
      rawAuxiliaryData(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.FixedTransaction;
      readonly internalWasm: WasmV4.FixedTransaction;
      readonly wasm: WasmV4.FixedTransaction;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      body(): Promise<WasmContract.TransactionBody>;
      rawBody(): Promise<Uint8Array>;
      setBody(body: Uint8Array): Promise<void>;
      setWitnessSet(witnessSet: Uint8Array): Promise<void>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      rawWitnessSet(): Promise<Uint8Array>;
      setIsValid(isValid: boolean): Promise<void>;
      isValid(): Promise<boolean>;
      setAuxiliaryData(auxiliaryData: Uint8Array): Promise<void>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData | undefined>;
      rawAuxiliaryData(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.FixedTransaction;
      readonly internalWasm: WasmV4.FixedTransaction;
      readonly wasm: WasmV4.FixedTransaction;
      hasValue(): boolean;
    }>;
    fromHex(hexStr: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      body(): Promise<WasmContract.TransactionBody>;
      rawBody(): Promise<Uint8Array>;
      setBody(body: Uint8Array): Promise<void>;
      setWitnessSet(witnessSet: Uint8Array): Promise<void>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      rawWitnessSet(): Promise<Uint8Array>;
      setIsValid(isValid: boolean): Promise<void>;
      isValid(): Promise<boolean>;
      setAuxiliaryData(auxiliaryData: Uint8Array): Promise<void>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData | undefined>;
      rawAuxiliaryData(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.FixedTransaction;
      readonly internalWasm: WasmV4.FixedTransaction;
      readonly wasm: WasmV4.FixedTransaction;
      hasValue(): boolean;
    }>;
    newWithAuxiliary(
      rawBody: Uint8Array,
      rawWitnessSet: Uint8Array,
      rawAuxiliaryData: Uint8Array,
      isValid: boolean
    ): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      body(): Promise<WasmContract.TransactionBody>;
      rawBody(): Promise<Uint8Array>;
      setBody(body: Uint8Array): Promise<void>;
      setWitnessSet(witnessSet: Uint8Array): Promise<void>;
      witnessSet(): Promise<WasmContract.TransactionWitnessSet>;
      rawWitnessSet(): Promise<Uint8Array>;
      setIsValid(isValid: boolean): Promise<void>;
      isValid(): Promise<boolean>;
      setAuxiliaryData(auxiliaryData: Uint8Array): Promise<void>;
      auxiliaryData(): Promise<WasmContract.AuxiliaryData | undefined>;
      rawAuxiliaryData(): Promise<Uint8Array>;
      free(): Promise<void>;
      _wasm: WasmV4.FixedTransaction;
      readonly internalWasm: WasmV4.FixedTransaction;
      readonly wasm: WasmV4.FixedTransaction;
      hasValue(): boolean;
    }>;
  };
  TransactionUnspentOutput: {
    new (wasm: WasmV4.TransactionUnspentOutput, ctx: string): {
      toJson(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      input(): Promise<WasmContract.TransactionInput>;
      output(): Promise<WasmContract.TransactionOutput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionUnspentOutput;
      readonly internalWasm: WasmV4.TransactionUnspentOutput;
      readonly wasm: WasmV4.TransactionUnspentOutput;
      hasValue(): boolean;
    };
    new (
      input: WasmContract.TransactionInput,
      output: WasmContract.TransactionOutput
    ): Promise<{
      toJson(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      input(): Promise<WasmContract.TransactionInput>;
      output(): Promise<WasmContract.TransactionOutput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionUnspentOutput;
      readonly internalWasm: WasmV4.TransactionUnspentOutput;
      readonly wasm: WasmV4.TransactionUnspentOutput;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toJson(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      input(): Promise<WasmContract.TransactionInput>;
      output(): Promise<WasmContract.TransactionOutput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionUnspentOutput;
      readonly internalWasm: WasmV4.TransactionUnspentOutput;
      readonly wasm: WasmV4.TransactionUnspentOutput;
      hasValue(): boolean;
    }>;
    fromHex(hexStr: string): Promise<{
      toJson(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      input(): Promise<WasmContract.TransactionInput>;
      output(): Promise<WasmContract.TransactionOutput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionUnspentOutput;
      readonly internalWasm: WasmV4.TransactionUnspentOutput;
      readonly wasm: WasmV4.TransactionUnspentOutput;
      hasValue(): boolean;
    }>;
    fromJson(json: string): Promise<{
      toJson(): Promise<string>;
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      input(): Promise<WasmContract.TransactionInput>;
      output(): Promise<WasmContract.TransactionOutput>;
      free(): Promise<void>;
      _wasm: WasmV4.TransactionUnspentOutput;
      readonly internalWasm: WasmV4.TransactionUnspentOutput;
      readonly wasm: WasmV4.TransactionUnspentOutput;
      hasValue(): boolean;
    }>;
  };
  Ed25519KeyHashes: {
    new (wasm: WasmV4.Ed25519KeyHashes, ctx: string): {
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Ed25519KeyHash>;
      add(elem: WasmContract.Ed25519KeyHash): Promise<void>;
      toOption(): Promise<WasmContract.Ed25519KeyHashes>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHashes;
      readonly internalWasm: WasmV4.Ed25519KeyHashes;
      readonly wasm: WasmV4.Ed25519KeyHashes;
      hasValue(): boolean;
    };
    new (): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Ed25519KeyHash>;
      add(elem: WasmContract.Ed25519KeyHash): Promise<void>;
      toOption(): Promise<WasmContract.Ed25519KeyHashes>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHashes;
      readonly internalWasm: WasmV4.Ed25519KeyHashes;
      readonly wasm: WasmV4.Ed25519KeyHashes;
      hasValue(): boolean;
    }>;
    fromJson(json: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Ed25519KeyHash>;
      add(elem: WasmContract.Ed25519KeyHash): Promise<void>;
      toOption(): Promise<WasmContract.Ed25519KeyHashes>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHashes;
      readonly internalWasm: WasmV4.Ed25519KeyHashes;
      readonly wasm: WasmV4.Ed25519KeyHashes;
      hasValue(): boolean;
    }>;
    fromBytes(bytes: Uint8Array): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Ed25519KeyHash>;
      add(elem: WasmContract.Ed25519KeyHash): Promise<void>;
      toOption(): Promise<WasmContract.Ed25519KeyHashes>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHashes;
      readonly internalWasm: WasmV4.Ed25519KeyHashes;
      readonly wasm: WasmV4.Ed25519KeyHashes;
      hasValue(): boolean;
    }>;
    fromHex(hexStr: string): Promise<{
      toBytes(): Promise<Uint8Array>;
      toHex(): Promise<string>;
      toJson(): Promise<string>;
      len(): Promise<number>;
      get(index: number): Promise<WasmContract.Ed25519KeyHash>;
      add(elem: WasmContract.Ed25519KeyHash): Promise<void>;
      toOption(): Promise<WasmContract.Ed25519KeyHashes>;
      free(): Promise<void>;
      _wasm: WasmV4.Ed25519KeyHashes;
      readonly internalWasm: WasmV4.Ed25519KeyHashes;
      readonly wasm: WasmV4.Ed25519KeyHashes;
      hasValue(): boolean;
    }>;
  };
  TxBuilderConstants: {
    new (wasm: WasmV4.TxBuilderConstants, ctx: string): {
      free(): Promise<void>;
      _wasm: WasmV4.TxBuilderConstants;
      readonly internalWasm: WasmV4.TxBuilderConstants;
      readonly wasm: WasmV4.TxBuilderConstants;
      hasValue(): boolean;
    };
    plutusDefaultCostModels(): Promise<WasmContract.Costmdls>;
    plutusAlonzoCostModels(): Promise<WasmContract.Costmdls>;
    plutusVasilCostModels(): Promise<WasmContract.Costmdls>;
  };
}
