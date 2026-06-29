import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.login.uuid}`);
  };

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const nationality = user.nat || "N/A";
  const age = user.dob?.age || "N/A";

  return (
    <div className="card user-card" onClick={handleClick}>
      <img
        src={user.picture.large}
        alt={fullName}
        className="card-img-top"
        loading="lazy"
      />
      <div className="card-body">
        <div className="user-avatar-wrapper">
          <img
            src={user.picture.medium}
            alt={fullName}
            className="user-avatar"
          />
        </div>
        <h5 className="user-name">{fullName}</h5>
        <div className="user-info-item">
          <i className="bi bi-envelope"></i>
          <span className="text-truncate">{user.email}</span>
        </div>
        <div className="user-info-item">
          <i className="bi bi-telephone"></i>
          <span>{user.phone}</span>
        </div>
        <div className="user-info-item">
          <i className="bi bi-geo-alt"></i>
          <span className="text-truncate">
            {user.location.city}, {user.location.country}
          </span>
        </div>
        <div className="user-info-item">
          <i className="bi bi-flag"></i>
          <span>{nationality}</span>
        </div>
        <div className="user-info-item">
          <i className="bi bi-calendar"></i>
          <span>Age: {age}</span>
        </div>
        <div className="user-info-item">
          <i className="bi bi-gender-ambiguous"></i>
          <span className="text-capitalize">{user.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;