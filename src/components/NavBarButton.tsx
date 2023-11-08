import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IConfig } from '../constants/navbarOptions';
import { removeAllCharacters } from '../helpers/removeAllCharacters';

interface INavBarButton {
  item: IConfig;
}

export function NavBarButton(props: INavBarButton) {
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);
  const { item } = props;

  const linkClassName = `whitespace-nowrap text-sm font-semibold leading-6 ${
    hover ? 'text-cyan-main' : ''
  }`;

  const barOpacity = item.active || hover ? '100' : '0';

  return (
    <div className={`text-${item.active ? 'cyan-main' : 'white-text'}`}>
      <a
        href={item.href}
        className={linkClassName}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {t(`nav.${removeAllCharacters(item.name)}`)}
      </a>
      <div
        className={`rounded w-1/2 h-0.5 bg-cyan-main opacity-${barOpacity} transition-opacity ease-linear duration-200`}
      />
    </div>
  );
}
