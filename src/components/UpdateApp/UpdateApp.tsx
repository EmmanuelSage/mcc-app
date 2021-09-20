import React, { useContext } from "react";
import { DbContext } from "../../context/DbContext";
import { FormType } from "../../types/FormType";
import { MccPage } from "../../types/MccPage";
import AppForm from "../AppForm/AppForm";

interface IProps {
  redirectTo: MccPage;
  toggleTab: (index: number) => void;
}

const UpdateApp: React.FC<IProps> = ({ toggleTab, redirectTo }) => {
  const { db } = useContext(DbContext);
  if (db.currentApp !== "") {
    const app = db.apps[db.currentApp];
    const isCheckedInitiate =
      app.technicalData.roles.permissions.includes("initiate");
    const isCheckedApprove =
      app.technicalData.roles.permissions.includes("approve");
    const appDefaults = {
      name: app.metadata.name,
      owner: app.metadata.owner,
      configManager: app.metadata.configManager,
      roleName: app.technicalData.roles.roleName,
      isCheckedInitiate,
      isCheckedApprove,
    };
    return (
      <AppForm
        toggleTab={toggleTab}
        redirectTo={redirectTo}
        appDefaults={appDefaults}
        type={FormType.InitiateUpdateApplication}
      />
    );
  }
  return <></>
};

export default UpdateApp;
