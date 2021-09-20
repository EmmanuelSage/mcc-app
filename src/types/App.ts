export type permission = "initiate" | "approve"

export interface Role {
  roleName: string;
  permissions: permission[]
}

export interface App {
  metadata: {
    name: string;
    owner: string;
    configManager: string;
  },
  technicalData: {
    roles: Role[],
  },
}