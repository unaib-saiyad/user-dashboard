
export const fetchUsers = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    
    const response = await fetch(`${apiUrl}/?results=20`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    return data.results; 
}