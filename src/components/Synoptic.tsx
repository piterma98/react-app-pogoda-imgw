import React, {useState, useEffect} from 'react';

const Synoptic = () => {
    useEffect(() =>{
        getData();
    },[]);
    const [data, setData] = useState([]);
    const getData = async () =>{
        const data = await fetch('https://danepubliczne.imgw.pl/api/data/synop')
            .then(response => response.json());
        setData(data);
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Synoptic;