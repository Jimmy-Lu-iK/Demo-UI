import React from 'react';
import { faker } from '@faker-js/faker';
import LazyLoad from 'react-lazyload';

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
              <h2>{item.name}</h2>
              <LazyLoad>
                <img alt={item.name} src={item.image} />
              </LazyLoad>
              <div className="id">id: {index}</div>
              <div className="price">${item.price}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default LazyLoadImages;
