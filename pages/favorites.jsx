import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CardProduct } from '../components/cardProduct';
import { Navbar } from '../components/navbar';
import { getFavorites } from '../helpers/axios-api-client';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favorites = await getFavorites();
      setFavorites(favorites);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Head>
        <title>Favoriler</title>
      </Head>

      <Navbar />
      <div className="container">
        <div className="row mx-auto justify-content-center justify-md-center">
          {favorites.length > 0 &&
            favorites.map((item, index) => (
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
