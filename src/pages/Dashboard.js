import React, { useContext } from "react";
import UserCard from "../components/UserCard";
import SkeletonCard from "../components/SkeletonCard";
import UserContext from '../context/UserContext';

const Dashboard = () => {
  const { users, loading, error } = useContext(UserContext);
  if (error) {
    return (
      <div className="alert alert-danger text-center">
        <h5>Unable to load users, please refresh to try again!...</h5>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <h2 className="page-title mb-0">
          <i className="bi bi-people-fill me-2 text-primary"></i>
          User Dashboard
        </h2>
        <div className="d-flex gap-3 w-100 w-md-auto">
          <div className="search-wrapper flex-grow-1">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search users..."
              aria-label="Search users"
            />
          </div>
          <button className="btn btn-primary btn-create-user">
            <i className="bi bi-plus-lg"></i>
            <span className="d-none d-sm-inline">Create New User</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : (
        <div className="row g-4">
          {users.map((user) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={user.login.uuid}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;