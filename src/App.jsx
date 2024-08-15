import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [page, setPage] = useState(1);  
    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/all?_start=${(page - 1) * 1}&_limit=10`)  
            .then(resp => resp.json())
            .then(data => {
                setProd(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [page]);  

    function one(e) {
        e.preventDefault();
        console.log(e.target.value);
        setPage(Number(e.target.value));  
    }

    return (
        <div>
            <div className="container">
                <br />
                <br />
               <div className="prod container">
               {prod.map((item, index) => (
                    <div className="carrd" key={index}>
                        <img src="https://picsum.photos/200/300" alt="" />
                        <h1>{item.country}</h1>
                        <p>{item.code} <span>{item.id}</span></p>
                    </div>
                ))} 
                </div><br />
                <div className="but">
                    <button onClick={one} value={1}>1</button>
                    <button onClick={one} value={11}>2</button>
                    <button onClick={one} value={21}>3</button>
                    <button onClick={one} value={31}>4</button>
                    <button onClick={one} value={41}>5</button><br />
                    <button onClick={one} value={51}>6</button>
                    <button onClick={one} value={61}>7</button>
                    <button onClick={one} value={71}>8</button>
                    <button onClick={one} value={81}>9</button>
                    <button onClick={one} value={91}>10</button><br />
                    <button onClick={one} value={101}>11</button>
                    <button onClick={one} value={111}>12</button>
                    <button onClick={one} value={121}>13</button>
                    <button onClick={one} value={131}>14</button>
                    <button onClick={one} value={141}>15</button><br />
                    <button onClick={one} value={151}>16</button>
                    <button onClick={one} value={161}>17</button>
                    <button onClick={one} value={171}>18</button>
                    <button onClick={one} value={181}>19</button>
                    <button onClick={one} value={191}>20</button>
                </div>
            </div>

           
        </div>
    );
}

export default App;
