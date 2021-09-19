type permission = "initiate" | "approve"

interface Role {
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