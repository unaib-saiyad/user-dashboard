import React, { useContext, useMemo, useState } from "react";
import UserCard from "../components/UserCard";
import SkeletonCard from "../components/SkeletonCard";
import UserContext from '../context/UserContext';
import useDebounce from "../hooks/useDebounce";

const Dashboard = () => {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 500);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`;

      return fullname.toLowerCase().includes(debouncedValue.toLowerCase());
    });
  }, [users, debouncedValue]);

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
      ) : (filteredUsers.length ?
        (
          <div className="row g-4">
            {filteredUsers.map((user) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={user.login.uuid}>
                <UserCard user={user} />
              </div>
            ))}
          </div>
        )
        :
        (
          <div className="text-center py-5">
            <i className="bi bi-search display-1 text-secondary"></i>

            <h3 className="mt-3">No Users Found</h3>

            <p className="text-muted mb-4">
              We couldn't find any users matching your search.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>
          </div>

        )
      )}
    </div>
  );
};

export default Dashboard;