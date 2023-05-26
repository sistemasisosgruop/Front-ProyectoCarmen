import { useLang } from "@hooks/useLang";
import LayoutPage from "@layouts/LayoutPage";
import Section from "@layouts/Section";
import ButtonLink from "@components/ButtonLink";
import { TbHomeHeart } from "react-icons/tb";

const PageNotFound = (): JSX.Element => {
  const { t } = useLang();

  return (
    <LayoutPage title="Pagina no encontrada - Carmen Agencia de Viajes y Turismo">
      <Section className="py-16 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:py-24 lg:py-32">
        <picture>
          <img
            src="/images/illustrations/page-not-found.svg"
            alt="page not found"
            className="w-full h-48"
          />
          <source src="/images/illustrations/page-not-found.svg" />
        </picture>
        <article>
          <h1 className="text-3xl text-blue text-center font-bold md:text-4xl">
            {t("not_found.not_found")}
          </h1>
          <p className="text-center mb-8 md:text-xl">
            {t("not_found.page_not_found")}
          </p>

          <div className="flex justify-center items-center">
            <ButtonLink
              to="/"
              text={t("not_found.return_home")}
              showIcon={true}
              icon={<TbHomeHeart size={18} />}
              iconPosition="right"
            />
          </div>
        </article>
      </Section>
    </LayoutPage>
  );
};

export default PageNotFound;
