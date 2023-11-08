interface IButtonCarousel {
  currentCardIndex: number;
  scrollToPosition: (position: number) => void;
  position: number;
}

export function ButtonCarousel({
  currentCardIndex,
  scrollToPosition,
  position,
}: IButtonCarousel) {
  const isCurrent = currentCardIndex === position;
  const style = isCurrent ? 'bg-cyan-main w-8' : 'bg-warmGray-300 w-3';

  return (
    <button
      className={`rounded-full p-0 h-3 cursor-pointer ${style}`}
      onClick={() => scrollToPosition(position)}
    />
  );
}
