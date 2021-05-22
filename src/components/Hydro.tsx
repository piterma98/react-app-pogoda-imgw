import React, {useState, useEffect} from 'react';


const Hydrological = () => {
    const [weather, setWeather] = useState([]);
    const [selected_weather, setSelected_weather] = useState([]);
    const fetchData = async () => {
        const data = await fetch('https://danepubliczne.imgw.pl/api/data/hydro/')
            .then(response => response.json());
        setWeather(data);
    };
    useEffect(()=>{
        fetchData();
    }, []);
    const handleChange = (e:any) => {
        setSelected_weather(findArrayElementById(weather,e.target.value));
        console.log(selected_weather);
    }
    function findArrayElementById(array:any, id:any) {
        return array.find((element:any) => {
            return element.id_stacji === id;
        })
    }
    return (
    <div className="App">
            <h1>Hydrological data from IMGW Api</h1>
        <h2>Wybierz stacje</h2>
        <select onChange={handleChange}>
        {weather &&
        weather.map((weather:any, index:any) => {
            return(
            <option value={weather.id_stacji}>{weather.stacja}</option>
            );
        })}
        </select>
        <div>
            {Object.entries(selected_weather).map(([key, value]) =>
                <p>{key} : {value}</p>
            )}
        </div>
        </div>
    );
};

export default Hydrological;