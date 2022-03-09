import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const CardProduct = (props) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(props.props);
  }, [props]);

  if (product != null) {
    return (
      <div>
        <Link href={`/product/${product.id}`} passHref>
          <div className="card-product rounded shadow">
            <div className="card-product-image">
              <Image
                src={`http://localhost:3000/${product.productImage}`}
                priority
                layout="fill"
                objectFit="contain"
                className="bg-secondary py-1"
                alt={product.name}
              />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text card-product-description">{product.description} </p>
              </div>
              <div className="card-product-info text-center rounded-lg mx-auto mb-2">{product.price + ' ₺'}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  return <div></div>;
};
