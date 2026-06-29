import { useState } from "react";

function UserForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        nationality: "",
        email: "",
        phone: "",
        cell: "",
        street: "",
        city: "",
        state: "",
        country: "",
        postcode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            gender: formData.gender,

            name: {
                title: "",
                first: formData.firstName,
                last: formData.lastName,
            },

            location: {
                street: {
                    number: null,
                    name: formData.street,
                },
                city: formData.city,
                state: formData.state,
                country: formData.country,
                postcode: formData.postcode,
                coordinates: {
                    latitude: "",
                    longitude: "",
                },
                timezone: {
                    offset: "",
                    description: "",
                },
            },

            email: formData.email,

            login: {
                uuid: crypto.randomUUID(),
                username: "",
                password: "",
                salt: "",
                md5: "",
                sha1: "",
                sha256: "",
            },

            dob: {
                date: "",
                age: Number(formData.age),
            },

            registered: {
                date: "",
                age: null,
            },

            phone: formData.phone,
            cell: formData.cell,

            id: {
                name: "",
                value: null,
            },

            picture: {
                large: "",
                medium: "",
                thumbnail: "",
            },

            nat: formData.nationality,
        };

        onSubmit(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>Personal Information</h5>

            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                    className="form-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nationality</label>
                <input
                    type="text"
                    className="form-control"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                />
            </div>

            <h5>Contact</h5>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Cell</label>
                <input
                    type="text"
                    className="form-control"
                    name="cell"
                    value={formData.cell}
                    onChange={handleChange}
                />
            </div>

            <h5>Address</h5>

            <div className="mb-3">
                <label className="form-label">Street</label>
                <input
                    type="text"
                    className="form-control"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">City</label>
                <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">State</label>
                <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Postcode</label>
                <input
                    type="text"
                    className="form-control"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                />
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Create User
                </button>
            </div>
        </form>
    );
}

export default UserForm;