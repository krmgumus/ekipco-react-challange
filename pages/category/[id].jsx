import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CardProduct } from '../../components/cardProduct';
import { Navbar } from '../../components/navbar';
import { getProducts } from '../../helpers/axios-api-client';

export default function Product() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(`${router.query.id}`);
      setProducts(products);
    };
    if (router.query.id != null) {
      fetchData();
    }
  }, [router]);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mx-auto justify-content-center justify-md-center">
          {products.length > 0 &&
            products.map((item, index) => (
              <div>
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
