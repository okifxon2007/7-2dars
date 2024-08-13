import React, { useEffect, useState } from 'react';
import '../cardone/index.css'
const Cardtwo = () => {
    const [prod, setprod] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/all?_start=10&_limit=10')
            .then(resp => resp.json())
            .then(data => {
                setprod(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='cardone conta'>
            {prod.map((item, index) => (
                <div className="carrd" key={index}>
                    <img src="https://picsum.photos/200/300" alt="" />
                    <h1>{item.country}</h1>
                    <p>{item.code} <span>{item.id}</span></p>
                </div>
            ))}
        </div>
    );
};

export default Cardtwo;
