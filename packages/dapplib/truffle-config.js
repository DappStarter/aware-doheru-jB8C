require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stone dash pave purity inside light army gasp'; 
let testAccounts = [
"0x86a5323053ab3b2e6af3f86f4f5a728b94d22ad60123f4344093554f55fa38fd",
"0xd2a8d0b645b881990d0a47f2e502d034b54cb443b4e278102e56b9172025bef5",
"0x806b7a7e4daa298b7fd5966148fb456b462edcc98671b2cba7c4a7eee7d6221c",
"0x0ffd40934517445be653cc8aa081017964d180c84c3b7072d4b7a0fbaa1984a0",
"0x4818d211c584ddc97171df4ddfd839017993c31e55f577e1f0287bcb22836490",
"0xbfe65f28066d99ebcb17d265bd67f02a5ceec87cfdb0467d45e2f7c8403f8666",
"0x999b4ce850d3cf26ae9b4aba61161ae4bb0723d3f66d6ace9f420da993b06f14",
"0xe6683c3180f379c328ba616277bd13eba7020fd6d5956d6fcadd25b199757e96",
"0xa7bac14af91620511ca0f875edee8f0c717010942753739858bb998d991ace70",
"0x752da3b81db0c5408224f7a34380f9d3f85ca1fef9dc17e30193138afa62de83"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

