import {useEffect, useState} from 'react';
import axios from "axios";
import {NormalizeUrl} from "./Utils";
import StatusComponent from "./StatusComponent";
import "./App.css";

function App() {
    const [items, setItems] = useState({});
    const [serverError, setServerError] = useState({code: 0}) //1- error in list 2- error in sensor

    useEffect(() => {
        const request = () => {
            axios.get(`${NormalizeUrl({...window.apiUrl.tempMonitor.productList})}`).then(resp => {
                const {data} = resp;
                setServerError({code: 0});
                data.forEach((product) => {
                    axios.get(`${NormalizeUrl({
                        ...window.apiUrl.tempMonitor.getStats,
                        params: {id: product.id}
                    })}`).then(response => {
                        setItems((prevItems) => ({
                            ...prevItems,
                            [product.id]: {
                                ...product,
                                ...response.data,
                            },
                        }));
                        setServerError({code: 0});
                    }).catch(ex => {
                        setItems((prevItems) => ({
                            ...prevItems,
                            [product.id]: {
                                error: true,
                                errorMessage: ex.message
                            },
                        }));
                        setServerError({code: 2, message: ex.message})
                    })
                })
            }).catch(ex => {
                setServerError({
                    code: 1,
                    message: ex.message
                })
            })
            //with this way cypress could not work correctly
            // fetch(`${NormalizeUrl({...window.apiUrl.tempMonitor.productList})}`)
            //     .then((response) => response.json())
            //     .then((data) => data.forEach((product) => {
            //       fetch(`${NormalizeUrl({...window.apiUrl.tempMonitor.getStats,params:{id:product.id}})}`)
            //           .then((response) => response.json())
            //           .then((response) =>
            //               setItems((prevItems) => ({
            //                 ...prevItems,
            //                 [product.id]: {
            //                   ...product,
            //                   ...response,
            //                 },
            //               }))
            //           );
            //     }))
        }


        setInterval(request, 5000);

        request();
    }, []);

    return (
        <div className="App">
            <h2>Beers</h2>
            <table>
                <thead>
                <tr data-cy={"monitor-columns"}>
                    <th align="left">Product</th>
                    <th align="left">Temperature</th>
                    <th align="left">Status</th>
                </tr>
                </thead>
                {
                    serverError.code === 1 &&
                    <h2 data-cy={"listLoadError"}>Error While Load List ({serverError.message})</h2>
                }
                <tbody data-cy={"productList"}>
                {Object.keys(items).map((itemKey) => (
                    <tr key={items[itemKey].id} data-cy={"product" + items[itemKey].id}>
                        <td width={150}>{items[itemKey].name}</td>
                        <td width={150}>{items[itemKey].temperature}</td>
                        <td width={150}>
                            <StatusComponent item={items[itemKey]}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
