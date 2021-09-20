import React, { SyntheticEvent, useContext, useState } from "react";
import { DbContext } from "../../context/DbContext";
import { AppInfo, permission } from "../../types/App";
import { FormType } from "../../types/FormType";
import { MccPage } from "../../types/MccPage";
import { ReviewRequestInfo } from "../../types/ReviewRequest";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputField from "../InputField/InputField";
import { MccEvent, MccEventTypes } from "../../MccEvent/MccEvent";
import "./AppForm.css";

export interface AppDefaults {
  name: string;
  owner: string;
  configManager: string;
  roleName: string;
  isCheckedInitiate: boolean;
  isCheckedApprove: boolean;
}

interface IProps {
  type: FormType;
  redirectTo: MccPage;
  appDefaults: AppDefaults;
  toggleTab: (index: number) => void;
}

const AppForm: React.FC<IProps> = ({
  toggleTab,
  redirectTo,
  appDefaults,
  type,
}) => {
  const { db, setDb } = useContext(DbContext);
  const [name, setName] = useState(() => appDefaults.name);
  const [owner, setOwner] = useState(() => appDefaults.owner);
  const [configManager, setConfigManager] = useState(
    () => appDefaults.configManager
  );
  const [roleName, setRoleName] = useState(() => appDefaults.roleName);
  const [isCheckedInitiate, setIsCheckedInitiate] = useState(
    () => appDefaults.isCheckedInitiate
  );
  const [isCheckedApprove, setIsCheckedApprove] = useState(
    () => appDefaults.isCheckedApprove
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const permissions: permission[] = [];
    if (isCheckedInitiate) permissions.push("initiate");
    if (isCheckedApprove) permissions.push("approve");
    const app: AppInfo = {
      metadata: {
        name,
        owner,
        configManager,
      },
      technicalData: {
        roles: {
          roleName,
          permissions,
        },
      },
    };

    if (type === FormType.CreateApplication) {
      db.apps[name] = app;
      MccEvent.append({
        type: MccEventTypes.CreateApplication,
        name,
        payload: app
      });
    } else if (type === FormType.InitiateUpdateApplication) {
      db.reviewRequestsIdCount += 1;
      const id = db.reviewRequestsIdCount;
      const reviewRequest: ReviewRequestInfo = {
        type: MccEventTypes.InitiateUpdate,
        name,
        id,
        payload: {
          ...app,
        },
      };
      db.reviewRequests[`${id}`] = reviewRequest;
      MccEvent.append(reviewRequest)
    }

    db.currentApp = name;
    setDb(db);
    setName("");
    setOwner("");
    setConfigManager("");
    setRoleName("");
    setIsCheckedInitiate(false);
    setIsCheckedApprove(false);
    if (redirectTo) {
      toggleTab(redirectTo);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        value={name}
        handleChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Owner"
        value={owner}
        handleChange={(e) => setOwner(e.target.value)}
      />
      <InputField
        label="Config Manager"
        value={configManager}
        handleChange={(e) => setConfigManager(e.target.value)}
      />
      <h4 className="roles-header"> Roles </h4>
      <InputField
        label="Role Name : "
        value={roleName}
        handleChange={(e) => setRoleName(e.target.value)}
      />
      <fieldset className="form-group">
        <legend>Permissions</legend>

        <InputCheckbox
          label="Initiate"
          isChecked={isCheckedInitiate}
          handleChange={() => setIsCheckedInitiate(!isCheckedApprove)}
        />

        <InputCheckbox
          label="Approve"
          isChecked={isCheckedApprove}
          handleChange={() => setIsCheckedApprove(!isCheckedApprove)}
        />
      </fieldset>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default AppForm;
