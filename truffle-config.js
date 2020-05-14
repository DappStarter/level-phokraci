require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strike crouch sad hour gesture brave equal genius'; 
let testAccounts = [
"0xd89515c83c73ea626c08463fabe28572c01aa6943c32333062d21acf2f748d20",
"0xa073ea9b3633eb0a48f609db21f0cee539bed863c48f6c118a2f05126336d8f1",
"0x4a309e711a6acf34308026d9ab5fa8daa1295694ec05ced14de7dadf83df9fd1",
"0x1064770f1df3b56183b1a38d6e5b7dfdcd49394235b3bc0b67a4f3b7c6bbf39b",
"0xfe039e081909dc9428c1eabe20dc05c70fea5f54a2daa5dac94c4c83cfd8497d",
"0x29cc61626a91c7905a3f732786355579a462a9ecbc8347657dbbc499a29c538f",
"0x6dde8b1b05f683df3a925556f66c3c27a5eb9fbfad82c8bb6a66595c28c00872",
"0x0b0f40fcdeef04f8146a057b694451ab0599b5a537d907290ee547ec481cf6b6",
"0x3d3a366734dbbf362b66560a6b51cc91d75b0cec8365b6362595f25350317ba1",
"0x26bcaaefd45a40041665955e8baecc93dbaecf4d602ebd6931fb9bbbefa4a795"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
