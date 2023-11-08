import { XMarkIcon } from '@heroicons/react/20/solid';
import { v4 } from 'uuid';
import { NavBarButton } from '../components/NavBarButton';
import { navbarOptions } from '../constants/navbarOptions';
import { useSidebarStore } from '../store/sidebar';
import Banner from '/public/assets/banner.svg';
import './index.css';
import { useEffect, useRef } from 'react';

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebarStore();
  const ref = useRef(null);

  useEffect(() => {
    onToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function onToggle() {
    if (isOpen) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.remove('invisible');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.add('visible');
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.add('invisible');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.remove('visible');
    }
  }

  return (
    <>
      <aside
        ref={ref}
        className={`bg-darkBlue-main w-screen h-screen fixed z-0 pr-5 pl-5 p-4 flex-col gap-20 opacity-0`}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <section className="flex justify-end items-center">
          <button
            onClick={toggle}
            className="rounded-full w-12 flex items-center justify-center p-3 text-white-text bg-transparent hover:bg-[#ffffff09] active:bg-[#ffffff13]"
          >
            <XMarkIcon />
          </button>
        </section>
        <section className="text-white-text-main flex flex-col justify-center items-center gap-6">
          {navbarOptions.map(item => (
            <div key={v4()} onClick={toggle}>
              <NavBarButton item={item} />
            </div>
          ))}
        </section>
      </aside>
    </>
  );
};
