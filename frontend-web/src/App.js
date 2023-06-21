import { useEffect, useState } from 'react';
import axios from 'axios';
import StatusColumn from './StatusColumn';
import './App.css';

const SERBER_URL = 'http://localhost:8081';

function App() {
  const [items, setItems] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const request = () =>
      products.forEach((product) => {
        axios.get(`${SERBER_URL}/temperature/${product.id}`).then((response) =>
          setItems((prevItems) => ({
            ...prevItems,
            [product.id]: {
              ...product,
              ...response.data,
            },
          }))
        );
      });

    setInterval(request, 5000);

    request();
  }, [products, products.length]);

  useEffect(() => {
    axios.get(`${SERBER_URL}/productList`).then((resp) => {
      setProducts(resp.data);
    });
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody data-cy={'productList'}>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id} id={`pid${items[itemKey].id}`}>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={150} data-cy={'statusCol'}>
                <StatusColumn status={items[itemKey].status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
