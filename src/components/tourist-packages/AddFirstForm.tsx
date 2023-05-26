import Button from "@components/Button";
import FormInput from "@forms/FormInput";
import { HiOutlineArrowSmRight } from "react-icons/hi";

interface Props {
  control: any;
  errors: any;
  handleSubmit: any;
  onNextStep: () => void;
}

const AddFirstForm = ({
  control,
  errors,
  handleSubmit,
  onNextStep,
}: Props): JSX.Element => {
  return (
    <form
      onSubmit={handleSubmit(onNextStep)}
      className="w-full flex flex-col gap-4"
    >
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Nombre del tour"
          name="tourName"
          extraClasses="lg:col-span-1"
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Descripción del tour"
          name="tourDescription"
          extraClasses="lg:col-span-2"
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Extras"
          name="extras"
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Ubicación"
          name="location"
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Duración"
          name="duration"
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Dificultad"
          name="difficulty"
        />
      </article>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Idiomas"
          name="languages"
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Número de personas"
          name="numOfPeople"
        />
        <FormInput
          register={control.register}
          rules={{ required: true }}
          errors={errors}
          label="Número de niños"
          name="numOfChildren"
        />
      </article>

      <article className="w-full flex justify-center items-center sm:w-auto">
        <Button
          text="Siguiente"
          onClick={onNextStep}
          background="bg-orange"
          isIcon={true}
          icon={<HiOutlineArrowSmRight size={18} />}
        />
      </article>
    </form>
  );
};

export default AddFirstForm;
