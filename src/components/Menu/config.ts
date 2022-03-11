import { MenuEntry } from 'platinumfinancev2'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
 
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Community Pools',
  //   icon: 'GroupsIcon',
  //   href: '/community',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickChart',
        href: 'https://quickchart.app/token/0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64',
      },
      {
        label: 'PolyChart',
        href: 'https://app.polychart.io/explorer/polygon/0x8c79d1ccb5e5ea4df5e0ff14b59a305f2808ac93',
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64-polygon',
      },
      {
        label: 'PooCoin',
        href: 'https://polygon.poocoin.app/tokens/0x37D0A5A4a57bB33472Aa5A9f65e8c48Ec7C91b64',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/polydaedalus',
      // },
      {
        label: 'Docs',
        href: 'https://platinum-finance.gitbook.io/platinum-finance/',
      },
      {
        label: 'Vfat.tools',
        href: 'https://vfat.tools/polygon/platinumfinance/',
      }
    ],
  },
]

export default config
