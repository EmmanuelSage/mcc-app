import React from "react";
import { MccPage } from "../../types/MccPage";
import AppForm from "../AppForm/AppForm";

import "./CreateApp.css";

interface IProps {
  redirectTo: MccPage;
  toggleTab: (index: number) => void;
}

const CreateApp: React.FC<IProps> = ({ toggleTab, redirectTo }) => {
  return (
    <AppForm
      toggleTab={toggleTab}
      redirectTo={redirectTo}
      appDefaults={{
        name: '',
        owner: '',
        configManager: '',
        roleName: '',
        isCheckedInitiate: false,
        isCheckedApprove: false,
      }}
    />
  );
};

export default CreateApp;
