import 'intersection-observer';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { Carousel } from '../components/Carousel';
import { tokens } from '../locales/tokens';
import './index.css';

export function Projects() {
  const { t } = useTranslation();
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const scrollToPosition = (position: number) => {
    setCurrentCardIndex(position);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({ left: position, behavior: 'smooth' });
    }
  };

  let buttonPositions: number[] = [];

  if (scrollContainerRef.current) {
    const currentValue = scrollContainerRef.current;
    const totalContainerWidth =
      currentValue.scrollWidth - currentValue.clientWidth;

    buttonPositions = [
      0,
      totalContainerWidth / 4,
      (totalContainerWidth / 4) * 2,
      totalContainerWidth,
    ];
  }

  return (
    <div
      id="projects"
      className="lg:p-6 p-2 flex flex-col gap-8 lg:gap-16 snap-x"
    >
      <section className="flex justify-between lg:flex-row flex-col gap-3 lg:gap-0">
        <h1 className="text-darkBlue-main font-bold lg:text-4xl text-xl">
          {t(tokens.nav.projects)}
        </h1>
        <div className="flex lg:flex-row flex-col justify-between lg:w-3/5 gap-8 lg:gap-0">
          <p className="text-gray-main">{t(tokens.nav.descriptionProject)}</p>
          <Button>{t(tokens.nav.viewAll)}</Button>
        </div>
      </section>
      <Carousel.Root>
        <Carousel.ButtonsContainer>
          {buttonPositions.map((position, index) => (
            <Carousel.Button
              key={index}
              currentCardIndex={currentCardIndex}
              position={position}
              scrollToPosition={scrollToPosition}
            />
          ))}
        </Carousel.ButtonsContainer>
        <Carousel.CarouselContainer
          containerRef={scrollContainerRef}
          buttonPositions={buttonPositions}
          setCurrentCardIndex={setCurrentCardIndex}
        />
      </Carousel.Root>
    </div>
  );
}
