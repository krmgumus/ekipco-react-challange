import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CardProduct } from '../../components/cardProduct';
import { Navbar } from '../../components/navbar';
import { getCategory, getProducts } from '../../helpers/axios-api-client';

export default function Product() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(`${router.query.id}`);
      setProducts(products);
      const category = await getCategory(`${router.query.id}`);
      setCategory(category);
    };
    if (router.query.id != null) {
      fetchData();
    }
  }, [router]);
  return (
    <div>
      <Head>
        <title>{category && category.name}</title>
      </Head>
      <Navbar />
      <div className="container">
        <h2>{category && `${category.name}`}</h2>
        <div className="row mx-auto justify-content-center justify-md-center">
          {products.length > 0 &&
            products.map((item, index) => (
              <div key={index}>
                <div className="col col-md-4 my-2">
                  <CardProduct key={index} props={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
