export const menuItems = [
  {
    name: 'Commmon Master',
    id: 1,
    url:'',
    children: [
      {
        name: 'Machine Related',
        id: 4,
        url:'',
        children: [
          {
            name: 'Machine Master',
            id: 8,
            url:'machine-master',
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
    children: [
      {
        name: 'Warp Knitting Production',
        id: 5,
        url:'',
        children: 
        [
          {
            name: 'Start WK Production',
            id: 9,
            url:'',
            children: null
          },
          {
            name: 'Production Log',
            id: 10,
            url:'production-dashboard',
            children: null
          },
          {
            name: 'Inward From Production',
            id: 11,
            url:'inward-production-dashboard',
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
    name: 'Logout',
    id: 3,
    url:'login',
    children: null
  },
];
