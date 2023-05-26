interface Props {
  children: JSX.Element;
  number: string | number;
  label: string;
}

const TabItem = ({ children, number, label }: Props): JSX.Element => {
  return <div className="bg-white mt-8 px-8 py-4">{children}</div>;
};

export default TabItem;
