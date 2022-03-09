import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

export const BootstrapCarousel = (props) => {
  const items = props.items;

  return (
    <div className="bg-dark row mx-auto">
      <Carousel className="col-lg mx-auto" nextLabel="" prevLabel="">
        {items.map((item, index) => (
          <Carousel.Item className="" key={index}>
            <Link href={`product/${item.id}`} passHref>
              <div>
                <div className="d-block position-relative carousel-image ">
                  <Image
                    src={`http://localhost:3000/${item.productImage}`}
                    priority
                    layout="fill"
                    objectFit="contain"
                    className="carousel-next-image"
                    alt={item.name}
                  />
                </div>
                <Carousel.Caption className="text-black">
                  <h3>{item.name}</h3>
                </Carousel.Caption>
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
