import 'intersection-observer';
import { MouseEventHandler, TouchEventHandler, useRef } from 'react';
import { v4 } from 'uuid';
import { projects } from '../../constants/projects';
import '../../layouts/index.css';
import { Card } from '../Card';
import { ItemCarousel } from './ItemCarousel';

interface ICarouselRoot {
  containerRef: React.MutableRefObject<HTMLElement | null>;
  buttonPositions: number[];
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function CarouselContainer({
  containerRef,
  buttonPositions,
  setCurrentCardIndex,
}: ICarouselRoot) {
  const startXRef = useRef(0);
  const container = containerRef.current as HTMLElement;
  const containerWidthDiff = buttonPositions[buttonPositions.length - 1];

  const onMouse: MouseEventHandler<HTMLElement> = e => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const onTouch: TouchEventHandler<HTMLElement> = e => {
    handleStart(e.changedTouches[0].clientX);
  };

  const handleStart = (positionX: number) => {
    startXRef.current = positionX;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('touchend', handleTouchMove);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const scrollX = e.clientX;

    const newScrollX = getNewScrollPosition(scrollX, containerWidthDiff);

    container.scrollLeft = newScrollX;
    updateButtonPosition(newScrollX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const scrollX = e.changedTouches[0].clientX;

    const newScrollX = getNewScrollPosition(scrollX, containerWidthDiff);

    container.scrollLeft = newScrollX;
    updateButtonPosition(newScrollX);
  };

  const handleUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleUp);
    document.removeEventListener('touchend', handleTouchMove);
  };

  const updateButtonPosition = (scrollX: number) => {
    const closestPosition = buttonPositions.reduce((prev, curr) =>
      Math.abs(curr - scrollX) < Math.abs(prev - scrollX) ? curr : prev
    );

    setCurrentCardIndex(closestPosition);
  };

  const getNewScrollPosition = (index: number, maxWidth: number) => {
    const delta = startXRef.current - index;
    startXRef.current = index;
    let newScrollX = container.scrollLeft + delta;

    if (newScrollX < 0) {
      newScrollX = 0;
    } else if (newScrollX > maxWidth) {
      newScrollX = maxWidth;
    }

    return newScrollX;
  };

  return (
    <section
      ref={containerRef}
      className="flex lg:gap-10 gap-6 justify-start overflow-x-scroll"
      onMouseDown={onMouse}
      onTouchEnd={onTouch}
    >
      {projects.map((project, index) => (
        <ItemCarousel key={v4()} index={index}>
          <Card
            title={project.title}
            description={project.description}
            img={`/public/assets/card1.svg`}
          />
        </ItemCarousel>
      ))}
    </section>
  );
}
