import { BiSolidFoodMenu } from 'react-icons/bi';

export const menuItems = [
  {
    title: 'Menu',
    subItems: [
      {
        item: 'Dashboard',
        image: <BiSolidFoodMenu />,
        link: '/',
      },
      {
        item: 'Food Order',
        image: <BiSolidFoodMenu />,
        link: '/food-order',
      },
      {
        item: 'Manage Menu',
        image: <BiSolidFoodMenu />,
        link: '/manage-menu',
      },
      {
        item: 'Customer Review',
        image: <BiSolidFoodMenu />,
        link: '#',
      },
    ],
  },
  {
    title: 'Others',
    subItems: [
      {
        item: 'Settings',
        image: <BiSolidFoodMenu />,
        link: '#',
      },
      {
        item: 'Payment',
        image: <BiSolidFoodMenu />,
        link: '#',
      },
      {
        item: 'Accounts',
        image: <BiSolidFoodMenu />,
        link: '#',
      },
      {
        item: 'Help',
        image: <BiSolidFoodMenu />,
        link: '#',
      },
    ],
  },
];
