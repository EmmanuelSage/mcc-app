import React, { SyntheticEvent, useContext, useState } from 'react'
import { DbContext } from '../../context/DbContext';
import { AppInfo, permission } from '../../types/App';
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputField from '../InputField/InputField'
import './CreateApp.css'

function CreateApp() {
  const { db , setDb} = useContext(DbContext);
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [configManager, setConfigManager] = useState('')
  const [roleName, setRoleName] = useState("");
  const [isCheckedInitiate, setIsCheckedInitiate] = useState(false);
  const [isCheckedApprove, setIsCheckedApprove] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const permissions:permission[] = []
    if(isCheckedInitiate) permissions.push('initiate')
    if(isCheckedApprove) permissions.push('approve')
    const app: AppInfo = {
      metadata: {
        name,
        owner,
        configManager
      },
      technicalData: {
        roles: {
          roleName,
          permissions
        },
      },
    } 
    db.apps[name] = app
    setDb(db)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField label='Name' value={name} handleChange={(e) => setName(e.target.value)}/>
      <InputField label='Owner' value={owner} handleChange={(e) => setOwner(e.target.value)}/>
      <InputField label='Config Manager' value={configManager} handleChange={(e) => setConfigManager(e.target.value)}/>
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
  )
}

export default CreateApp
