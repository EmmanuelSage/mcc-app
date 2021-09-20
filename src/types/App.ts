export type permission = "initiate" | "approve"

export interface Role {
  roleName: string;
  permissions: permission[]
}

export interface AppInfo {
  metadata: {
    name: string;
    owner: string;
    configManager: string;
  },
  technicalData: {
    roles: Role,
  },
}
export interface App {
  [key: string] : AppInfo
}