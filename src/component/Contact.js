import axios from "axios";
import React, { useState, useEffect } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("http://localhost:8000/api")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const userData = { name, email, password };
        
        if (editId) {
            axios.put(`http://localhost:8000/api/user/${editId}`, userData)
                .then(() => {
                    fetchUsers();
                    setEditId(null);
                })
                .catch(err => console.log(err));
        } else {
            axios.post("http://localhost:8000/api/user", userData)
                .then(() => fetchUsers())
                .catch(err => console.log(err));
        }
        
        setEmail("");
        setPassword("");
        setName("");
    };

    const handleDelete = (email) => {
        axios.delete(`http://localhost:8000/api/user/${email}`)
            .then(() => fetchUsers())
            .catch(err => console.log(err));
    };

    const handleEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setEditId(user._id);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto" }}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: "10px", padding: "8px" }} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: "10px", padding: "8px" }} />
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: "10px", padding: "8px" }} />
                <input type="submit" value={editId ? "Update User" : "Add User"} style={{ margin: "10px", padding: "8px", backgroundColor: "#28a745", color: "white", cursor: "pointer" }} />
            </form>
            <table border="1" style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "10px", backgroundColor: "#ddd" }}>Name</th>
                        <th style={{ padding: "10px", backgroundColor: "#ddd" }}>Email</th>
                        <th style={{ padding: "10px", backgroundColor: "#ddd" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td style={{ padding: "10px" }}>{user.name}</td>
                            <td style={{ padding: "10px" }}>{user.email}</td>
                            <td style={{ padding: "10px" }}>
                                <button onClick={() => handleEdit(user)} style={{ margin: "5px", padding: "5px", backgroundColor: "#007bff", color: "white", cursor: "pointer" }}>Edit</button>
                                <button onClick={() => handleDelete(user.email)} style={{ margin: "5px", padding: "5px", backgroundColor: "#dc3545", color: "white", cursor: "pointer" }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact;
