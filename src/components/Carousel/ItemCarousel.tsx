import { useRef } from 'react';

interface IItemCarousel {
  index: number;
  children: JSX.Element;
}

export function ItemCarousel({ index, children }: IItemCarousel) {
  const ref = useRef(null);

  return (
    <div key={index} ref={ref}>
      {children}
    </div>
  );
}
