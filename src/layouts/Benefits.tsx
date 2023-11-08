import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';
import { tokens } from '../locales/tokens';

const benefits = [
  {
    icon: '',
    title: 'Monitoring',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '',
    title: 'Monitoring',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '',
    title: 'Monitoring',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '',
    title: 'Monitoring',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export function Benefits() {
  const { t } = useTranslation();

  return (
    <div id="benefits" className="flex flex-col lg:gap-6 gap-10">
      <section className="lg:pl-6 lg:pr-6">
        <h1 className="text-darkBlue-main text-xl lg:text-3xl font-bold text-center">
          {t(tokens.nav.titleBenefits)}
        </h1>
        <p className="text-gray-light text-center lg:text-sm text-[0.7rem] mt-4">
          {t(tokens.nav.descriptionBenefits)}
        </p>
      </section>
      <section className="flex flex-wrap justify-center">
        {benefits.map(benefit => (
          <div
            key={v4()}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
          >
            <div className="flex flex-col items-center mt-8">
              <div className="w-16 h-16 bg-gray-light rounded-full"></div>
              <h2 className="text-darkBlue-main text-lg font-bold mt-4">
                {benefit.title}
              </h2>
              <p className="text-gray-light text-center text-md mt-3">
                {benefit.subtitle}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-darkBlue-main mb-6 font-bold text-xl lg:text-3xl">
            {t(tokens.nav.titleCalendar)}
          </h2>
          <p className="text-gray-light lg:text-sm text-[0.7rem]">
            {t(tokens.nav.descriptionCalendar)}
          </p>
        </div>
        <div className="w-full">
          <img src="/public/assets/calendar.svg" alt="calendar" />
        </div>
      </section>
    </div>
  );
}
