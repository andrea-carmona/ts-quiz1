
import React from 'react'
interface ListProps<T> {
  items: T[];
  renderItem?: (item: T) => React.ReactNode;
}
function TsList<T>({ items, renderItem = () => <span>hello</span> }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
export default TsList;