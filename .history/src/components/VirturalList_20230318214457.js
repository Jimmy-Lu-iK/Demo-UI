import React from 'react';
import { FixedSizeList } from 'react-window';
import faker from 'faker';

function VirtualList({ itemSize }) {
  const items = React.useMemo(() => {
    // 生成1000个随机数据
    return Array.from({ length: 1000 }, () => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
    }));
  }, []);

  const Row = ({ index, style }) => {
    const { name, email, image } = items[index];

    return (
      <div style={style}>
        <img src={image} alt={name} />
        <div>
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
    );
  };

  return (
    <FixedSizeList
      height={500}
      itemCount={items.length}
      itemSize={itemSize}
      width={300}
    >
      {Row}
    </FixedSizeList>
  );
}

export default VirtualList;
