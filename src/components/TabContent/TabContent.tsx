import React from "react";
import "./TabContent.css";

interface TabContentChildren {
  id: number;
  component: JSX.Element;
}

interface IProps {
  toggleState: number;
  tabContentChildren: TabContentChildren[];
}

const TabContent: React.FC<IProps> = ({ toggleState, tabContentChildren }) => {
  return (
    <div className="content-tabs">
      {tabContentChildren.map((tabContentChild) => (
        <div
        key={tabContentChild.id}
          className={toggleState === tabContentChild.id ? "content  active-content" : "content"}
        >
          {tabContentChild.component}
        </div>
      ))}
    </div>
  );
};

export default TabContent;
