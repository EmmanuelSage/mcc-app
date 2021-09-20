import React, { useContext } from "react";
import { DbContext } from "../../context/DbContext";
import { MccPage } from "../../types/MccPage";
import { ReviewRequestInfo } from "../../types/ReviewRequest";
import ListComponent from "../ListComponent/ListComponent";

interface IProps {
  toggleTab: (index: number) => void;
}

const ApproveCloseApp: React.FC<IProps> = ({ toggleTab }): JSX.Element => {
  const { db, setDb } = useContext(DbContext);
  const reviewRequests: ReviewRequestInfo[] = Object.values(db.reviewRequests);

  const onApprove = (id: number) => {
    if (db.reviewRequests[id] === undefined) {
      return;
    }
  
    const reviewRequest = db.reviewRequests[id];
    const name = reviewRequest.name;
  
    db.apps[name] = {
      metadata: {
        ...db.apps[name].metadata,
        ...reviewRequest.payload.metadata,
      },
      technicalData: {
        ...db.apps[name].technicalData.roles,
        ...reviewRequest.payload.technicalData,
      },
    };
  
    delete db.reviewRequests[id];

    setDb(db)
  }

  const onClose = (id: number) => {
    if (db.reviewRequests[id] === undefined) {
      return;
    }
    delete db.reviewRequests[id];
    setDb(db)
  }

  return (
    <div className="row">
      {reviewRequests.map((reviewRequest, index: number) => {
        return (
          <ListComponent
            listDetails={[
              {
                label: "Id : ",
                details: String(reviewRequest.id),
              },
              {
                label: "Name : ",
                details: reviewRequest.name,
              },
              { label: "Type : ", details: String(reviewRequest.type) },
              {
                label: "payload : ",
                details: JSON.stringify(reviewRequest.payload, undefined, 2),
              },
            ]}
            key={index}
            appName={db.currentApp}
            toggleTab={toggleTab}
            pageType={MccPage.ApproveCloseRequest}
            onApprove={onApprove}
            onClose={onClose}
            reviewRequestId={reviewRequest.id}
          />
        );
      })}
    </div>
  );
};

export default ApproveCloseApp;
