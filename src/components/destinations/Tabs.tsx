import { useState } from "react";

interface Props {
  children: JSX.Element[];
}

const Tabs = ({ children }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-4 border-b border-b-blue">
        {children.map((child, index) => (
          <button
            key={index}
            className={`
              inline-flex justify-center items-center gap-2 uppercase py-2 pl-4 pr-16 font-bold md:px-8 rounded-t-xl hover:bg-opacity-80
              ${
                activeTab === index
                  ? "bg-white text-blue border border-blue"
                  : "bg-blue text-white border border-blue"
              }
            `}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {child.props.icon}
            <span>{child.props.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 w-full rounded-xl overflow-hidden">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
