import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  {field: 'id', headerName: 'ID', width: 20},
  {field: 'title', headerName: 'Title', width: 200},
  {field: 'body', headerName: 'Description', width: 600},
];

const Grid = () => {
  const [tableData, setTableData] = useState ([]);

  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/posts')
      .then (data => data.json ())
      .then (data => setTableData (data));
  }, []);
  console.log (tableData);
  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        autoHeight={true}
      />
    </div>
  );
};

export default Grid;
