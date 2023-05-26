interface Props {
  title: string;
  description?: string | null;
  textAlign?: string;
  titleStyles?: string;
  descriptionStyles?: string;
}

const Heading = ({
  title,
  textAlign = "text-center",
  description,
  titleStyles,
  descriptionStyles,
}: Props): JSX.Element => {
  return (
    <div className="mb-4">
      <h2
        className={`text-2xl ${textAlign ?? ""} font-bold ${
          titleStyles ?? ""
        } md:text-4xl`}
      >
        {title}
      </h2>
      {description !== undefined && (
        <p
          className={`text-xl text-gray-800 ${textAlign ?? ""} ${
            descriptionStyles ?? ""
          } xl:text-2xl`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
