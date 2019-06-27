const initialState = [
    {
      id: 'item-id-apple',
      thumbnail: 'https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_960_720.jpg',
      name: 'Apple',
      unitPrice: 0.8,
      discount: null,
    },
    {
      id: 'item-id-banana',
      thumbnail: 'https://cdn.pixabay.com/photo/2013/07/12/16/57/banana-151553_960_720.png',
      name: 'Banana',
      unitPrice: 1.2,
      discount: null,
    },
    {
        id: 'item-id-strawberry',
        thumbnail: 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg',
        name: 'Strawberry',
        unitPrice: 0.2,
        discount: null,
      },
      {
        id: 'item-id-blackcurrant',
        thumbnail: 'https://cdn.pixabay.com/photo/2014/07/08/14/13/spinarum-387439_960_720.jpg',
        name: 'Blackcurrant',
        unitPrice: 0.30,
        discount: null,
      },
      {
        id: 'item-id-currant',
        thumbnail: 'https://cdn.pixabay.com/photo/2014/06/19/16/55/currant-372626_960_720.jpg',
        name: 'Cherry',
        unitPrice: 0.15,
        discount: null,
      },
      {
        id: 'item-id-peach',
        thumbnail: 'https://cdn.pixabay.com/photo/2017/08/01/08/11/food-2563403_960_720.jpg',
        name: 'Peach',
        unitPrice: 0.70,
        discount: null,
      },
      {
        id: 'item-id-raspberries',
        thumbnail: 'https://cdn.pixabay.com/photo/2017/08/31/07/27/raspberries-2699675_960_720.jpg',
        name: 'Raspberries',
        unitPrice: 0.10,
        discount: null,
      },
      {
        id: 'item-id-pear',
        thumbnail: 'https://cdn.pixabay.com/photo/2018/07/24/21/47/pear-3560106_960_720.jpg',
        name: 'Pear',
        unitPrice: 1.15,
        discount: null,
      },
      {
        id: 'item-id-pineapple',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/07/30/11/05/pineapple-867245_960_720.jpg',
        name: 'Pineapple',
        unitPrice: 0.95,
        discount: null,
      },
      
]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}