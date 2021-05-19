import React, {useState, useEffect} from 'react';

const Hydrological = () => {
    useEffect(() =>{
        getData();
    },[]);
    const [data, setData] = useState([]);
    const getData = async () =>{
        const data = await fetch('https://danepubliczne.imgw.pl/api/data/hydro/')
            .then(response => response.json());
        setData(data);
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Hydrological;