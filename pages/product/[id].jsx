import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar';
import { addToFavorite, getProduct } from '../../helpers/axios-api-client';

export default function Product() {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [moreText, setMoreText] = useState(false);
  const [moreTextSwitch, setMoreTextSwitch] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const addFavoriteList = (id) => {
    addToFavorite(id);
    router.reload();
  };

  useEffect(() => {
    const fetcData = async () => {
      const product = await getProduct(`${router.query.id}`);
      setProduct(product);
      setButtonDisabled(product.isFavorite);
      if (product.description.length < 220) {
        setMoreTextSwitch(false);
      }
    };
    if (router.query.id != null) {
      fetcData();
    }
  }, [router]);
  return (
    <div>
      <Head>
        <title>{product && product.name}</title>
      </Head>
      <Navbar />
      {product && (
        <div className="container mt-2">
          <div className="row justify-center">
            <div className="product-container col-md">
              <div className="product-image border">
                <Image
                  src={`http://localhost:3000/${product.productImage}`}
                  layout="fill"
                  objectFit="contain"
                  alt={product.name}
                />
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
                  <div className="d-flex justify-content-around">
                    <button
                      onClick={() => {
                        addFavoriteList(product.id);
                      }}
                      disabled={buttonDisabled}
                      className={`btn bg-primary text-white border-0 ${buttonDisabled ? 'disabled' : null}`}
                    >
                      {buttonDisabled ? 'Favorilere eklendi' : 'Favorilere ekle'}
                    </button>
                    <div className="card-product-info text-center rounded-lg mx-auto mb-2">{product.price + ' ₺'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
