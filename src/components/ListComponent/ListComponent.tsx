import React from "react";
import { MccPage } from "../../types/MccPage";

interface listDetailsInfo {
  label: string;
  details: string;
}

type listDetails = listDetailsInfo[];
interface IProps {
  reviewRequestId?: number;
  appName: string;
  pageType: MccPage;
  listDetails: listDetails;
  toggleTab: (index: number) => void;
  onApprove?: (id: number) => void;
  onClose?: (id: number) => void;
}

const ListComponent: React.FC<IProps> = ({
  toggleTab,
  appName,
  pageType,
  listDetails,
  reviewRequestId = 0,
  onApprove = () => {},
  onClose = () => {},
}): JSX.Element => {
  return (
    <div className="row">
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h4 className="card-title">App Name: {appName}</h4>
          <div className="row flex-spaces">
            {listDetails.map((item, index) => (
              <p key={index} className="col-4 col">
                {item.label}
                <span className="text-secondary"> {item.details} </span>
              </p>
            ))}
            <div className=" col-6 col card-text">
              {pageType === MccPage.ViewApplication ? (
                <button
                  onClick={() => {
                    toggleTab(MccPage.UpdateApplication);
                  }}
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      onApprove(reviewRequestId)
                      toggleTab(MccPage.ViewApplication);
                    }}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => {
                      onClose(reviewRequestId)
                      toggleTab(MccPage.ViewApplication);
                    }}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
