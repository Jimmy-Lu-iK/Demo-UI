import React from 'react';
import { FixedSizeList } from 'react-window';
import { faker } from '@faker-js/faker';
import './VirtualList.css'; // 引入CSS样式文件

function VirtualList({ itemSize }) {
  const items = React.useMemo(() => {
    // 生成1000个随机数据
    return Array.from({ length: itemSize }, () => ({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
    }));
  }, []);

  const Row = ({ index, style }) => {
    const { name, email, image } = items[index];

    return (
      <div className="row" style={style}>
        <img src={image} alt={name} />
        <div>
          <div>id: {index}</div>
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="VirtualList">
      <FixedSizeList
        height={700}
        itemCount={items.length}
        itemSize={itemSize}
        width={500}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}

export default VirtualList;
