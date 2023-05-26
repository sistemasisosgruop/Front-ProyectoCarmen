import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLang } from "@hooks/useLang";
import FormInput from "@components/forms/FormInput";

const SignIn = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const { t } = useLang();

  return (
    <section className="rounded-xl overflow-hidden bg-gray-100 px-4 py-2 border border-blue border-opacity-25">
      <form
        autoComplete="false"
        className="w-full flex flex-col justify-center gap-4 mb-8"
      >
        <article className="flex flex-col justify-center items-start gap-4">
          <FormInput
            label={t("login.email")}
            name="email"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <FormInput
            label={t("login.password")}
            name="password"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
        </article>
        <button
          type="button"
          className="w-full bg-blue px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-90"
        >
          {t("login.continue")}
        </button>
      </form>

      <div className="relative w-full">
        <p className="text-center px-4 z-20 bg-gray-100">
          {t("login.other_options")}
        </p>
        <hr className="absolute top-3 -z-10 border-none w-full bg-white py-[1px]" />
      </div>

      <article className="flex flex-col justify-center items-center gap-2 my-4">
        <Link
          to=""
          className="w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl"
        >
          Continuar con Facebook
        </Link>
        <Link
          to=""
          className="w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl"
        >
          Continuar con Google
        </Link>
        <Link
          to=""
          className="w-full block text-dark text-center text-sm border border-gray-600 px-6 py-2 rounded-xl"
        >
          Continuar con Apple
        </Link>
      </article>
    </section>
  );
};

export default SignIn;
