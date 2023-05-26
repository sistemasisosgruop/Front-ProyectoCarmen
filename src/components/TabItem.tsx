interface Props {
  children: JSX.Element | JSX.Element[];
  label: string;
  icon?: JSX.Element;
  text?: string | number;
}

const TabItem = ({ children, label, icon, text }: Props): JSX.Element => {
  return <>{children}</>;
};

export default TabItem;
