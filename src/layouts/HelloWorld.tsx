import { useTranslation } from 'react-i18next';
import { tokens } from '../locales/tokens';
import { Navbar } from './Navbar';
import Banner from '/public/assets/banner.svg';

export function HelloWorld() {
  const { t } = useTranslation();

  return (
    <div
      id="helloworld"
      className="bg-no-repeat bg-center flex flex-col justify-between bg-darkBlue-main h-80 lg:h-auto"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className="lg:pl-24 lg:pr-24 pl-7 pr-7">
        <header className="relative z-10">
          <Navbar />
          <div className="flex w-full">
            <section className="w-full flex flex-col justify-center items-center lg:gap-6">
              <h2 className="font-bold lg:text-4xl lg:m-0 mt-10 text-lg mb-4 lg:leading-8">
                {t(tokens.nav.titleHelloWorld)}
              </h2>
              <p className="lg:text-sm text-xs text-warmGray-300">
                {t(tokens.nav.descriptionHelloWorld)}
              </p>
            </section>
            <section className="hidden w-full lg:flex">
              <img
                className="relative left-24 top-10"
                src="/public/assets/graphics.svg"
                alt="graphics"
              />
            </section>
          </div>
        </header>
      </div>
      <img
        className="w-screen relative top-1"
        src="/public/assets/separator.svg"
        alt="separator"
      />
    </div>
  );
}
