import React from 'react';
import faker from 'faker';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './styles.css';

function LazyLoadImages() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // 模拟获取商品列表数据
    const items = Array.from({ length: 50 }, () => ({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
    }));

    setItems(items);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>My Shopping Site</h1>
      </header>
      <main>
        <div className="product-list">
          {items.map((item, index) => (
            <div className="product" key={index}>
              <LazyLoadImage
                effect="opacity"
                alt={item.name}
                src={item.image}
              />
              <h2>{item.name}</h2>
              <div className="price">{item.price}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default LazyLoadImages;
