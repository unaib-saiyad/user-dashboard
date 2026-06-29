import React from "react";

const SkeletonDetails = () => {
  return (
    <div className="skeleton-details">
      <div className="card details-section mb-4">
        <div className="card-header">
          <div
            className="skeleton-line"
            style={{ width: "40%", marginBottom: 0 }}
          ></div>
        </div>
        <div className="card-body text-center">
          <div className="profile-image-wrapper">
            <div className="skeleton-profile-img"></div>
          </div>
          <div
            className="skeleton-line-lg"
            style={{ width: "50%", margin: "0.75rem auto" }}
          ></div>
          <div className="d-flex justify-content-center gap-3">
            <div className="skeleton-line-sm" style={{ width: "80px" }}></div>
            <div className="skeleton-line-sm" style={{ width: "60px" }}></div>
            <div className="skeleton-line-sm" style={{ width: "70px" }}></div>
          </div>
        </div>
      </div>

      <div className="card details-section mb-4">
        <div className="card-header">
          <div
            className="skeleton-line"
            style={{ width: "35%", marginBottom: 0 }}
          ></div>
        </div>
        <div className="card-body">
          <div className="info-row">
            <div
              className="skeleton-line"
              style={{ width: "100%", marginBottom: 0 }}
            ></div>
          </div>
          <div className="info-row">
            <div
              className="skeleton-line"
              style={{ width: "80%", marginBottom: 0 }}
            ></div>
          </div>
          <div className="info-row">
            <div
              className="skeleton-line"
              style={{ width: "70%", marginBottom: 0 }}
            ></div>
          </div>
        </div>
      </div>

      <div className="card details-section mb-4">
        <div className="card-header">
          <div
            className="skeleton-line"
            style={{ width: "35%", marginBottom: 0 }}
          ></div>
        </div>
        <div className="card-body">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="info-row" key={item}>
              <div
                className="skeleton-line"
                style={{ width: `${70 + item * 3}%`, marginBottom: 0 }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="card details-section mb-4">
        <div className="card-header">
          <div
            className="skeleton-line"
            style={{ width: "35%", marginBottom: 0 }}
          ></div>
        </div>
        <div className="card-body">
          {[1, 2, 3, 4].map((item) => (
            <div className="info-row" key={item}>
              <div
                className="skeleton-line"
                style={{ width: `${75 + item * 4}%`, marginBottom: 0 }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetails;