import { useEffect, useState } from 'react';
import { BootstrapCarousel } from '../components/carousel';
import { Navbar } from '../components/navbar';
import { getProductsId, getSliders } from '../helpers/axios-api-client';

export default function Home() {
  const [sliders, setSliders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sliders = await getSliders();
      setSliders(sliders);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      sliders.map(async (item) => {
        const product = await getProductsId(item.productId);
        setProducts((oldArray) => [...oldArray, product]);
      });
    };
    if (sliders.length > 0) {
      fetchData();
    }
  }, [sliders]);
  return (
    <div>
      <Navbar />
      {products.length > 0 && <BootstrapCarousel items={products} />}
    </div>
  );
}
