import { Hochimin } from '../pages/Hochimin';
import Home from '../pages/index';
import { Losangeles } from '../pages/Losangeles';
import { Newyork } from '../pages/NewYork';
import { Osaka } from '../pages/Osaka';
import { Seoul } from '../pages/Seoul';
import { getCityWeather } from './weatherApi';

export const routerInfo = [
  {
    path: '/',
    element: <Home />,
    errorElement: <div className='layout-detail'>Error</div>,
    children: [
      {
        path: 'seoul',
        element: <Seoul />,
        loader: async () => {
          return getCityWeather('seoul');
        },
      },
      {
        path: 'hochiminhcity',
        element: <Hochimin />,
        loader: async () => {
          return getCityWeather('Ho Chi Minh City');
        },
      },
      {
        path: 'newyork',
        element: <Newyork />,
        loader: async () => {
          return getCityWeather('New York');
        },
      },
      {
        path: 'osaka',
        element: <Osaka />,
        loader: async () => {
          return getCityWeather('Osaka');
        },
      },
      {
        path: 'losangeles',
        element: <Losangeles />,
        loader: async () => {
          return getCityWeather('Los Angeles');
        },
      },
    ],
  },
];
