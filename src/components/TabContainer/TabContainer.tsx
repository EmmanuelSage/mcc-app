import { useContext, useState } from "react";
import { DbContext } from "../../context/DbContext";
import TabButton from "../TabButton/TabButton";
import TabContent from "../TabContent/TabContent";
import "./TabContainer.css";

enum MccPage {
  CreateApplication,
  ViewApplication,
  UpdateApplication,
}

function Tabs() {
  const { db } = useContext(DbContext);
  const [toggleState, setToggleState] = useState(MccPage.CreateApplication);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="block-tabs">
        <TabButton
          id={MccPage.CreateApplication}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          Create Application
        </TabButton>
        <TabButton
          id={MccPage.ViewApplication}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          View Application
        </TabButton>
        <TabButton
          id={MccPage.UpdateApplication}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          Update Application
        </TabButton>
      </div>

      <TabContent
        toggleState={toggleState}
        tabContentChildren={[
          {
            id: MccPage.CreateApplication,
            component: <h1> {db.title} + Create Application </h1>,
          },
          { id: MccPage.ViewApplication, component: <h1>View Application</h1> },
          {
            id: MccPage.UpdateApplication,
            component: <h1>Update Application</h1>,
          },
        ]}
      />
    </div>
  );
}

export default Tabs;
