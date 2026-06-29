import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { fetchUsers } from "../services/userService";

const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getUsers = async () => {
            try {
                setLoading(true);

                const data = await fetchUsers();

                setUsers(data);
                setError(null);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();

    }, []);

    return (
        <UserContext.Provider
            value={{
                users,
                loading,
                error,
                setUsers,
                setLoading
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;