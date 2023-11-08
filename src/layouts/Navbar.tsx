import { v4 } from 'uuid';
import { NavBarButton } from '../components/NavBarButton';
import { SelectLanguage } from '../components/SelectLanguage';
import { navbarOptions } from '../constants/navbarOptions';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { useSidebarStore } from '../store/sidebar';
import './index.css';
import { useEffect, useRef } from 'react';

export function Navbar() {
  const { toggle, isOpen } = useSidebarStore();
  const ref = useRef(null);

  useEffect(() => {
    onToggle();
  }, [isOpen]);

  function onToggle() {
    if (isOpen) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.add('scale-up-center');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.add('bg-darkBlue-main');
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.remove('scale-up-center');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.classList.remove('bg-darkBlue-main');
    }
  }

  return (
    <nav className="flex pt-6 items-center justify-between" aria-label="navbar">
      <div className="flex lg:flex-1 items-center">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="h-8 w-auto" src="/assets/logo.svg" alt="" />
        </a>
        <h5 className="pl-4 font-bold tracking-widest">TechMinds</h5>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-between items-center">
        <div className="hidden lg:flex lg:gap-x-6 mr-10">
          {navbarOptions.map(item => (
            <NavBarButton key={v4()} item={item} />
          ))}
        </div>
        <SelectLanguage />
      </div>
      <div ref={ref}>
        <div className="lg:hidden" onClick={toggle}>
          <Bars3BottomLeftIcon className="w-7" />
        </div>
      </div>
    </nav>
  );
}
