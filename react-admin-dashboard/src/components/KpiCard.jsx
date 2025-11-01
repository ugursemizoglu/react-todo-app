export default function KpiCard({ title, value }) {
  return (
    <div style={{
      background:"#fff",
      padding:20,
      borderRadius:10,
      boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
      textAlign:"center"
    }}>
      <h3 style={{fontSize:16, marginBottom:8}}>{title}</h3>
      <h1 style={{fontSize:32, fontWeight:"bold"}}>{value}</h1>
    </div>
  );
}
