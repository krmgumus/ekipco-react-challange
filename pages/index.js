import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CardCategory } from '../components/cardCategory';
import { BootstrapCarousel } from '../components/carousel';
import { Navbar } from '../components/navbar';
import { getCategories, getProduct, getSliders } from '../helpers/axios-api-client';

export default function Home() {
  const [sliders, setSliders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sliders = await getSliders();
      setSliders(sliders);

      const categories = await getCategories();
      setCategories(categories);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      sliders.map(async (item) => {
        const product = await getProduct(item.productId);
        setProducts((oldArray) => [...oldArray, product]);
      });
    };
    if (sliders.length > 0) {
      fetchData();
    }
  }, [sliders]);
  return (
    <div>
      <Head>
        <title>EkipCo React Challange</title>
      </Head>
      <Navbar />
      <div className="container-xl">
        {products.length > 0 && <BootstrapCarousel items={products} />}
        {categories.length > 0 && (
          <div className="row mt-4 px-4 mx-auto justify-content-center justify-md-center ">
            {categories.map((item, index) => (
              <div key={index} className="col col-md-4">
                <CardCategory key={index} id={item.id} name={item.name} description={item.description} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
