import React, { useState } from "react";
import { permission, Role } from "../../types/App";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputField from "../InputField/InputField";
import './RolesForm.css'

interface IProps {
  roles: Role[];
  setRoles: React.Dispatch<React.SetStateAction<Role[]>>;
}


const RolesForm: React.FC<IProps> = ({roles, setRoles}) => {
  const [roleName, setRoleName] = useState("");
  const [isCheckedInitiate, setIsCheckedInitiate] = useState(false);
  const [isCheckedApprove, setIsCheckedApprove] = useState(false);

  return (
    <div>
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
      <button onClick={(e) => {
        e.preventDefault();
        const permissions:permission[] = []
        if(isCheckedInitiate) permissions.push('initiate')
        if(isCheckedApprove) permissions.push('approve')
        roles.push({roleName, permissions})
        setRoles(roles)
      }}> Add </button>
    </div>
  );
}

export default RolesForm;
