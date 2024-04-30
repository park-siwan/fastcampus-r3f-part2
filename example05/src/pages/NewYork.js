import { useLoaderData } from 'react-router-dom';
import { Content } from '../components/Content';

export const Newyork = () => {
  const data = useLoaderData();
  return (
    <div className='layout-detail'>
      <section className='left'>
        <img alt='Newyork' src='/images/02.jpg' />
      </section>
      <section className='right'>
        <Content data={data.weatherData} />
      </section>
    </div>
  );
};
