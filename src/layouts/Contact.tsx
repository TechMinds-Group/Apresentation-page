import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';
import Footer from '../../public/assets/footer.svg';
import { contactOptions } from '../constants/contactOptions';
import { removeAllCharacters } from '../helpers/removeAllCharacters';
import { tokens } from '../locales/tokens';
import Banner from '/public/assets/banner.svg';

export function Contact() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className={`flex flex-col`}>
      <img className="relative top-1" src={Footer} alt="rodapé" />
      <div
        className="flex md:flex-row flex-col-reverse justify-between flex-wrap md:gap-10 gap-4 md:pl-28 md:pr-28 pl-7 pr-7 whitespace-nowrap w-full md:pt-0 pt-8 pb-10 bg-darkBlue-main relative z-10"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <section className="flex flex-col md:gap-9 gap-6 pt-10 md:items-start items-center md:text-start text-center">
          <article className="flex items-center">
            <img
              className="md:w-12 w-8"
              src="/public/assets/logo.svg"
              alt="logo TechMinds"
            />
            <h2 className="text-white-text pl-4 font-bold md:text-2xl text-md tracking-widest">
              TechMinds
            </h2>
          </article>
          <section className="flex flex-col md:gap-3 gap-1 md:text-md text-xs">
            <p>{t(tokens.nav.copyright)}</p>
            <p>{t(tokens.nav.allRightsReserved)}</p>
          </section>
        </section>
        <section className="flex md:flex-row flex-wrap md:flex-nowrap md:gap-20 gap-10 md:justify-start justify-center">
          {contactOptions.map(item => (
            <article key={v4()}>
              <h2 className="text-white-text font-bold md:text-xl text-md tracking-widest mb-4 text-center md:text-start">
                {t(`nav.${removeAllCharacters(item.title)}`)}
              </h2>
              <ul className="list-inside flex md:flex-col flex-wrap gap-4 justify-center md:justify-start">
                {item.elements.map(element => (
                  <li key={v4()}>
                    <a
                      className="text-white-text md:text-md text-sm hover:text-cyan-main"
                      href={element.href}
                    >
                      {t(`nav.${removeAllCharacters(element.name)}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </footer>
  );
}
