import { useContext, useState } from "react";
import TabButton from "../TabButton/TabButton";
import TabContent from "../TabContent/TabContent";
import { MccPage } from "../../types/MccPage";
import "./TabContainer.css";
import CreateApp from "../CreateApp/CreateApp";
import UpdateApp from "../UpdateApp/UpdateApp";
import ViewApp from "../ViewApp/ViewApp";
import ApproveCloseApp from "../ApproveCloseApp/ApproveCloseApp";
import { DbContext } from "../../context/DbContext";
import ViewAppEvent from "../ViewAppEvent/ViewAppEvent";

enum SectionTitles {
  CreateApplicationv = "Create App",
  ViewApplication = "View App",
  UpdateApplication = "Update App",
  ApproveCloseRequest = "Approve/Close",
  ViewAppEvent = "View App Events",
}

function Tabs() {
  const { db } = useContext(DbContext);
  const [toggleState, setToggleState] = useState(MccPage.CreateApplication);

  const toggleTab = (index: MccPage) => {
    setToggleState(index);
  };

  return (
    <div className="tab-container">
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
        <TabButton
          id={MccPage.ApproveCloseRequest}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          {SectionTitles.ApproveCloseRequest}
          {db.reviewRequestsIdCount ? (
            <span className="badge success"> {db.reviewRequestsIdCount} </span>
          ) : (
            ""
          )}
        </TabButton>
        <TabButton
          id={MccPage.ViewAppEvent}
          toggleState={toggleState}
          toggleTab={toggleTab}
        >
          {SectionTitles.ViewAppEvent}
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
                <ViewApp toggleTab={toggleTab} />
              </div>
            ),
          },
          {
            id: MccPage.UpdateApplication,
            component: (
              <div>
                <h1> {SectionTitles.UpdateApplication} </h1>
                <UpdateApp
                  redirectTo={MccPage.ApproveCloseRequest}
                  toggleTab={toggleTab}
                />
              </div>
            ),
          },
          {
            id: MccPage.ApproveCloseRequest,
            component: (
              <div>
                <h1> {SectionTitles.ApproveCloseRequest}</h1>
                <ApproveCloseApp toggleTab={toggleTab} />
              </div>
            ),
          },
          {
            id: MccPage.ViewAppEvent,
            component: (
              <div>
                <h1> {SectionTitles.ViewAppEvent}</h1>
                <ViewAppEvent />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Tabs;
