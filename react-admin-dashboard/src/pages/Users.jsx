import { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Uğur Semizoğlu", email: "ugur@example.com", role: "Admin" },
  { id: 2, name: "Cem Demir", email: "cem@example.com", role: "Editor" },
  { id: 3, name: "Ayşe Aksoy", email: "ayse@example.com", role: "User" },
  { id: 4, name: "Hasan Karadağ", email: "hasan@example.com", role: "User" },
  { id: 5, name: "Ece Yılmaz", email: "ece@example.com", role: "User" },
];

export default function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = dummyUsers.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 style={{ marginBottom: 20 }}>Users</h1>

      <input 
        type="text" 
        placeholder="Search by name or email..." 
        style={{ padding: 10, width: 300, marginBottom: 20 }} 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <table style={{ width: "100%", background:"#fff", borderRadius:10 }}>
        <thead>
          <tr style={{ textAlign:"left", borderBottom:"1px solid #eee" }}>
            <th style={{ padding:12 }}>ID</th>
            <th style={{ padding:12 }}>Name</th>
            <th style={{ padding:12 }}>Email</th>
            <th style={{ padding:12 }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user=>(
            <tr key={user.id}>
              <td style={{ padding:12 }}>{user.id}</td>
              <td style={{ padding:12 }}>{user.name}</td>
              <td style={{ padding:12 }}>{user.email}</td>
              <td style={{ padding:12 }}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
