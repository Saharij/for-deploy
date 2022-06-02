import { useEffect, useState } from 'react';
import { getCurrency } from './api';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCurrency()
      .then(res => setData(res))
  }, [])

  return (
    <div className="App">
      <h1>
        You are working!
      </h1>
      {data.length > 0 && (
        <ul>
          {data.map(item => (
            <li>
              {item.ccy}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
