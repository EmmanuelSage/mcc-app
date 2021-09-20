import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import TabContent from "../TabContent/TabContent";
import { MccPage } from "../../types/MccPage";
import "./TabContainer.css";
import CreateApp from "../CreateApp/CreateApp";

enum SectionTitles {
  CreateApplicationv = 'Create Application',
  ViewApplication = 'View Application',
  UpdateApplication = 'Update Application'
}

function Tabs() {
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
          {SectionTitles.CreateApplicationv}
        </TabButton>
        <TabButton
          id={MccPage.ViewApplication}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          {SectionTitles.ViewApplication}
        </TabButton>
        <TabButton
          id={MccPage.UpdateApplication}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          {SectionTitles.UpdateApplication}
        </TabButton>
      </div>

      <TabContent
        toggleState={toggleState}
        tabContentChildren={[
          {
            id: MccPage.CreateApplication,
            component: (
              <div>
                <h1> {SectionTitles.CreateApplicationv} </h1>
                <CreateApp />
              </div>
            ),
          },
          { id: MccPage.ViewApplication, component: <h1>{SectionTitles.ViewApplication}</h1> },
          {
            id: MccPage.UpdateApplication,
            component: <h1>{SectionTitles.UpdateApplication}</h1>,
          },
        ]}
      />
    </div>
  );
}

export default Tabs;
