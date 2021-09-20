import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import RolesForm from '../RolesForm/RolesForm'
import {Role} from '../../types/App'

function CreateApp() {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [configManager, setConfigManager] = useState('')
  const [roles, setRoles] = useState<Role[]>([])
  return (
    <form>
      <InputField label='Name' value={name} handleChange={(e) => setName(e.target.value)}/>
      <InputField label='Owner' value={owner} handleChange={(e) => setOwner(e.target.value)}/>
      <InputField label='Config Manager' value={configManager} handleChange={(e) => setConfigManager(e.target.value)}/>
      <RolesForm roles={roles} setRoles={setRoles}/>
    </form>
  )
}

export default CreateApp
