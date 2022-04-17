import { Home, Box, Sun, Type, Droplet, Feather, Circle } from 'react-feather';

const navigationItems = [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'mine-sweeper',
    title: 'Mine Sweeper',
    icon: <Box size={20} />,
    navLink: '/mine-sweeper'
  },
  // {
  //   id: 'fetch',
  //   title: 'Fetch Images',
  //   icon: <Image size={20} />,
  //   navLink: '/fetch-images'
  // },
  {
    id: 'forecast',
    title: 'Forecast',
    icon: <Sun size={20} />,
    navLink: '/forecast'
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type size={20} />,
    navLink: '/typography'
  },
  {
    id: 'colors',
    title: 'Colors',
    icon: <Droplet size={20} />,
    navLink: '/colors'
  },
  {
    id: 'feather',
    title: 'Feather',
    icon: <Feather size={20} />,
    navLink: '/reactfeather'
  },
  {
    id: 'button',
    title: 'Button',
    icon: <Circle size={20} />,
    navLink: '/button'
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    icon: <Circle size={20} />,
    navLink: '/breadcrumb'
  },
]

export default navigationItems;