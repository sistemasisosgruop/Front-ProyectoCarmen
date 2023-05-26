import { useState } from "react";

interface Props {
  children: JSX.Element[];
}

const Tabs = ({ children }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="grid place-content-center">
      <div className="bg-green flex justify-center md:justify-start md:bg-transparent">
        {children.map((child, index) => (
          <button
            key={index}
            className={`inline-flex justify-center items-center gap-4 py-4 px-8 text-xl border-t-2 border-t-green font-bold ${
              activeTab === index
                ? "bg-white text-green"
                : "bg-green text-white"
            } md:px-8`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            <div
              className={`w-10 h-10 rounded-full grid place-content-center text-2xl font-bold ${
                activeTab === index
                  ? "bg-green text-white"
                  : "bg-white text-green"
              }`}
            >
              {child.props.number}
            </div>
            <span>{child.props.label}</span>
          </button>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
