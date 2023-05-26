interface Props {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

const Section = ({ children, className = "" }: Props): JSX.Element => {
  return (
    <div className={`px-8 sm:px-16 md:px-24 xl:px-32 ${className}`}>
      {children}
    </div>
  );
};

export default Section;
