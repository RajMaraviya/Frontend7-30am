import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
      name: 'id',
      selector: row => row.id,
      width: '200px'
  },
  {
      name: 'name',
      selector: row => row.name,
      width: '200px'
  },
  {
      name: 'year',
      selector: row => row.year,
      width: '200px'
  },
  {
      name: 'color',
      selector: row => row.color,
      width: '200px'
  },
  {
      name: 'pantone_value',
      selector: row => row.pantone_value,
      width: '200px'
  },
];


function UsersTable() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage])

  useEffect(()=>{
    const result = items.filter((row)=>{
        return row.name.toLowerCase().match(search?.toLocaleLowerCase());
        console.log(row)
    });
    setItems(result);
  },[search])

  const fetchData = async (page, per_page) => {
    fetch(`https://reqres.in/api/user?page=${page}&per_page=${per_page}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          setTotalRows(result.total);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const handlePageChange = page => {
    fetchData(page, perPage);
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <input type='text'
        placeholder='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
    );
  }
}

export default UsersTable;