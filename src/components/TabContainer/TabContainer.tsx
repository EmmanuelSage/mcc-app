import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import TabContent from "../TabContent/TabContent";
import { MccPage } from "../../types/MccPage";
import "./TabContainer.css";
import CreateApp from "../CreateApp/CreateApp";
import ListComponent from "../ListComponent/ListComponent";
import UpdateApp from "../UpdateApp/UpdateApp";

enum SectionTitles {
  CreateApplicationv = "Create App",
  ViewApplication = "View App",
  UpdateApplication = "Update App",
}

function Tabs() {
  const [toggleState, setToggleState] = useState(MccPage.CreateApplication);

  const toggleTab = (index: MccPage) => {
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
                <CreateApp
                  redirectTo={MccPage.ViewApplication}
                  toggleTab={toggleTab}
                />
              </div>
            ),
          },
          {
            id: MccPage.ViewApplication,
            component: (
              <div>
                <h1>{SectionTitles.ViewApplication}</h1>
                <ListComponent toggleTab={toggleTab} />
              </div>
            ),
          },
          {
            id: MccPage.UpdateApplication,
            component: (
              <div>
                <h1> {SectionTitles.UpdateApplication} </h1>
                <UpdateApp
                  redirectTo={MccPage.ViewApplication}
                  toggleTab={toggleTab}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Tabs;
