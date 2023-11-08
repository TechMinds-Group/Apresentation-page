import { useTranslation } from 'react-i18next';
import { CardContact } from '../components/CardContact';
import { tokens } from '../locales/tokens';

export function Comunity() {
  const { t } = useTranslation();

  return (
    <div id="comunity" className="flex flex-col gap-10">
      <h1 className="font-bold text-3xl text-darkBlue-main text-center">
        {t(tokens.nav.comunity)}
      </h1>
      <section className="flex gap-14 justify-center items-center lg:items-start flex-row flex-wrap lg:flex-nowrap">
        <CardContact
          title="GitHub"
          description="Gostaria de acompanhar nossos projetos? siga nossa comunidade no GitHub!"
        />
        <CardContact
          title="Whatsapp"
          description="Gostaria de acompanhar nossos projetos? siga nossa comunidade no GitHub!"
        />
        <CardContact
          title="Discord"
          description="Junte-se à nossa comunidade no Discord e venha compartilhar conhecimento, fazer novos amigos e se divertir"
          status={t(`nav.shortly`)}
        />
      </section>
    </div>
  );
}
