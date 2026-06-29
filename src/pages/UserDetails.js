import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import SkeletonDetails from "../components/SkeletonDetails";
import UserContext from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();

  const { users, loading, error, setLoading } = useContext(UserContext);

  const user = users.find((u) => u.login.uuid === id);

  if (loading) {
    return (
      <div className="container">
        <Link to="/" className="back-btn mb-3">
          <i className="bi bi-arrow-left"></i>
          Back to Dashboard
        </Link>
        <h2 className="page-title">
          <i className="bi bi-person-fill me-2 text-primary"></i>
          User Details
        </h2>
        <SkeletonDetails />
      </div>
    );
  }

  if (!user || error) {
    return (
      <div className="container">
        <Link to="/" className="back-btn mb-3">
          <i className="bi bi-arrow-left"></i>
          Back to Dashboard
        </Link>
        <div className="text-center py-5">
          <i className="bi bi-exclamation-triangle-fill text-warning" style={{ fontSize: "3rem" }}></i>
          <h3 className="mt-3">User Not Found</h3>
          <p className="text-muted">The user you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div className="container">
      <Link to="/" className="back-btn mb-3">
        <i className="bi bi-arrow-left"></i>
        Back to Dashboard
      </Link>
      <h2 className="page-title">
        <i className="bi bi-person-fill me-2 text-primary"></i>
        User Details
      </h2>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="card details-section h-100">
            <div className="card-header">
              <i className="bi bi-person-badge"></i>
              Profile
            </div>
            <div className="card-body text-center">
              <div className="profile-image-wrapper">
                <img
                  src={user.picture.large}
                  alt={fullName}
                  className="profile-image"
                />
              </div>
              <h4 className="mb-1">{fullName}</h4>
              <div className="d-flex justify-content-center gap-3 flex-wrap mt-2">
                <span className="badge bg-primary rounded-pill text-capitalize">
                  <i className="bi bi-gender-ambiguous me-1"></i>
                  {user.gender}
                </span>
                <span className="badge bg-info rounded-pill">
                  <i className="bi bi-calendar me-1"></i>
                  Age: {user.dob.age}
                </span>
                <span className="badge bg-secondary rounded-pill">
                  <i className="bi bi-flag me-1"></i>
                  {user.nat}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="card details-section mb-4">
            <div className="card-header">
              <i className="bi bi-envelope"></i>
              Contact Information
            </div>
            <div className="card-body">
              <div className="info-row">
                <i className="bi bi-envelope"></i>
                <div>
                  <div className="detail-label">Email</div>
                  <div className="detail-value">{user.email}</div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-telephone"></i>
                <div>
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">{user.phone}</div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-phone"></i>
                <div>
                  <div className="detail-label">Cell</div>
                  <div className="detail-value">{user.cell}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card details-section mb-4">
            <div className="card-header">
              <i className="bi bi-geo-alt"></i>
              Address Information
            </div>
            <div className="card-body">
              <div className="info-row">
                <i className="bi bi-door-open"></i>
                <div>
                  <div className="detail-label">Street</div>
                  <div className="detail-value">
                    {user.location.street.number} {user.location.street.name}
                  </div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-building"></i>
                <div>
                  <div className="detail-label">City</div>
                  <div className="detail-value">{user.location.city}</div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-map"></i>
                <div>
                  <div className="detail-label">State</div>
                  <div className="detail-value">{user.location.state}</div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-globe"></i>
                <div>
                  <div className="detail-label">Country</div>
                  <div className="detail-value">{user.location.country}</div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-mailbox"></i>
                <div>
                  <div className="detail-label">Postcode</div>
                  <div className="detail-value">{user.location.postcode}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card details-section mb-4">
            <div className="card-header">
              <i className="bi bi-pin-map"></i>
              Location Information
            </div>
            <div className="card-body">
              <div className="info-row">
                <i className="bi bi-crosshair"></i>
                <div>
                  <div className="detail-label">Latitude</div>
                  <div className="detail-value">
                    {user.location.coordinates.latitude}
                  </div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-crosshair"></i>
                <div>
                  <div className="detail-label">Longitude</div>
                  <div className="detail-value">
                    {user.location.coordinates.longitude}
                  </div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-clock"></i>
                <div>
                  <div className="detail-label">Timezone Offset</div>
                  <div className="detail-value">
                    {user.location.timezone.offset}
                  </div>
                </div>
              </div>
              <div className="info-row">
                <i className="bi bi-clock-history"></i>
                <div>
                  <div className="detail-label">Timezone Description</div>
                  <div className="detail-value">
                    {user.location.timezone.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;