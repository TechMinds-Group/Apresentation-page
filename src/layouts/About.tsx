import { useTranslation } from 'react-i18next';
import { AboutSvg } from '../components/AboutSvg';
import { tokens } from '../locales/tokens';
import Banner from '/public/assets/banner.svg';

export function About() {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="bg-warmGray-100 p-6 lg:pl-20 lg:pr-20 flex relative z-10 lg:right-24 right-7 w-screen bg-no-repeat"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <section>
        <AboutSvg />
      </section>
      <section className="w-screen lg:w-1/2 lg:p-8 p-3">
        <h1 className="lg:text-2xl text-xl font-bold mb-4 text-darkBlue-main whitespace-nowrap">
          {t(tokens.nav.titleAbout)}
        </h1>
        <p className="text-gray-main text-xs">
          {t(tokens.nav.descriptionAbout)}
        </p>
      </section>
    </div>
  );
}
