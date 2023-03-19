import React from 'react';
import { FixedSizeList } from 'react-window';

function VirtualList({ items, itemSize }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

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