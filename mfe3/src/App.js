import React, {useState} from "react";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{
      margin: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "lightblue"
    }}>
      <h1>Search</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default App;
