import React from "react";
import { MccPage } from "../../types/MccPage";

interface listDetailsInfo {
  label: string;
  details: string;
}

type listDetails = listDetailsInfo[];
interface IProps {
  appName: string;
  pageType: MccPage;
  listDetails: listDetails;
  toggleTab: (index: number) => void;
}

const ListComponent: React.FC<IProps> = ({
  toggleTab,
  appName,
  pageType,
  listDetails,
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
              {pageType === MccPage.ViewApplication && (
                <button
                  onClick={() => {
                    toggleTab(MccPage.UpdateApplication);
                  }}
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
