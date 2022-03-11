import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 14,
  //   risk: 5,
  //   lpSymbol: 'WOOD-IRID LP',
  //   lpAddresses: {
  //     250: '0xD592bfB50ad10088A428F1a4e74213090fC4A6dC',
  //   },
  //   tokenSymbol: 'IRID',
  //   tokenAddresses: {
  //     250: '0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WOOD-USDC LP',
    lpAddresses: {
      250: '0x3504c7b22ac899b7a25b2e658f27b0b0ee3f5152',
    },
    tokenSymbol: 'WOOD',
    tokenAddresses: {
      250: '0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'WOOD-WMATIC LP',
    lpAddresses: {
      250: '0x3504c7b22ac899b7a25b2e658f27b0b0ee3f5152',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      250: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'WOOD-WETH LP',
  //   lpAddresses: {
  //     250: '0x1996ABaFb1ce1de7B5357eC9D281Bc378A0b8DEd',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     250: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },

  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'WMATIC-USDC LP',
  //   lpAddresses: {
  //     250: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     250: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 4,
  //   risk: 5,
  //   lpSymbol: 'WETH-USDC LP',
  //   lpAddresses: {
  //     250: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     250: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // // {
  // //   pid: 1,
  // //   risk: 5,
  // //   lpSymbol: 'WOOD-BNB LP',
  // //   lpAddresses: {
  // //     97: '',
  // //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  // //   },
  // //   tokenSymbol: 'WOOD',
  // //   tokenAddresses: {
  // //     97: '',
  // //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  // //   },
  // //   quoteTokenSymbol: QuoteToken.BNB,
  // //   quoteTokenAdresses: contracts.wbnb,
  // // },
  // // {
  // //   pid: 2,
  // //   risk: 3,
  // //   lpSymbol: 'USDC-USDT LP',
  // //   lpAddresses: {
  // //     250: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  // //   },
  // //   tokenSymbol: 'USDC',
  // //   tokenAddresses: {
  // //     250: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  // //   },
  // //   quoteTokenSymbol: QuoteToken.BUSD,
  // //   quoteTokenAdresses: contracts.busd,
  // // },
  // // {
  // //   pid: 12,
  // //   risk: 5,
  // //   isTokenOnly: true,
  // //   lpSymbol: 'WOOD',
  // //   lpAddresses: {
  // //     97: '',
  // //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // WOOD-BUSD LP
  // //   },
  // //   tokenSymbol: 'WOOD',
  // //   tokenAddresses: {
  // //     97: '',
  // //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  // //   },
  // //   quoteTokenSymbol: QuoteToken.BUSD,
  // //   quoteTokenAdresses: contracts.busd,
  // // },
  // {
  //   pid: 5,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'WOOD',
  //   lpAddresses: {
  //     250: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00'
  //   },
  //   tokenSymbol: 'WOOD',
  //   tokenAddresses: {
  //     250: '0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 6,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WMATIC',
  //   lpAddresses: {
  //     250: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     250: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 7,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AAVE',
  //   lpAddresses: {
  //     250: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
  //   },
  //   tokenSymbol: 'AAVE',
  //   tokenAddresses: {
  //     250: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 8,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WETH',
  //   lpAddresses: {
  //     250: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     250: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 9,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBTC',
  //   lpAddresses: {
  //     250: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     250: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },


  // {
  //   pid: 10,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'QUICK',
  //   lpAddresses: {
  //     250: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
  //   },
  //   tokenSymbol: 'QUICK',
  //   tokenAddresses: {
  //     250: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 11,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     250: '0x2cf7252e74036d1da831d11089d326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     250: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 12,
  //   risk: 1,
  //   isTokenOnly: true,
  //   isCommunity: true,
  //   lpSymbol: 'PolyDoge',
  //   lpAddresses: {
  //     250: '0x7b3E67E63906d8576466c2f48158A30be0a9e36c'
  //   },
  //   tokenSymbol: 'PolyDoge',
  //   tokenAddresses: {
  //     250: '0x8A953CfE442c5E8855cc6c61b1293FA648BAE472'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 13,
  //   risk: 69,
  //   lpSymbol: 'VERT-USDC LP',
  //   lpAddresses: {
  //     250: '0x668269d6E5D2c2dE31D132Ac218044211643622B'
  //   },
  //   tokenSymbol: 'VERT',
  //   tokenAddresses: {
  //     250: '0x72572ccf5208b59f4bcc14e6653d8c31cd1fc5a0'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },




]

export default farms
