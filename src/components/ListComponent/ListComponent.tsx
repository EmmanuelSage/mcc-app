import React, { useContext } from "react";
import { DbContext } from "../../context/DbContext";
import { AppInfo } from "../../types/App";
import { MccPage } from "../../types/MccPage";

interface IProps {
  toggleTab: (index: number) => void;
}

const ListComponent: React.FC<IProps> = ({ toggleTab }): JSX.Element => {
  const { db } = useContext(DbContext);
  const apps: any = Object.values(db.apps);

  return (
    <div className="row">
      {apps.map((app: AppInfo, index: number) => {
        return (
          <div className="card" style={{ width: "100%" }} key={index}>
            <div className="card-body">
              <h4 className="card-title">App Name: {app.metadata.name}</h4>
              <div className="row flex-spaces">
                <p className="col-4 col">
                  Owner:
                  <span className="text-secondary"> {app.metadata.owner} </span>
                </p>
                <p className="col-4 col">
                  Config Manager:
                  <span className="text-secondary">
                    {app.metadata.configManager}
                  </span>
                </p>
                <p className="col-4 col">
                  Role Name:
                  <span className="text-secondary">
                    {app.technicalData.roles.roleName}
                  </span>
                </p>
                <p className="col-6 col">
                  Permissions:
                  <span className="text-secondary">
                    {app.technicalData.roles.permissions.join("/")}
                  </span>
                </p>
                <div className=" col-6 col card-text">
                  <button
                    onClick={() => {
                      toggleTab(MccPage.UpdateApplication)
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
