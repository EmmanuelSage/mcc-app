import React, { useContext } from "react";
import { DbContext } from "../../context/DbContext";
import { AppInfo } from "../../types/App";
import { MccPage } from "../../types/MccPage";
import ListComponent from "../ListComponent/ListComponent";

interface IProps {
  toggleTab: (index: number) => void;
}

const ViewApp: React.FC<IProps> = ({ toggleTab }): JSX.Element => {
  const { db } = useContext(DbContext);
  const apps: any = Object.values(db.apps);

  return (
    <div className="row">
      {apps.map((app: AppInfo, index: number) => {
        return (
          <div className="row">
            {apps.map((app: AppInfo, index: number) => {
              return (
                <ListComponent
                  listDetails={[
                    { label: "Owner : ", details: app.metadata.owner },
                    {
                      label: "Config Manager : ",
                      details: app.metadata.configManager,
                    },
                    {
                      label: "Role Name : ",
                      details: app.technicalData.roles.roleName,
                    },
                    {
                      label: "Permissions : ",
                      details: app.technicalData.roles.permissions.join("/"),
                    },
                  ]}
                  key={index}
                  appName={app.metadata.name}
                  toggleTab={toggleTab}
                  pageType={MccPage.ViewApplication}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ViewApp;
