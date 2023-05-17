import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import { createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  // By enabling this option, if you have non-MUI elements (e.g. `<div />`)
  // using MUI classes (e.g. `.MuiButton`) they will lose styles.
  // Make sure to convert them to use `styled()` or `<Box />` first.
  disableGlobal: true,
  // Class names will receive this seed to avoid name collisions.
  seed: 'mui-jss',
});

import React,  {useState, useEffect} from 'react';

const columns = [
  {
    field : "id", headername : "id",
    field : "name", headername : "name",
    field : "username", headername : "username",
    field : "email", headername : "email",
    field : "phone", headername : "phone",
    field : "website", headername : "website",

  }
];


function App() {

  const [data, setData] = useState([]);

useEffect (() => {
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(resp => resp.json())
     .then(data => {
      setData(data)
     })
} ,[])

  return (
    <div className="App">
      <DataGrid
      row= {data}
      columns = {columns}
      />
    </div>
  );
}

export default App;
