import { useTranslation } from 'react-i18next';
import { imageCard } from '../constants/imageCard';
import { randomValues } from '../helpers/randomValues';
import { Button } from './Button';

export interface ICard {
  title: string;
  description: string;
  status?: string;
  img?: string;
}

export function Card(props: ICard) {
  const { t } = useTranslation();
  const { title, description, status = t('nav.inprogress'), img } = props;
  let imgPath = img;

  if (!img) imgPath = `/public/assets/${randomValues(imageCard)}`;

  return (
    <article className="lg:w-72 flex flex-col gap-6">
      <img width={'100%'} src={imgPath} alt="imgPath" />
      <div>
        <h2 className="text-darkBlue-main font-bold lg:text-lg text-sm mb-2">
          {title}
        </h2>
        <p className="text-gray-main lg:text-sm text-xs">{description}</p>
      </div>
      <div className="bg-gray-button rounded-full flex justify-between items-center">
        <span className=" lg:pl-6 lg:pr-6 pl-4 pr-4  text-darkBlue-main font-bold whitespace-nowrap lg:text-[1rem] text-[0.7rem]">
          {status}
        </span>
        <Button
          customStyle="text-xs lg:text-[1rem] lg:pl-8 lg:pr-8 lg:pt-3 lg:pb-3"
          fullWidth
        >
          {t('nav.viewmore')}
        </Button>
      </div>
    </article>
  );
}
