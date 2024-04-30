import { useLoaderData } from 'react-router-dom';
import { Content } from '../components/Content';

export const Osaka = () => {
  const data = useLoaderData();
  return (
    <div className='layout-detail'>
      <section className='left'>
        <img alt='Osaka' src='/images/04.jpg' />
      </section>
      <section className='right'>
        <Content data={data.weatherData} />
      </section>
    </div>
  );
};
