import { ImageSourcePropType } from 'react-native';
const petrol = [
  {
    image: require('../assets/images/image01.png'),
    title: '15 Coins',
    description: '50% discount for every $100 top-up on your Shell Petrol Card',
    marker: null,
  },
  {
    image: require('../assets/images/image02.png'),
    title: '1,000 Coins',
    description: '70% discount top-up on your Shell Petrol Card',
    marker: require('../assets/images/marker.png'),
  },
];
const rentalRebate = [
  {
    image: require('../assets/images/image03.png'),
    title: '20 Coins',
    description: 'Get $20 Rental rebate',
    marker: null,
  },
  {
    image: require('../assets/images/image04.png'),
    title: '15 Coins',
    description: 'Get $500 Rental rebate',
    marker: null,
  },
];
const foodAndBeverage = [
  {
    image: require('../assets/images/image05.png'),
    title: '25 Coins',
    description: 'NTUC Fairprice $50 Voucher',
    marker: null,
  },
  {
    image: require('../assets/images/image06.png'),
    title: '5 Coins',
    description: 'Free Cold Stone Sundae at any flavour!',
    marker: null,
  },
];

interface Item {
  image: ImageSourcePropType;
  title: string;
  description: string;
  marker: ImageSourcePropType | null;
}
export { petrol, rentalRebate, foodAndBeverage, Item };
