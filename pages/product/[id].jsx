import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar';
import { getProduct, getProductsId } from '../../helpers/axios-api-client';

export default function Product() {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [moreText, setMoreText] = useState(false);
  const [moreTextSwitch, setMoreTextSwitch] = useState(true);

  useEffect(() => {
    const fetcData = async () => {
      const product = await getProduct(`${router.query.id}`);
      setProduct(product);
      if (product.description.length < 220) {
        setMoreTextSwitch(false);
      }
    };
    if (router.query.id != null) {
      fetcData();
    }
  }, [router]);
  console.log(product);
  return (
    <div>
      <Navbar />
      {product && (
        <div>
          <div className="row justify-center">
            <div className="product-container col-md">
              <div className="product-image border">
                <Image src={`http://localhost:3000/${product.productImage}`} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="col-md w-100">
              <div className="card w-100 border-0" style={{ width: '18rem', height: '100%' }}>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className={`card-text ${moreText ? null : 'product-card-text-line'} `}>{product.description}</p>
                  {moreTextSwitch ? (
                    <p
                      className="text-info"
                      onClick={() => {
                        setMoreText(!moreText);
                      }}
                    >
                      {moreText ? 'Kapat' : 'Devamını oku'}
                    </p>
                  ) : null}
                  <button className="card-link bg-primary text-white border-0 ">Favorilere ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
