import { useLoaderData } from 'react-router-dom';
import { Content } from '../components/Content';

export const Losangeles = () => {
  const data = useLoaderData();
  return (
    <div className='layout-detail'>
      <section className='left'>
        <img alt='Losangeles' src='/images/05.jpg' />
      </section>
      <section className='right'>
        <Content data={data.weatherData} />
      </section>
    </div>
  );
};
