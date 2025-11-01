import KpiCard from "../components/KpiCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 90 },
  { name: "Wed", users: 150 },
  { name: "Thu", users: 200 },
  { name: "Fri", users: 170 },
];

export default function Dashboard() {
  return (
    <>
      <h1 style={{ marginBottom: 30 }}>Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        <KpiCard title="Total Users" value="1,245" />
        <KpiCard title="Active This Week" value="391" />
        <KpiCard title="Conversions" value="58%" />
      </div>

      <h2 style={{ marginTop: 40, marginBottom: 10 }}>User Growth</h2>
      <div style={{ width: "100%", height: 300, background:"#fff", borderRadius:10, padding:20 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#4CAF50" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
