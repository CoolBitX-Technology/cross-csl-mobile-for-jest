'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.MobileWasmModuleProxy = exports.init = void 0;
const WasmV4 = require('@emurgo/cardano-serialization-lib-nodejs');
const WasmContract = require('@emurgo/cross-csl-core');
const { Ptr, WasmProxy } = WasmContract;
const init = (ctx) => {
  return new MobileWasmModuleProxy(ctx);
};
exports.init = init;
class MobileWasmModuleProxy {
  constructor(ctx) {
    this.BigNum = (() => {
      const $outer = this;
      class BigNum extends Ptr {
        toBytes() {
          return this.wasm.to_bytes();
        }
        toStr() {
          return this.wasm.to_str();
        }
        checkedMul(other) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasmBigNum = yield this.wasm.checked_mul(other.wasm);
            return new BigNum(wasmBigNum, $outer._ctx);
          });
        }
        checkedAdd(other) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasmBigNum = yield this.wasm.checked_add(other.wasm);
            return new BigNum(wasmBigNum, $outer._ctx);
          });
        }
        checkedSub(other) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasmBigNum = yield this.wasm.checked_sub(other.wasm);
            return new BigNum(wasmBigNum, $outer._ctx);
          });
        }
        clampedSub(other) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasmBigNum = yield this.wasm.clamped_sub(other.wasm);
            return new BigNum(wasmBigNum, $outer._ctx);
          });
        }
        compare(rhs_value) {
          return this.wasm.compare(rhs_value.wasm);
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new BigNum(
              yield WasmV4.BigNum.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromStr(string) {
          return __awaiter(this, void 0, void 0, function* () {
            return new BigNum(
              yield WasmV4.BigNum.from_str(string),
              $outer._ctx
            );
          });
        }
      }
      return BigNum;
    })();
    this.LinearFee = (() => {
      const $outer = this;
      class LinearFee extends Ptr {
        constant() {
          return __awaiter(this, void 0, void 0, function* () {
            const constant = yield this.wasm.constant();
            return new $outer.BigNum(constant, $outer._ctx);
          });
        }
        coefficient() {
          return __awaiter(this, void 0, void 0, function* () {
            const coefficient = yield this.wasm.coefficient();
            return new $outer.BigNum(coefficient, $outer._ctx);
          });
        }
        static new(coefficient, constant) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasmLinearFee = yield WasmV4.LinearFee.new(
              coefficient.wasm,
              constant.wasm
            );
            return Promise.resolve(new LinearFee(wasmLinearFee, $outer._ctx));
          });
        }
      }
      return LinearFee;
    })();
    this.GeneralTransactionMetadata = (() => {
      const $outer = this;
      class GeneralTransactionMetadata extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        insert(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatum(
              yield this.wasm.insert(key.wasm, value.wasm),
              $outer._ctx
            );
          });
        }
        get(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatum(
              yield this.wasm.get(key.wasm),
              $outer._ctx
            );
          });
        }
        keys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatumLabels(
              yield this.wasm.keys(),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.GeneralTransactionMetadata.new();
            return new GeneralTransactionMetadata(wasm, $outer._ctx);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.GeneralTransactionMetadata.from_bytes(
              bytes
            );
            return Promise.resolve(
              new GeneralTransactionMetadata(wasm, $outer._ctx)
            );
          });
        }
      }
      return GeneralTransactionMetadata;
    })();
    this.TransactionMetadatumLabels = (() => {
      const $outer = this;
      class TransactionMetadatumLabels extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.get(index), $outer._ctx);
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(elem.wasm);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatumLabels(
              yield WasmV4.TransactionMetadatumLabels.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatumLabels(
              yield WasmV4.TransactionMetadatumLabels.new(),
              $outer._ctx
            );
          });
        }
      }
      return TransactionMetadatumLabels;
    })();
    this.MetadataMap = (() => {
      const $outer = this;
      class MetadataMap extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return Promise.resolve(this.wasm.len());
        }
        insert(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.insert(key.wasm, value.wasm);
            if (wasm) {
              return Promise.resolve(
                new $outer.TransactionMetadatum(wasm, $outer._ctx)
              );
            } else {
              return Promise.resolve(undefined);
            }
          });
        }
        insertStr(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.insert_str(key, value.wasm);
            if (wasm) {
              return new $outer.TransactionMetadatum(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        insertI32(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.insert_i32(key, value.wasm);
            if (wasm) {
              return new $outer.TransactionMetadatum(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        get(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatum(
              yield this.wasm.get(key.wasm),
              $outer._ctx
            );
          });
        }
        getStr(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatum(
              yield this.wasm.get_str(key),
              $outer._ctx
            );
          });
        }
        getI32(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatum(
              yield this.wasm.get_i32(key),
              $outer._ctx
            );
          });
        }
        has(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.has(key.wasm);
          });
        }
        keys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.MetadataList(yield this.wasm.keys(), $outer._ctx);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new MetadataMap(
              yield WasmV4.MetadataMap.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new MetadataMap(yield WasmV4.MetadataMap.new(), $outer._ctx);
          });
        }
      }
      return MetadataMap;
    })();
    this.Int = (() => {
      const $outer = this;
      class Int extends Ptr {
        isPositive() {
          return this.wasm.is_positive();
        }
        asPositive() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.as_positive();
            if (wasm) {
              return new $outer.BigNum(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        asNegative() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.as_negative();
            if (wasm) {
              return new $outer.BigNum(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        asI32() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.as_i32();
          });
        }
        static new(x) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Int(yield WasmV4.Int.new(x.wasm), $outer._ctx);
          });
        }
        static newNegative(x) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Int(yield WasmV4.Int.new_negative(x.wasm), $outer._ctx);
          });
        }
        static newI32(x) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Int(yield WasmV4.Int.new_i32(x), $outer._ctx);
          });
        }
      }
      return Int;
    })();
    this.TransactionMetadatum = (() => {
      const $outer = this;
      class TransactionMetadatum extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        kind() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.kind();
          });
        }
        asMap() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.MetadataMap(
              yield this.wasm.as_map(),
              $outer._ctx
            );
          });
        }
        asList() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.MetadataList(
              yield this.wasm.as_list(),
              $outer._ctx
            );
          });
        }
        asInt() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Int(yield this.wasm.as_int(), $outer._ctx);
          });
        }
        asBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        asText() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.as_text();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatum(
              yield WasmV4.TransactionMetadatum.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static newMap(map) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatum(
              yield WasmV4.TransactionMetadatum.new_map(map.wasm),
              $outer._ctx
            );
          });
        }
        static newList(list) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatum(
              yield WasmV4.TransactionMetadatum.new_list(list.wasm),
              $outer._ctx
            );
          });
        }
        static newInt(int) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatum(
              yield WasmV4.TransactionMetadatum.new_int(int.wasm),
              $outer._ctx
            );
          });
        }
        static newBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatum(
              yield WasmV4.TransactionMetadatum.new_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static newText(text) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionMetadatum(
              yield WasmV4.TransactionMetadatum.new_text(text),
              $outer._ctx
            );
          });
        }
      }
      return TransactionMetadatum;
    })();
    this.AuxiliaryData = (() => {
      const $outer = this;
      class AuxiliaryData extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.wasm.to_bytes());
          });
        }
        metadata() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.metadata();
            return new $outer.GeneralTransactionMetadata(wasm, $outer._ctx);
          });
        }
        setMetadata(metadata) {
          return this.wasm.set_metadata(metadata.wasm);
        }
        nativeScripts() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.native_scripts();
            if (wasm) {
              return new $outer.NativeScripts(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        setNativeScripts(native_scripts) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_native_scripts(native_scripts.wasm);
          });
        }
        plutusScripts() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.plutus_scripts();
            if (wasm) {
              return new $outer.PlutusScripts(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        setPlutusScripts(plutus_scripts) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_plutus_scripts(plutus_scripts.wasm);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new AuxiliaryData(
              yield WasmV4.AuxiliaryData.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new(metadata) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.AuxiliaryData.new();
            if (metadata) {
              yield wasm.set_metadata(metadata.wasm);
            }
            return new AuxiliaryData(wasm, $outer._ctx);
          });
        }
        static empty() {
          return __awaiter(this, void 0, void 0, function* () {
            return new AuxiliaryData(undefined, $outer._ctx);
          });
        }
      }
      return AuxiliaryData;
    })();
    this.AssetName = (() => {
      const $outer = this;
      class AssetName extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        name() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.name();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new AssetName(
              yield WasmV4.AssetName.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new(name) {
          return __awaiter(this, void 0, void 0, function* () {
            return new AssetName(yield WasmV4.AssetName.new(name), $outer._ctx);
          });
        }
      }
      return AssetName;
    })();
    this.AssetNames = (() => {
      const $outer = this;
      class AssetNames extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.AssetName(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.add(item.wasm);
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new AssetNames(yield WasmV4.AssetNames.new(), $outer._ctx);
          });
        }
      }
      return AssetNames;
    })();
    this.Assets = (() => {
      const $outer = this;
      class Assets extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        insert(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.insert(key.wasm, value.wasm),
              $outer._ctx
            );
          });
        }
        get(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.get(key.wasm),
              $outer._ctx
            );
          });
        }
        keys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.AssetNames(yield this.wasm.keys(), $outer._ctx);
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Assets(yield WasmV4.Assets.new(), $outer._ctx);
          });
        }
      }
      return Assets;
    })();
    this.ScriptHash = (() => {
      const $outer = this;
      class ScriptHash extends WasmProxy {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ScriptHash(
              yield WasmV4.ScriptHash.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return ScriptHash;
    })();
    this.ScriptHashes = (() => {
      const $outer = this;
      class ScriptHashes extends WasmProxy {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ScriptHash(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.add(item.wasm);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ScriptHashes(
              yield WasmV4.ScriptHashes.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ScriptHashes(
              yield WasmV4.ScriptHashes.new(),
              $outer._ctx
            );
          });
        }
      }
      return ScriptHashes;
    })();
    this.MultiAsset = (() => {
      const $outer = this;
      class MultiAsset extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        insert(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Assets(
              yield this.wasm.insert(key.wasm, value.wasm),
              $outer._ctx
            );
          });
        }
        get(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Assets(
              yield this.wasm.get(key.wasm),
              $outer._ctx
            );
          });
        }
        keys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ScriptHashes(yield this.wasm.keys(), $outer._ctx);
          });
        }
        sub(rhs) {
          return __awaiter(this, void 0, void 0, function* () {
            return new MultiAsset(yield this.wasm.sub(rhs.wasm), $outer._ctx);
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new MultiAsset(yield WasmV4.MultiAsset.new(), $outer._ctx);
          });
        }
      }
      return MultiAsset;
    })();
    this.Ed25519KeyHash = (() => {
      const $outer = this;
      class Ed25519KeyHash extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Ed25519KeyHash(
              yield WasmV4.Ed25519KeyHash.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return Ed25519KeyHash;
    })();
    this.TransactionHash = (() => {
      const $outer = this;
      class TransactionHash extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionHash(
              yield WasmV4.TransactionHash.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return TransactionHash;
    })();
    this.TransactionInput = (() => {
      const $outer = this;
      class TransactionInput extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.to_bytes();
          });
        }
        transactionId() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionHash(
              yield this.wasm.transaction_id(),
              $outer._ctx
            );
          });
        }
        index() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.index();
          });
        }
        static new(transactionId, index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionInput(
              yield WasmV4.TransactionInput.new(transactionId.wasm, index),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionInput(
              yield WasmV4.TransactionInput.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return TransactionInput;
    })();
    this.Value = (() => {
      const $outer = this;
      class Value extends Ptr {
        coin() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.coin(), $outer._ctx);
          });
        }
        setCoin(coin) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_coin(coin.wasm);
          });
        }
        multiasset() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.MultiAsset(
              yield this.wasm.multiasset(),
              $outer._ctx
            );
          });
        }
        setMultiasset(multiasset) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_multiasset(multiasset.wasm);
          });
        }
        checkedAdd(rhs) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Value(
              yield this.wasm.checked_add(rhs.wasm),
              $outer._ctx
            );
          });
        }
        checkedSub(rhs) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Value(
              yield this.wasm.checked_sub(rhs.wasm),
              $outer._ctx
            );
          });
        }
        clampedSub(rhs) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Value(
              yield this.wasm.clamped_sub(rhs.wasm),
              $outer._ctx
            );
          });
        }
        compare(rhs) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.compare(rhs.wasm);
          });
        }
        static new(coin) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Value(yield WasmV4.Value.new(coin.wasm), $outer._ctx);
          });
        }
      }
      return Value;
    })();
    this.Address = (() => {
      const $outer = this;
      class Address extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toBech32(prefix) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32(prefix);
          });
        }
        networkId() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.network_id();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Address(
              yield WasmV4.Address.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromBech32(string) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Address(
              yield WasmV4.Address.from_bech32(string),
              $outer._ctx
            );
          });
        }
      }
      return Address;
    })();
    this.PublicKey = (() => {
      const $outer = this;
      class PublicKey extends Ptr {
        toBech32() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32();
          });
        }
        asBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.as_bytes();
          });
        }
        hash() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519KeyHash(
              yield this.wasm.hash(),
              $outer._ctx
            );
          });
        }
        static fromBech32(bech32_str) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PublicKey(
              yield WasmV4.PublicKey.from_bech32(bech32_str),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PublicKey(
              yield WasmV4.PublicKey.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return PublicKey;
    })();
    this.Bip32PublicKey = (() => {
      const $outer = this;
      class Bip32PublicKey extends Ptr {
        derive(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PublicKey(
              yield this.wasm.derive(index),
              $outer._ctx
            );
          });
        }
        toRawKey() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PublicKey(
              yield this.wasm.to_raw_key(),
              $outer._ctx
            );
          });
        }
        asBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.as_bytes();
          });
        }
        toBech32() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32();
          });
        }
        chaincode() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.chaincode();
          });
        }
        static fromBech32(bech32_str) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PublicKey(
              yield WasmV4.Bip32PublicKey.from_bech32(bech32_str),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PublicKey(
              yield WasmV4.Bip32PublicKey.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return Bip32PublicKey;
    })();
    this.PrivateKey = (() => {
      const $outer = this;
      class PrivateKey extends Ptr {
        toPublic() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PublicKey(
              yield this.wasm.to_public(),
              $outer._ctx
            );
          });
        }
        toBech32() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32();
          });
        }
        asBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.as_bytes();
          });
        }
        sign(message) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519Signature(
              yield this.wasm.sign(message),
              $outer._ctx
            );
          });
        }
        static fromExtendedBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PrivateKey(
              yield WasmV4.PrivateKey.from_extended_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromNormalBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PrivateKey(
              yield WasmV4.PrivateKey.from_normal_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static generateEd25519() {
          return __awaiter(this, void 0, void 0, function* () {
            return new PrivateKey(
              yield WasmV4.PrivateKey.generate_ed25519(),
              $outer._ctx
            );
          });
        }
        static generateEd25519extended() {
          return __awaiter(this, void 0, void 0, function* () {
            return new PrivateKey(
              yield WasmV4.PrivateKey.generate_ed25519extended(),
              $outer._ctx
            );
          });
        }
        static fromBech32(bech32Str) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PrivateKey(
              yield WasmV4.PrivateKey.from_bech32(bech32Str),
              $outer._ctx
            );
          });
        }
      }
      return PrivateKey;
    })();
    this.Bip32PrivateKey = (() => {
      const $outer = this;
      class Bip32PrivateKey extends Ptr {
        derive(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PrivateKey(
              yield this.wasm.derive(index),
              $outer._ctx
            );
          });
        }
        toRawKey() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PrivateKey(
              yield this.wasm.to_raw_key(),
              $outer._ctx
            );
          });
        }
        toPublic() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Bip32PublicKey(
              yield this.wasm.to_public(),
              $outer._ctx
            );
          });
        }
        asBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.as_bytes();
          });
        }
        toBech32() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32();
          });
        }
        static fromBip39Entropy(entropy, password) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PrivateKey(
              yield WasmV4.Bip32PrivateKey.from_bip39_entropy(
                entropy,
                password
              ),
              $outer._ctx
            );
          });
        }
        static fromBech32(bech32Str) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PrivateKey(
              yield WasmV4.Bip32PrivateKey.from_bech32(bech32Str),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PrivateKey(
              yield WasmV4.Bip32PrivateKey.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static generateEd25519Bip32() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Bip32PrivateKey(
              yield WasmV4.Bip32PrivateKey.generate_ed25519_bip32(),
              $outer._ctx
            );
          });
        }
      }
      return Bip32PrivateKey;
    })();
    this.ByronAddress = (() => {
      const $outer = this;
      class ByronAddress extends Ptr {
        toBase58() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_base58();
          });
        }
        toAddress() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Address(
              yield this.wasm.to_address(),
              $outer._ctx
            );
          });
        }
        byronProtocolMagic() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.byron_protocol_magic();
          });
        }
        attributes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.attributes();
          });
        }
        static icarusFromKey(key, protocolMagic) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ByronAddress(
              yield WasmV4.ByronAddress.icarus_from_key(
                key.wasm,
                protocolMagic
              ),
              $outer._ctx
            );
          });
        }
        static fromBase58(string) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ByronAddress(
              yield WasmV4.ByronAddress.from_base58(string),
              $outer._ctx
            );
          });
        }
        static isValid(string) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield WasmV4.ByronAddress.is_valid(string);
          });
        }
        static fromAddress(addr) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ByronAddress(
              yield WasmV4.ByronAddress.from_address(addr.wasm),
              $outer._ctx
            );
          });
        }
      }
      return ByronAddress;
    })();
    this.TransactionOutput = (() => {
      const $outer = this;
      class TransactionOutput extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionOutput(
              yield WasmV4.TransactionOutput.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionOutput(
              yield WasmV4.TransactionOutput.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        address() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Address(yield this.wasm.address(), $outer._ctx);
          });
        }
        amount() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Value(yield this.wasm.amount(), $outer._ctx);
          });
        }
        hasPlutusData() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.has_plutus_data();
          });
        }
        setPlutusData(plutusData) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.set_plutus_data(plutusData.wasm);
          });
        }
        plutusData() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.plutus_data();
            if (wasm) {
              return new $outer.PlutusData(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        hasDataHash() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.has_data_hash();
          });
        }
        setDataHash(dataHash) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.set_data_hash(dataHash.wasm);
          });
        }
        dataHash() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.data_hash();
            if (wasm) {
              return new $outer.DataHash(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        static new(address, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionOutput(
              yield WasmV4.TransactionOutput.new(address.wasm, amount.wasm),
              $outer._ctx
            );
          });
        }
      }
      return TransactionOutput;
    })();
    this.DataHash = (() => {
      const $outer = this;
      class DataHash extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DataHash(
              yield WasmV4.DataHash.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DataHash(
              yield WasmV4.DataHash.from_bytes(Buffer.from(hex, 'hex')),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static fromBech32(str) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DataHash(
              yield WasmV4.DataHash.from_bech32(str),
              $outer._ctx
            );
          });
        }
        toBech32(prefix) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32(prefix);
          });
        }
      }
      return DataHash;
    })();
    this.PlutusData = (() => {
      const $outer = this;
      class PlutusData extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusData(
              yield WasmV4.PlutusData.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromJson(json, schema) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusData(
              yield WasmV4.PlutusData.from_json(json, schema),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusData(
              yield WasmV4.PlutusData.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
      }
      return PlutusData;
    })();
    this.PlutusList = (() => {
      const $outer = this;
      class PlutusList extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusList(
              yield WasmV4.PlutusList.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusList(
              yield WasmV4.PlutusList.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.to_hex();
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusList(yield WasmV4.PlutusList.new(), $outer._ctx);
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PlutusData(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
              try {
                resolve(this.wasm.add(elem.wasm));
              } catch (e) {
                reject(e);
              }
            });
          });
        }
      }
      return PlutusList;
    })();
    this.ExUnits = (() => {
      const $outer = this;
      class ExUnits extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ExUnits(
              yield WasmV4.ExUnits.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ExUnits(yield WasmV4.ExUnits.from_hex(hex), $outer._ctx);
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        mem() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.mem(), $outer._ctx);
          });
        }
        steps() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.steps(), $outer._ctx);
          });
        }
        static new(mem, steps) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ExUnits(
              yield WasmV4.ExUnits.new(mem.wasm, steps.wasm),
              $outer._ctx
            );
          });
        }
      }
      return ExUnits;
    })();
    this.Redeemer = (() => {
      const $outer = this;
      class Redeemer extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Redeemer(
              yield WasmV4.Redeemer.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Redeemer(
              yield WasmV4.Redeemer.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static new(tag, index, data, exUnits) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Redeemer(
              yield WasmV4.Redeemer.new(
                tag.wasm,
                index.wasm,
                data.wasm,
                exUnits.wasm
              ),
              $outer._ctx
            );
          });
        }
        tag() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.RedeemerTag(yield this.wasm.tag(), $outer._ctx);
          });
        }
        index() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.index(), $outer._ctx);
          });
        }
        data() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PlutusData(yield this.wasm.data(), $outer._ctx);
          });
        }
        exUnits() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ExUnits(yield this.wasm.ex_units(), $outer._ctx);
          });
        }
      }
      return Redeemer;
    })();
    this.RedeemerTag = (() => {
      const $outer = this;
      class RedeemerTag extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new RedeemerTag(
              yield WasmV4.RedeemerTag.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new RedeemerTag(
              yield WasmV4.RedeemerTag.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static newSpend() {
          return __awaiter(this, void 0, void 0, function* () {
            return new RedeemerTag(
              yield WasmV4.RedeemerTag.new_spend(),
              $outer._ctx
            );
          });
        }
        static newMint() {
          return __awaiter(this, void 0, void 0, function* () {
            return new RedeemerTag(
              yield WasmV4.RedeemerTag.new_mint(),
              $outer._ctx
            );
          });
        }
        static newCert() {
          return __awaiter(this, void 0, void 0, function* () {
            return new RedeemerTag(
              yield WasmV4.RedeemerTag.new_cert(),
              $outer._ctx
            );
          });
        }
        static newReward() {
          return __awaiter(this, void 0, void 0, function* () {
            return new RedeemerTag(
              yield WasmV4.RedeemerTag.new_reward(),
              $outer._ctx
            );
          });
        }
        kind() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.kind();
          });
        }
      }
      return RedeemerTag;
    })();
    this.Redeemers = (() => {
      const $outer = this;
      class Redeemers extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Redeemers(
              yield WasmV4.Redeemers.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Redeemers(
              yield WasmV4.Redeemers.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        totalExUnits() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ExUnits(
              yield this.wasm.total_ex_units(),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Redeemers(yield WasmV4.Redeemers.new(), $outer._ctx);
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Redeemer(yield this.wasm.get(index), $outer._ctx);
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
              try {
                resolve(this.wasm.add(elem.wasm));
              } catch (e) {
                reject(e);
              }
            });
          });
        }
      }
      return Redeemers;
    })();
    this.CostModel = (() => {
      const $outer = this;
      class CostModel extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new CostModel(
              yield WasmV4.CostModel.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new CostModel(
              yield WasmV4.CostModel.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        get(operation) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Int(yield this.wasm.get(operation), $outer._ctx);
          });
        }
        set(operation, cost) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Int(
              yield this.wasm.set(operation, cost.wasm),
              $outer._ctx
            );
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.len();
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new CostModel(yield WasmV4.CostModel.new(), $outer._ctx);
          });
        }
      }
      return CostModel;
    })();
    this.Costmdls = (() => {
      const $outer = this;
      class Costmdls extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Costmdls(
              yield WasmV4.Costmdls.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Costmdls(
              yield WasmV4.Costmdls.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.len();
          });
        }
        get(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.CostModel(
              yield this.wasm.get(key.wasm),
              $outer._ctx
            );
          });
        }
        insert(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.insert(key.wasm, value.wasm);
            if (wasm) {
              return new $outer.CostModel(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        keys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Languages(yield this.wasm.keys(), $outer._ctx);
          });
        }
        retainLanguageVersions(languages) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Costmdls(
              yield this.wasm.retain_language_versions(languages.wasm),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Costmdls(yield WasmV4.Costmdls.new(), $outer._ctx);
          });
        }
      }
      return Costmdls;
    })();
    this.Language = (() => {
      const $outer = this;
      class Language extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Language(
              yield WasmV4.Language.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Language(
              yield WasmV4.Language.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static newPlutusV1() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Language(
              yield WasmV4.Language.new_plutus_v1(),
              $outer._ctx
            );
          });
        }
        static newPlutusV2() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Language(
              yield WasmV4.Language.new_plutus_v2(),
              $outer._ctx
            );
          });
        }
        kind() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.kind();
          });
        }
      }
      return Language;
    })();
    this.Languages = (() => {
      const $outer = this;
      class Languages extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Language(yield this.wasm.get(index), $outer._ctx);
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
              try {
                resolve(this.wasm.add(elem.wasm));
              } catch (e) {
                reject(e);
              }
            });
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Languages(yield WasmV4.Languages.new(), $outer._ctx);
          });
        }
        static list() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Languages(yield WasmV4.Languages.list(), $outer._ctx);
          });
        }
      }
      return Languages;
    })();
    this.ScriptDataHash = (() => {
      const $outer = this;
      class ScriptDataHash extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ScriptDataHash(
              yield WasmV4.ScriptDataHash.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ScriptDataHash(
              yield WasmV4.ScriptDataHash.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static fromBech32(str) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ScriptDataHash(
              yield WasmV4.ScriptDataHash.from_bech32(str),
              $outer._ctx
            );
          });
        }
        toBech32(prefix) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bech32(prefix);
          });
        }
      }
      return ScriptDataHash;
    })();
    this.Credential = (() => {
      const $outer = this;
      class StakeCredential extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toKeyhash() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519KeyHash(
              yield this.wasm.to_keyhash(),
              $outer._ctx
            );
          });
        }
        toScripthash() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.ScriptHash(
              yield this.wasm.to_scripthash(),
              $outer._ctx
            );
          });
        }
        kind() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.kind();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeCredential(
              yield WasmV4.StakeCredential.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromKeyhash(hash) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeCredential(
              yield WasmV4.StakeCredential.from_keyhash(hash.wasm),
              $outer._ctx
            );
          });
        }
        static fromScripthash(hash) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeCredential(
              yield WasmV4.StakeCredential.from_scripthash(hash.wasm),
              $outer._ctx
            );
          });
        }
      }
      return StakeCredential;
    })();
    this.StakeRegistration = (() => {
      const $outer = this;
      class StakeRegistration extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        stakeCredential() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.stake_credential(),
              $outer._ctx
            );
          });
        }
        static new(stakeCredential) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeRegistration(
              yield WasmV4.StakeRegistration.new(stakeCredential.wasm),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeRegistration(
              yield WasmV4.StakeRegistration.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return StakeRegistration;
    })();
    this.StakeDeregistration = (() => {
      const $outer = this;
      class StakeDeregistration extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        stakeCredential() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.stake_credential(),
              $outer._ctx
            );
          });
        }
        static new(stakeCredential) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeDeregistration(
              yield WasmV4.StakeDeregistration.new(stakeCredential.wasm),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeDeregistration(
              yield WasmV4.StakeDeregistration.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return StakeDeregistration;
    })();
    this.StakeDelegation = (() => {
      const $outer = this;
      class StakeDelegation extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        stakeCredential() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.stake_credential(),
              $outer._ctx
            );
          });
        }
        poolKeyhash() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519KeyHash(
              yield this.wasm.pool_keyhash(),
              $outer._ctx
            );
          });
        }
        static new(stakeCredential, poolKeyHash) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeDelegation(
              yield WasmV4.StakeDelegation.new(
                stakeCredential.wasm,
                poolKeyHash.wasm
              ),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new StakeDelegation(
              yield WasmV4.StakeDelegation.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return StakeDelegation;
    })();
    this.Certificate = (() => {
      const $outer = this;
      class Certificate extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        asStakeRegistration() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.StakeRegistration(
              yield this.wasm.as_stake_registration(),
              $outer._ctx
            );
          });
        }
        asStakeDeregistration() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.StakeDeregistration(
              yield this.wasm.as_stake_deregistration(),
              $outer._ctx
            );
          });
        }
        asStakeDelegation() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.StakeDelegation(
              yield this.wasm.as_stake_delegation(),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Certificate(
              yield WasmV4.Certificate.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static newStakeRegistration(stakeRegistration) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Certificate(
              yield WasmV4.Certificate.new_stake_registration(
                stakeRegistration.wasm
              ),
              $outer._ctx
            );
          });
        }
        static newStakeDeregistration(stakeDeregistration) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Certificate(
              yield WasmV4.Certificate.new_stake_deregistration(
                stakeDeregistration.wasm
              ),
              $outer._ctx
            );
          });
        }
        static newStakeDelegation(stakeDelegation) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Certificate(
              yield WasmV4.Certificate.new_stake_delegation(
                stakeDelegation.wasm
              ),
              $outer._ctx
            );
          });
        }
      }
      return Certificate;
    })();
    this.Certificates = (() => {
      const $outer = this;
      class Certificates extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Certificate(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(item.wasm);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Certificates(
              yield WasmV4.Certificates.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Certificates(
              yield WasmV4.Certificates.new(),
              $outer._ctx
            );
          });
        }
      }
      return Certificates;
    })();
    this.RewardAddress = (() => {
      const $outer = this;
      class RewardAddress extends Ptr {
        paymentCred() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.payment_cred(),
              $outer._ctx
            );
          });
        }
        toAddress() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Address(
              yield this.wasm.to_address(),
              $outer._ctx
            );
          });
        }
        static fromAddress(addr) {
          return __awaiter(this, void 0, void 0, function* () {
            return new RewardAddress(
              yield WasmV4.RewardAddress.from_address(addr.wasm),
              $outer._ctx
            );
          });
        }
        static new(network, payment) {
          return __awaiter(this, void 0, void 0, function* () {
            return new RewardAddress(
              yield WasmV4.RewardAddress.new(network, payment.wasm),
              $outer._ctx
            );
          });
        }
      }
      return RewardAddress;
    })();
    this.RewardAddresses = (() => {
      const $outer = this;
      class RewardAddresses extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.RewardAddress(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(item.wasm);
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new RewardAddresses(
              yield WasmV4.RewardAddresses.new(),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new RewardAddresses(
              yield WasmV4.RewardAddresses.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return RewardAddresses;
    })();
    this.Withdrawals = (() => {
      const $outer = this;
      class Withdrawals extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        insert(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.insert(key.wasm, value.wasm),
              $outer._ctx
            );
          });
        }
        get(key) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.get(key.wasm),
              $outer._ctx
            );
          });
        }
        keys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.RewardAddresses(
              yield this.wasm.keys(),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Withdrawals(yield WasmV4.Withdrawals.new(), $outer._ctx);
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Withdrawals(
              yield WasmV4.Withdrawals.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return Withdrawals;
    })();
    this.TransactionInputs = (() => {
      const $outer = this;
      class TransactionInputs extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionInput(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
      }
      return TransactionInputs;
    })();
    this.TransactionOutputs = (() => {
      const $outer = this;
      class TransactionOutputs extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionOutput(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
      }
      return TransactionOutputs;
    })();
    this.TransactionBody = (() => {
      const $outer = this;
      class TransactionBody extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        requiredSigners() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519KeyHashes(
              yield this.wasm.required_signers(),
              $outer._ctx
            );
          });
        }
        inputs() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionInputs(
              yield this.wasm.inputs(),
              $outer._ctx
            );
          });
        }
        outputs() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionOutputs(
              yield this.wasm.outputs(),
              $outer._ctx
            );
          });
        }
        fee() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.fee(), $outer._ctx);
          });
        }
        ttl() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.ttl();
          });
        }
        certs() {
          return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(
              new $outer.Certificates(yield this.wasm.certs(), $outer._ctx)
            );
          });
        }
        withdrawals() {
          return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(
              new $outer.Withdrawals(yield this.wasm.withdrawals(), $outer._ctx)
            );
          });
        }
        scriptDataHash() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.script_data_hash();
            if (wasm) {
              return new $outer.ScriptDataHash(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        setScriptDataHash(scriptDataHash) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.set_script_data_hash(scriptDataHash.wasm);
          });
        }
        collateral() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.collateral();
            if (wasm) {
              return new $outer.TransactionInputs(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(
              new TransactionBody(
                yield WasmV4.TransactionBody.from_bytes(bytes),
                $outer._ctx
              )
            );
          });
        }
      }
      return TransactionBody;
    })();
    this.TransactionBuilder = (() => {
      const $outer = this;
      class TransactionBuilder extends Ptr {
        addKeyInput(hash, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_key_input(
              hash.wasm,
              input.wasm,
              amount.wasm
            );
          });
        }
        addBootstrapInput(hash, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_bootstrap_input(
              hash.wasm,
              input.wasm,
              amount.wasm
            );
          });
        }
        addInput(address, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_input(
              address.wasm,
              input.wasm,
              amount.wasm
            );
          });
        }
        feeForInput(address, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.fee_for_input(
                address.wasm,
                input.wasm,
                amount.wasm
              ),
              $outer._ctx
            );
          });
        }
        addOutput(output) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_output(output.wasm);
          });
        }
        feeForOutput(output) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.fee_for_output(output.wasm),
              $outer._ctx
            );
          });
        }
        setFee(fee) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_fee(fee.wasm);
          });
        }
        setTtl(ttl) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_ttl(ttl);
          });
        }
        setValidityStartInterval(validityStartInterval) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_validity_start_interval(
              validityStartInterval
            );
          });
        }
        setScriptDataHash(script_data_hash) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_script_data_hash(script_data_hash.wasm);
          });
        }
        setCerts(certs) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_certs(certs.wasm);
          });
        }
        setWithdrawals(withdrawals) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_withdrawals(withdrawals.wasm);
          });
        }
        setAuxiliaryData(auxiliary) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_auxiliary_data(auxiliary.wasm);
          });
        }
        getExplicitInput() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Value(
              yield this.wasm.get_explicit_input(),
              $outer._ctx
            );
          });
        }
        getImplicitInput() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Value(
              yield this.wasm.get_implicit_input(),
              $outer._ctx
            );
          });
        }
        getExplicitOutput() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Value(
              yield this.wasm.get_explicit_output(),
              $outer._ctx
            );
          });
        }
        getTotalOutput() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Value(
              yield this.wasm.get_total_output(),
              $outer._ctx
            );
          });
        }
        getTotalInput() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Value(
              yield this.wasm.get_total_input(),
              $outer._ctx
            );
          });
        }
        getDeposit() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.get_deposit(),
              $outer._ctx
            );
          });
        }
        getFeeIfSet() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.get_fee_if_set(),
              $outer._ctx
            );
          });
        }
        addChangeIfNeeded(address) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_change_if_needed(address.wasm);
          });
        }
        addMintAsset(mintScript, mintName, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_mint_asset(
              mintScript.wasm,
              mintName.wasm,
              amount.wasm
            );
          });
        }
        addJsonMetadatum(key, value) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_json_metadatum(key.wasm, value);
          });
        }
        getAuxiliaryData() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.get_auxiliary_data();
            if (wasm) {
              return new $outer.AuxiliaryData(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        addRequiredSigner(requiredSigner) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_required_signer(requiredSigner.wasm);
          });
        }
        addNativeScriptInput(nativeScript, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_native_script_input(
              nativeScript.wasm,
              input.wasm,
              amount.wasm
            );
          });
        }
        addPlutusScriptInput(witness, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add_plutus_script_input(
              witness.wasm,
              input.wasm,
              amount.wasm
            );
          });
        }
        setCollateral(txInputsBuilder) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_collateral(txInputsBuilder.wasm);
          });
        }
        calcScriptDataHash(costModels) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.calc_script_data_hash(costModels.wasm);
          });
        }
        build() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionBody(
              yield this.wasm.build(),
              $outer._ctx
            );
          });
        }
        minFee() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.min_fee(), $outer._ctx);
          });
        }
        static new(cfg) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilder(
              yield WasmV4.TransactionBuilder.new(cfg.wasm),
              $outer._ctx
            );
          });
        }
      }
      return TransactionBuilder;
    })();
    this.BaseAddress = (() => {
      const $outer = this;
      class BaseAddress extends Ptr {
        paymentCred() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.payment_cred(),
              $outer._ctx
            );
          });
        }
        stakeCred() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.stake_cred(),
              $outer._ctx
            );
          });
        }
        toAddress() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Address(
              yield this.wasm.to_address(),
              $outer._ctx
            );
          });
        }
        static fromAddress(addr) {
          return __awaiter(this, void 0, void 0, function* () {
            return new BaseAddress(
              yield WasmV4.BaseAddress.from_address(addr.wasm),
              $outer._ctx
            );
          });
        }
        static new(network, payment, stake) {
          return __awaiter(this, void 0, void 0, function* () {
            return new BaseAddress(
              yield WasmV4.BaseAddress.new(network, payment.wasm, stake.wasm),
              $outer._ctx
            );
          });
        }
      }
      return BaseAddress;
    })();
    this.PointerAddress = (() => {
      const $outer = this;
      class PointerAddress extends Ptr {
        paymentCred() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.payment_cred(),
              $outer._ctx
            );
          });
        }
        stakePointer() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Pointer(
              yield this.wasm.stake_pointer(),
              $outer._ctx
            );
          });
        }
        toAddress() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Address(
              yield this.wasm.to_address(),
              $outer._ctx
            );
          });
        }
        static fromAddress(addr) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PointerAddress(
              yield WasmV4.PointerAddress.from_address(addr.wasm),
              $outer._ctx
            );
          });
        }
        static new(network, payment, stake) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PointerAddress(
              yield WasmV4.PointerAddress.new(
                network,
                payment.wasm,
                stake.wasm
              ),
              $outer._ctx
            );
          });
        }
      }
      return PointerAddress;
    })();
    this.EnterpriseAddress = (() => {
      const $outer = this;
      class EnterpriseAddress extends Ptr {
        paymentCred() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Credential(
              yield this.wasm.payment_cred(),
              $outer._ctx
            );
          });
        }
        toAddress() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Address(
              yield this.wasm.to_address(),
              $outer._ctx
            );
          });
        }
        static fromAddress(addr) {
          return __awaiter(this, void 0, void 0, function* () {
            return new EnterpriseAddress(
              yield WasmV4.EnterpriseAddress.from_address(addr.wasm),
              $outer._ctx
            );
          });
        }
        static new(network, payment) {
          return __awaiter(this, void 0, void 0, function* () {
            return new EnterpriseAddress(
              yield WasmV4.EnterpriseAddress.new(network, payment.wasm),
              $outer._ctx
            );
          });
        }
      }
      return EnterpriseAddress;
    })();
    this.Pointer = (() => {
      const $outer = this;
      class Pointer extends Ptr {
        slot() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.slot();
          });
        }
        txIndex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.tx_index();
          });
        }
        certIndex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.cert_index();
          });
        }
        static new(slot, txIndex, certIndex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Pointer(
              yield WasmV4.Pointer.new(slot, txIndex, certIndex),
              $outer._ctx
            );
          });
        }
      }
      return Pointer;
    })();
    this.Vkey = (() => {
      const $outer = this;
      class Vkey extends Ptr {
        static new(pk) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Vkey(yield WasmV4.Vkey.new(pk.wasm), $outer._ctx);
          });
        }
      }
      return Vkey;
    })();
    this.Ed25519Signature = (() => {
      const $outer = this;
      class Ed25519Signature extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Ed25519Signature(
              yield WasmV4.Ed25519Signature.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return Ed25519Signature;
    })();
    this.Vkeywitness = (() => {
      const $outer = this;
      class Vkeywitness extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        signature() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519Signature(
              yield this.wasm.signature(),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Vkeywitness(
              yield WasmV4.Vkeywitness.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new(vkey, signature) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Vkeywitness(
              yield WasmV4.Vkeywitness.new(vkey.wasm, signature.wasm),
              $outer._ctx
            );
          });
        }
      }
      return Vkeywitness;
    })();
    this.Vkeywitnesses = (() => {
      const $outer = this;
      class Vkeywitnesses extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(item.wasm);
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Vkeywitness(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Vkeywitnesses(
              yield WasmV4.Vkeywitnesses.new(),
              $outer._ctx
            );
          });
        }
      }
      return Vkeywitnesses;
    })();
    this.BootstrapWitness = (() => {
      const $outer = this;
      class BootstrapWitness extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new BootstrapWitness(
              yield WasmV4.BootstrapWitness.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new(vkey, signature, chainCode, attributes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new BootstrapWitness(
              yield WasmV4.BootstrapWitness.new(
                vkey.wasm,
                signature.wasm,
                chainCode,
                attributes
              ),
              $outer._ctx
            );
          });
        }
      }
      return BootstrapWitness;
    })();
    this.BootstrapWitnesses = (() => {
      const $outer = this;
      class BootstrapWitnesses extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(item.wasm);
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BootstrapWitness(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new BootstrapWitnesses(
              yield WasmV4.BootstrapWitnesses.new(),
              $outer._ctx
            );
          });
        }
      }
      return BootstrapWitnesses;
    })();
    this.TransactionWitnessSet = (() => {
      const $outer = this;
      class TransactionWitnessSet extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionWitnessSet(
              yield WasmV4.TransactionWitnessSet.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        plutusScripts() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PlutusScripts(
              yield this.wasm.plutus_scripts(),
              $outer._ctx
            );
          });
        }
        redeemers() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Redeemers(
              yield this.wasm.redeemers(),
              $outer._ctx
            );
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionWitnessSet(
              yield WasmV4.TransactionWitnessSet.from_hex(hex),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        setBootstraps(bootstraps) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_bootstraps(bootstraps.wasm);
          });
        }
        bootstraps() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BootstrapWitnesses(
              yield this.wasm.bootstraps(),
              $outer._ctx
            );
          });
        }
        setPlutusData(plutusData) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_plutus_data(plutusData.wasm);
          });
        }
        plutusData() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.plutus_data();
            if (wasm) {
              return new $outer.PlutusList(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        setVkeys(vkeywitnesses) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_vkeys(vkeywitnesses.wasm);
          });
        }
        vkeys() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Vkeywitnesses(
              yield this.wasm.vkeys(),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionWitnessSet(
              yield WasmV4.TransactionWitnessSet.new(),
              $outer._ctx
            );
          });
        }
      }
      return TransactionWitnessSet;
    })();
    this.Transaction = (() => {
      const $outer = this;
      class Transaction extends Ptr {
        body() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionBody(
              yield this.wasm.body(),
              $outer._ctx
            );
          });
        }
        witnessSet() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionWitnessSet(
              yield this.wasm.witness_set(),
              $outer._ctx
            );
          });
        }
        isValid() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.is_valid();
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        auxiliaryData() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.AuxiliaryData(
              yield this.wasm.auxiliary_data(),
              $outer._ctx
            );
          });
        }
        static new(body, witnessSet, auxiliary) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Transaction(
              yield WasmV4.Transaction.new(
                body.wasm,
                witnessSet.wasm,
                auxiliary === null || auxiliary === void 0
                  ? void 0
                  : auxiliary._wasm
              ),
              $outer._ctx
            );
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Transaction(
              yield WasmV4.Transaction.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Transaction(
              yield WasmV4.Transaction.from_hex(hex),
              $outer._ctx
            );
          });
        }
      }
      return Transaction;
    })();
    /**
     * `NetworkInfo` is not exported by @emurgo/cls-mobile-bridge,
     * so we create our own fake implementation. The calls made to this object are not
     * proxied to WASM.
     */
    this.NetworkInfo = (() => {
      const $outer = this;
      class NetworkInfo extends Ptr {
        networkId() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.network_id();
          });
        }
        protocolMagic() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.protocol_magic();
          });
        }
        static new(networkId, protocolMagic) {
          return __awaiter(this, void 0, void 0, function* () {
            return new NetworkInfo(
              yield WasmV4.NetworkInfo.new(networkId, protocolMagic),
              $outer._ctx
            );
          });
        }
        static testnet() {
          return __awaiter(this, void 0, void 0, function* () {
            return new NetworkInfo(
              yield WasmV4.NetworkInfo.testnet(),
              $outer._ctx
            );
          });
        }
        static testnetPreview() {
          return __awaiter(this, void 0, void 0, function* () {
            return new NetworkInfo(
              yield WasmV4.NetworkInfo.testnet_preview(),
              $outer._ctx
            );
          });
        }
        static testnetPreprod() {
          return __awaiter(this, void 0, void 0, function* () {
            return new NetworkInfo(
              yield WasmV4.NetworkInfo.testnet_preprod(),
              $outer._ctx
            );
          });
        }
        static mainnet() {
          return __awaiter(this, void 0, void 0, function* () {
            return new NetworkInfo(
              yield WasmV4.NetworkInfo.mainnet(),
              $outer._ctx
            );
          });
        }
      }
      return NetworkInfo;
    })();
    this.MetadataList = (() => {
      const $outer = this;
      class MetadataList extends Ptr {
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new MetadataList(
              yield WasmV4.MetadataList.new(),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new MetadataList(
              yield WasmV4.MetadataList.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionMetadatum(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(item) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.add(item.wasm);
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
      }
      return MetadataList;
    })();
    this.NativeScript = (() => {
      const $outer = this;
      class NativeScript extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        hash() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519KeyHash(
              yield this.wasm.hash(),
              $outer._ctx
            );
          });
        }
        kind() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.kind();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new NativeScript(
              yield WasmV4.NativeScript.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
      }
      return NativeScript;
    })();
    this.NativeScripts = (() => {
      const $outer = this;
      class NativeScripts extends Ptr {
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.NativeScript(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(elem.wasm);
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new NativeScripts(
              yield WasmV4.NativeScripts.new(),
              $outer._ctx
            );
          });
        }
      }
      return NativeScripts;
    })();
    this.PlutusScript = (() => {
      const $outer = this;
      class PlutusScript extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.to_bytes();
          });
        }
        bytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.wasm.bytes();
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScript(
              yield WasmV4.PlutusScript.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScript(
              yield WasmV4.PlutusScript.new(bytes),
              $outer._ctx
            );
          });
        }
      }
      return PlutusScript;
    })();
    this.PlutusScripts = (() => {
      const $outer = this;
      class PlutusScripts extends Ptr {
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PlutusScript(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(elem.wasm);
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScripts(
              yield WasmV4.PlutusScripts.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScripts(
              yield WasmV4.PlutusScripts.new(),
              $outer._ctx
            );
          });
        }
      }
      return PlutusScripts;
    })();
    /**
     * WARNING! This type is here to comply with the exported interface, but it is not implemented
     */
    this.TxInputsBuilder = (() => {
      const $outer = this;
      class TxInputsBuilder extends Ptr {
        addInput(address, input, amount) {
          return this.wasm.add_input(address.wasm, input.wasm, amount.wasm);
        }
        inputs() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionInputs(
              yield this.wasm.inputs(),
              $outer._ctx
            );
          });
        }
        addPlutusScriptInput(witness, input, amount) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.wasm.add_plutus_script_input(
              witness.wasm,
              input.wasm,
              amount.wasm
            );
          });
        }
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new TxInputsBuilder(
              yield WasmV4.TxInputsBuilder.new(),
              $outer._ctx
            );
          });
        }
      }
      return TxInputsBuilder;
    })();
    this.DataCost = (() => {
      const $outer = this;
      class DataCost extends Ptr {
        static newCoinsPerWord(coinsPerWord) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DataCost(
              yield WasmV4.DataCost.new_coins_per_word(coinsPerWord.wasm),
              $outer._ctx
            );
          });
        }
        static newCoinsPerByte(coinsPerByte) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DataCost(
              yield WasmV4.DataCost.new_coins_per_byte(coinsPerByte.wasm),
              $outer._ctx
            );
          });
        }
        coinsPerByte() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.coins_per_byte(),
              $outer._ctx
            );
          });
        }
      }
      return DataCost;
    })();
    this.UnitInterval = (() => {
      const $outer = this;
      class UnitInterval extends Ptr {
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            return new UnitInterval(
              yield WasmV4.UnitInterval.from_bytes(bytes),
              $outer._ctx
            );
          });
        }
        static fromHex(hex) {
          return __awaiter(this, void 0, void 0, function* () {
            return new UnitInterval(
              yield WasmV4.UnitInterval.from_hex(hex),
              $outer._ctx
            );
          });
        }
        static fromJson(json) {
          return __awaiter(this, void 0, void 0, function* () {
            return new UnitInterval(
              yield WasmV4.UnitInterval.from_json(json),
              $outer._ctx
            );
          });
        }
        static new(numerator, denominator) {
          return __awaiter(this, void 0, void 0, function* () {
            return new UnitInterval(
              yield WasmV4.UnitInterval.new(numerator.wasm, denominator.wasm),
              $outer._ctx
            );
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toJson() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_json();
          });
        }
        numerator() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(yield this.wasm.numerator(), $outer._ctx);
          });
        }
        denominator() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.BigNum(
              yield this.wasm.denominator(),
              $outer._ctx
            );
          });
        }
      }
      return UnitInterval;
    })();
    this.TransactionBuilderConfigBuilder = (() => {
      const $outer = this;
      class TransactionBuilderConfigBuilder extends Ptr {
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield WasmV4.TransactionBuilderConfigBuilder.new(),
              $outer._ctx
            );
          });
        }
        feeAlgo(linearFee) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.fee_algo(linearFee.wasm),
              $outer._ctx
            );
          });
        }
        coinsPerUtxoWord(coinsPerUtxoWord) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.coins_per_utxo_word(coinsPerUtxoWord.wasm),
              $outer._ctx
            );
          });
        }
        coinsPerUtxoByte(coinsPerUtxoByte) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.coins_per_utxo_byte(coinsPerUtxoByte.wasm),
              $outer._ctx
            );
          });
        }
        exUnitPrices(exUnitPrices) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.ex_unit_prices(exUnitPrices.wasm),
              $outer._ctx
            );
          });
        }
        poolDeposit(poolDeposit) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.pool_deposit(poolDeposit.wasm),
              $outer._ctx
            );
          });
        }
        keyDeposit(keyDeposit) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.key_deposit(keyDeposit.wasm),
              $outer._ctx
            );
          });
        }
        maxValueSize(maxValueSize) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.max_value_size(maxValueSize),
              $outer._ctx
            );
          });
        }
        maxTxSize(maxTxSize) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.max_tx_size(maxTxSize),
              $outer._ctx
            );
          });
        }
        preferPureChange(preferPureChange) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionBuilderConfigBuilder(
              yield this.wasm.prefer_pure_change(preferPureChange),
              $outer._ctx
            );
          });
        }
        build() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionBuilderConfig(
              yield this.wasm.build(),
              $outer._ctx
            );
          });
        }
      }
      return TransactionBuilderConfigBuilder;
    })();
    this.TransactionBuilderConfig = (() => {
      class TransactionBuilderConfig extends Ptr {}
      return TransactionBuilderConfig;
    })();
    this.PlutusWitness = (() => {
      const $outer = this;
      class PlutusWitness extends Ptr {
        static new(script, datum, redeemer) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusWitness(
              yield WasmV4.PlutusWitness.new(
                script.wasm,
                datum.wasm,
                redeemer.wasm
              ),
              $outer._ctx
            );
          });
        }
        static newWithRef(script, datum, redeemer) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusWitness(
              yield WasmV4.PlutusWitness.new_with_ref(
                script,
                datum,
                redeemer.wasm
              ),
              $outer._ctx
            );
          });
        }
        static newWithoutDatum(script, redeemer) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusWitness(
              yield WasmV4.PlutusWitness.new_without_datum(
                script.wasm,
                redeemer.wasm
              ),
              $outer._ctx
            );
          });
        }
        static newWithRefWithoutDatum(script, redeemer) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusWitness(
              yield WasmV4.PlutusWitness.new_with_ref_without_datum(
                script,
                redeemer.wasm
              ),
              $outer._ctx
            );
          });
        }
        script() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.PlutusScript(
              yield this.wasm.script(),
              $outer._ctx
            );
          });
        }
        datum() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.datum();
            if (wasm) {
              return new $outer.PlutusData(wasm, $outer._ctx);
            } else {
              return undefined;
            }
          });
        }
        redeemer() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Redeemer(yield this.wasm.redeemer(), $outer._ctx);
          });
        }
      }
      return PlutusWitness;
    })();
    this.PlutusScriptSource = (() => {
      const $outer = this;
      class PlutusScriptSource extends Ptr {
        static new(script) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScriptSource(
              yield WasmV4.PlutusScriptSource.new(script.wasm),
              $outer._ctx
            );
          });
        }
        static newRefInput(scriptHash, input) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScriptSource(
              yield WasmV4.PlutusScriptSource.new_ref_input(
                scriptHash.wasm,
                input.wasm
              ),
              $outer._ctx
            );
          });
        }
        static newRefInputWithLangVer(scriptHash, input, langVer) {
          return __awaiter(this, void 0, void 0, function* () {
            return new PlutusScriptSource(
              yield WasmV4.PlutusScriptSource.new_ref_input_with_lang_ver(
                scriptHash.wasm,
                input.wasm,
                langVer.wasm
              ),
              $outer._ctx
            );
          });
        }
      }
      return PlutusScriptSource;
    })();
    this.DatumSource = (() => {
      const $outer = this;
      class DatumSource extends Ptr {
        static new(datum) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DatumSource(
              yield WasmV4.DatumSource.new(datum.wasm),
              $outer._ctx
            );
          });
        }
        static newRefInput(input) {
          return __awaiter(this, void 0, void 0, function* () {
            return new DatumSource(
              yield WasmV4.DatumSource.new_ref_input(input.wasm),
              $outer._ctx
            );
          });
        }
      }
      return DatumSource;
    })();
    this.ExUnitPrices = (() => {
      const $outer = this;
      class ExUnitPrices extends Ptr {
        static new(memPrice, stepPrice) {
          return __awaiter(this, void 0, void 0, function* () {
            return new ExUnitPrices(
              yield WasmV4.ExUnitPrices.new(memPrice.wasm, stepPrice.wasm),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.ExUnitPrices.from_bytes(bytes);
            return wasm ? new ExUnitPrices(wasm, $outer._ctx) : undefined;
          });
        }
        static fromHex(hexStr) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.ExUnitPrices.from_hex(hexStr);
            return wasm ? new ExUnitPrices(wasm, $outer._ctx) : undefined;
          });
        }
        static fromJson(json) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.ExUnitPrices.from_json(json);
            return wasm ? new ExUnitPrices(wasm, $outer._ctx) : undefined;
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        toJson() {
          return __awaiter(this, void 0, void 0, function* () {
            const json = yield this.wasm.to_json();
            return json ? json : undefined;
          });
        }
        memPrice() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.UnitInterval(
              yield this.wasm.mem_price(),
              $outer._ctx
            );
          });
        }
        stepPrice() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.UnitInterval(
              yield this.wasm.step_price(),
              $outer._ctx
            );
          });
        }
      }
      return ExUnitPrices;
    })();
    this.FixedTransaction = (() => {
      const $outer = this;
      class FixedTransaction extends Ptr {
        static new(rawBody, rawWitnessSet, isValid) {
          return __awaiter(this, void 0, void 0, function* () {
            return new FixedTransaction(
              yield WasmV4.FixedTransaction.new(
                rawBody,
                rawWitnessSet,
                isValid
              ),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.FixedTransaction.from_bytes(bytes);
            return wasm ? new FixedTransaction(wasm, $outer._ctx) : undefined;
          });
        }
        static fromHex(hexStr) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.FixedTransaction.from_hex(hexStr);
            return wasm ? new FixedTransaction(wasm, $outer._ctx) : undefined;
          });
        }
        static newWithAuxiliary(
          rawBody,
          rawWitnessSet,
          rawAuxiliaryData,
          isValid
        ) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.FixedTransaction.new_with_auxiliary(
              rawBody,
              rawWitnessSet,
              rawAuxiliaryData,
              isValid
            );
            return wasm ? new FixedTransaction(wasm, $outer._ctx) : undefined;
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        body() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionBody(
              yield this.wasm.body(),
              $outer._ctx
            );
          });
        }
        rawBody() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.raw_body();
          });
        }
        setBody(body) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_body(body);
          });
        }
        setWitnessSet(witnessSet) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_witness_set(witnessSet);
          });
        }
        witnessSet() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionWitnessSet(
              yield this.wasm.witness_set(),
              $outer._ctx
            );
          });
        }
        rawWitnessSet() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.raw_witness_set();
          });
        }
        setIsValid(isValid) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_is_valid(isValid);
          });
        }
        isValid() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.is_valid();
          });
        }
        setAuxiliaryData(auxiliaryData) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.set_auxiliary_data(auxiliaryData);
          });
        }
        auxiliaryData() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.auxiliary_data();
            return wasm
              ? new $outer.AuxiliaryData(wasm, $outer._ctx)
              : undefined;
          });
        }
        rawAuxiliaryData() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.raw_auxiliary_data();
          });
        }
      }
      return FixedTransaction;
    })();
    this.TransactionUnspentOutput = (() => {
      const $outer = this;
      class TransactionUnspentOutput extends Ptr {
        static new(input, output) {
          return __awaiter(this, void 0, void 0, function* () {
            return new TransactionUnspentOutput(
              yield WasmV4.TransactionUnspentOutput.new(
                input.wasm,
                output.wasm
              ),
              $outer._ctx
            );
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.TransactionUnspentOutput.from_bytes(
              bytes
            );
            return wasm
              ? new TransactionUnspentOutput(wasm, $outer._ctx)
              : undefined;
          });
        }
        static fromHex(hexStr) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.TransactionUnspentOutput.from_hex(hexStr);
            return wasm
              ? new TransactionUnspentOutput(wasm, $outer._ctx)
              : undefined;
          });
        }
        static fromJson(json) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.TransactionUnspentOutput.from_json(json);
            return wasm
              ? new TransactionUnspentOutput(wasm, $outer._ctx)
              : undefined;
          });
        }
        toJson() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_json();
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        input() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionInput(
              yield this.wasm.input(),
              $outer._ctx
            );
          });
        }
        output() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.TransactionOutput(
              yield this.wasm.output(),
              $outer._ctx
            );
          });
        }
      }
      return TransactionUnspentOutput;
    })();
    this.Ed25519KeyHashes = (() => {
      const $outer = this;
      class Ed25519KeyHashes extends Ptr {
        static new() {
          return __awaiter(this, void 0, void 0, function* () {
            return new Ed25519KeyHashes(
              yield WasmV4.Ed25519KeyHashes.new(),
              $outer._ctx
            );
          });
        }
        static fromJson(json) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.Ed25519KeyHashes.from_json(json);
            return wasm ? new Ed25519KeyHashes(wasm, $outer._ctx) : undefined;
          });
        }
        static fromBytes(bytes) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.Ed25519KeyHashes.from_bytes(bytes);
            return wasm ? new Ed25519KeyHashes(wasm, $outer._ctx) : undefined;
          });
        }
        static fromHex(hexStr) {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield WasmV4.Ed25519KeyHashes.from_hex(hexStr);
            return wasm ? new Ed25519KeyHashes(wasm, $outer._ctx) : undefined;
          });
        }
        toBytes() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_bytes();
          });
        }
        toHex() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_hex();
          });
        }
        toJson() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.to_json();
          });
        }
        len() {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.len();
          });
        }
        get(index) {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Ed25519KeyHash(
              yield this.wasm.get(index),
              $outer._ctx
            );
          });
        }
        add(elem) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this.wasm.add(elem.wasm);
          });
        }
        toOption() {
          return __awaiter(this, void 0, void 0, function* () {
            const wasm = yield this.wasm.to_option();
            return wasm
              ? new $outer.Ed25519KeyHashes(wasm, $outer._ctx)
              : undefined;
          });
        }
      }
      return Ed25519KeyHashes;
    })();
    this.TxBuilderConstants = (() => {
      const $outer = this;
      class TxBuilderConstants extends Ptr {
        static plutusDefaultCostModels() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Costmdls(
              yield WasmV4.TxBuilderConstants.plutus_default_cost_models(),
              $outer._ctx
            );
          });
        }
        static plutusAlonzoCostModels() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Costmdls(
              yield WasmV4.TxBuilderConstants.plutus_alonzo_cost_models(),
              $outer._ctx
            );
          });
        }
        static plutusVasilCostModels() {
          return __awaiter(this, void 0, void 0, function* () {
            return new $outer.Costmdls(
              yield WasmV4.TxBuilderConstants.plutus_vasil_cost_models(),
              $outer._ctx
            );
          });
        }
      }
      return TxBuilderConstants;
    })();
    this._ctx = ctx;
  }
  encryptWithPassword(password, salt, nonce, data) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield WasmV4.encrypt_with_password(password, salt, nonce, data);
    });
  }
  decryptWithPassword(password, salt) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield WasmV4.decrypt_with_password(password, salt);
    });
  }
  encodeJsonStrToMetadatum(json, schema) {
    return __awaiter(this, void 0, void 0, function* () {
      const wasm = yield WasmV4.encode_json_str_to_metadatum(json, schema);
      return yield Promise.resolve(
        new this.TransactionMetadatum(wasm, this._ctx)
      );
    });
  }
  minAdaRequired(value, hasDataHash, coinsPerUtxoWord) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.BigNum(
        yield WasmV4.min_ada_required(
          value.wasm,
          hasDataHash,
          coinsPerUtxoWord.wasm
        ),
        this._ctx
      );
    });
  }
  minAdaForOutput(output, dataCost) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.BigNum(
        yield WasmV4.min_ada_for_output(output.wasm, dataCost.wasm),
        this._ctx
      );
    });
  }
  hashTransaction(txBody) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.TransactionHash(
        yield WasmV4.hash_transaction(txBody.wasm),
        this._ctx
      );
    });
  }
  hashPlutusData(plutusData) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.DataHash(
        yield WasmV4.hash_plutus_data(plutusData.wasm),
        this._ctx
      );
    });
  }
  hashScriptData(redeemers, costModels, datums) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.ScriptDataHash(
        yield WasmV4.hash_script_data(
          redeemers.wasm,
          costModels.wasm,
          datums === null || datums === void 0 ? void 0 : datums.wasm
        ),
        this._ctx
      );
    });
  }
  makeVkeyWitness(txBodyHash, sk) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.Vkeywitness(
        yield WasmV4.make_vkey_witness(txBodyHash.wasm, sk.wasm),
        this._ctx
      );
    });
  }
  makeIcarusBootstrapWitness(txBodyHash, addr, key) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.BootstrapWitness(
        yield WasmV4.make_icarus_bootstrap_witness(
          txBodyHash.wasm,
          addr.wasm,
          key.wasm
        ),
        this._ctx
      );
    });
  }
  decodeMetadatumToJsonStr(metadatum, schema) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield WasmV4.decode_metadatum_to_json_str(metadatum.wasm, schema);
    });
  }
  encodeJsonStrToPlutusDatum(json, schema) {
    return __awaiter(this, void 0, void 0, function* () {
      return new this.PlutusData(
        yield WasmV4.encode_json_str_to_plutus_datum(json, schema),
        this._ctx
      );
    });
  }
}
exports.MobileWasmModuleProxy = MobileWasmModuleProxy;
