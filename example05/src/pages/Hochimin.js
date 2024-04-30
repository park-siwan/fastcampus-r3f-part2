import { useLoaderData } from 'react-router-dom';
import { Content } from '../components/Content';

export const Hochimin = () => {
  const data = useLoaderData();
  return (
    <div className='layout-detail'>
      <section className='left'>
        <img alt='Hochimin' src='/images/03.jpg' />
      </section>
      <section className='right'>
        <Content data={data.weatherData} />
      </section>
    </div>
  );
};
