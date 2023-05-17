import './App.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";

const columns: GridColDef[] = [
  { field: "id", headername: "Id", width: 150 },
  { field: "name", headername: "Name", width: 200 },
  { field: "username", headername: "Username", width: 150 },
  { field: "email", headername: "Umail", width: 250 },
  { field: "phone", headername: "Phone", width: 250 },
  { field: "website", headername: "Website", width: 150 },
];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <DataGrid rows={data} columns={columns} />
    </div>
  );
}

export default App;