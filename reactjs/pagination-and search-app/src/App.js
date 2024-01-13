import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://reqres.in/api/user')
      .then((response) => response.json())
      .then((user) => setUser(user))
  }, [])

  return (
    <div className="App">
      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>year</td>
            <td>color</td>
            <td>pantone_value</td>
          </tr>
        </thead>
        <tbody>
          {user && user.data.map((item) => {
            return (
              <>
                <tr>
                  <td key={item.id}>{item.id}</td>
                  <td key={item.name}>{item.name}</td>
                  <td key={item.year}>{item.year}</td>
                  <td key={item.color}>{item.color}</td>
                  <td key={item.pantone_value}>{item.pantone_value}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
