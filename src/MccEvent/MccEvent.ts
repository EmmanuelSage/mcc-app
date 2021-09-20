import { clone } from "../utils";

export enum MccEventTypes {
  CreateApplication = "createApplication",
  InitiateUpdate = "initiateUpdate",
  ApproveUpdate = "approveUpdate",
  CloseUpdate = "closeUpdate",
}

class MccEventClass {
  private Events: any = [];

  reset() {
    this.Events = [];
  }

  append(event: any) {
    this.Events.push(event);
  }

  getEvents() {
    return this.Events;
  }

  rebuild(number: number) {
    let events = this.Events;

    if (!isNaN(number)) {
      events = events.splice(0, number);
    }

    return events.reduce(
      (db:any, event:any) => {
        if (event.type === MccEventTypes.CreateApplication) {
          db.apps[event.name] = event.payload;
        } else if (event.type === MccEventTypes.InitiateUpdate) {
          db.reviewRequestsIdCount += 1;
          const id = db.reviewRequestsIdCount;
          db.reviewRequests[id] = event;
        } else if (event.type === MccEventTypes.ApproveUpdate) {
          const name = event.name;
          db.apps[name] = {
            metadata: {
              ...db.apps[name].metadata,
              ...event.payload.metadata,
            },
            technicalData: {
              ...db.apps[name].technicalData.roles,
              ...event.payload.technicalData,
            },
          };
          delete db.reviewRequests[event.id];
        } else if (event.type === MccEventTypes.CloseUpdate) {
          delete db.reviewRequests[event.id];
        }
        return db;
      },
      {
        apps: {},
        reviewRequestsIdCount: 0,
        reviewRequests: {},
      }
    );
  }

  undo(db:any, lastX:any) {
    return this.Events
      .splice(-lastX)
      .reduceRight((db:any, event:any) => {
        if (event.type === MccEventTypes.CreateApplication) {
          delete db.apps[event.name];
        } else if (event.type === MccEventTypes.InitiateUpdate) {
          db.reviewRequestsIdCount -= 1;
          delete db.reviewRequests[event.id];
        } else if (event.type === MccEventTypes.ApproveUpdate) {
          const { previousState, ...others } = event;
          db.apps[event.name] = previousState;
          db.reviewRequests[event.id] = {
            ...others,
            type: MccEventTypes.InitiateUpdate,
          };
        } else if (event.type === MccEventTypes.CloseUpdate) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          db.reviewRequests[event.id];
        }
        return db;
      }, clone(db));
  }
  query(number:number) {
    return this.rebuild(number);
  }
}

export const MccEvent = new MccEventClass()