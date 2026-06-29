import React from "react";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img"></div>
      <div className="skeleton-body">
        <div className="skeleton-avatar-wrapper">
          <div className="skeleton-avatar"></div>
        </div>
        <div className="skeleton-line" style={{ width: "60%", margin: "0 auto 0.75rem" }}></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line-sm"></div>
        <div className="skeleton-line-sm"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;