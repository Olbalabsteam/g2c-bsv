"use strict";

const version = 'v' + require('./package.json').version
const bsv = {
  version,
  versionGuard : function (version) {
    if (typeof version !== "undefined") {
      var message = `
        More than one instance of bsv found.
        Please make sure to require bsv and check that submodules do
        not also include their own bsv dependency.`
      console.warn(message)
    }
  },
  // crypto
  crypto: {
    BN: require('./lib/crypto/bn'),
    ECDSA: require('./lib/crypto/ecdsa'),
    Hash: require('./lib/crypto/hash'),
    Random: require('./lib/crypto/random'),
    Point: require('./lib/crypto/point'),
    Signature: require('./lib/crypto/signature'),
  },
  // encoding
  encoding: {
    
    Base58: require('./lib/encoding/base58'),
    Base58Check: require('./lib/encoding/base58check'),
    BufferReader: require('./lib/encoding/bufferreader'),
    BufferWriter: require('./lib/encoding/bufferwriter'),
    Varint: require('./lib/encoding/varint')
  },
  // utilities
  util: {
    js: require('./lib/util/js'),
    preconditions: require('./lib/util/preconditions')
  },
  // main bitcoin library
  Address: require('./lib/address'),
  Block: require('./lib/block'),
  MerkleBlock: require('./lib/block/merkleblock'),
  BlockHeader: require('./lib/block/blockheader'),
  HDPrivateKey: require('./lib/hdprivatekey.js'),
  HDPublicKey: require('./lib/hdpublickey.js'),
  Networks: require('./lib/networks'),
  Opcode: require('./lib/opcode'),
  PrivateKey: require('./lib/privatekey'),
  PublicKey: require('./lib/publickey'),
  Script: require('./lib/script'),
  Transaction: { ...require('./lib/transaction'), sighash: require('./lib/transaction/sighash') },
  // errors thrown by the library
  errors: require('./lib/errors'),
  // dependencies, subject to change
  deps: {
    bnjs: require('bn.js'),
    bs58: require('bs58'),
    Buffer: Buffer,
    elliptic: require('elliptic'),
    _: require('./lib/util/_'),
  },
}


bsv.versionGuard(global._bsv)
global._bsv = bsv.version



module.exports = bsv


