export const menuItems = [
  {
    name: 'Commmon Master',
    id: 1,
    url:'',
    class:'Warp Knitting',
    children: [
      {
        name: 'Machine Related',
        id: 4,
        url:'',
        class:'Warp Knitting',
        children: [
          {
            name: 'Machine Master',
            id: 8,
            url:'machine-master',
            class:'Warp Knitting',
            children: null
          }
        ]
      }
    ]
  },
  {
    name: 'Transaction',
    id: 2,
    url:'',
    class:'Warp Knitting',
    children: [
      {
        name: 'Warp Knitting Production',
        id: 5,
        url:'',
        class:'Warp Knitting',
        children: 
        [
          {
            name: 'Start WK Production',
            id: 9,
            url:'start-wk-production',
            class:'Warp Knitting',
            children: null
          },
          {
            name: 'Production Log',
            id: 10,
            url:'production-dashboard',
            class:'Warp Knitting',
            children: null
          },
          {
            name: 'Inward From Production',
            id: 11,
            url:'inward-production-dashboard',
            class:'Warp Knitting',
            children: null
          }
        ]
      },
      // {
      //   name: 'Warping',
      //   id: 6,
      //   children: null
      // },
      // {
      //   name: 'X-Yarn',
      //   id: 7,
      //   children: null
      // }
    ]
  },
  {
    name: 'Transaction',
    id: 12,
    url:'',
    class:'Trading',
    children: [
      {
        name: 'Sales',
        id: 13,
        url:'',
        class:'Trading',
        children: 
        [
          {
            name: 'Order',
            id: 14,
            url:'order-dashboard',
            class:'Trading',
            children: null
          },
        ]
      },
     
    ]
  },
  {
    name: 'Transaction',
    id: 15,
    url:'',
    class:'WK',
    children: [
      {
        name: 'Warping',
        id: 16,
        url:'',
        class:'WK',
        children: 
        [
          {
            name: 'Machine Planning',
            id: 17,
            url:'',
            class:'WK',
            children: null
          },
          {
            name: 'Start Warping Production',
            id: 18,
            url:'start-warping-production',
            class:'WK',
            children: null
          },
          {
            name: 'Inward from Production',
            id: 19,
            url:'warping-inward-production',
            class:'WK',
            children: null
          },
        ]
      },
     
    ]
  },
  {
    name: 'Logout',
    id: 3,
    url:'login',
    class:'',
    children: null
  },
];
