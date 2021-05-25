import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    return (
    <div className="App">
            <h1>Hydrological data from IMGW Api</h1>
        <Autocomplete
            id="combo-box"
            disableClearable
            options={weather}
            getOptionLabel={(option:any) => option.stacja}
            style={{ width: 300 }}
            onChange={(event, newValue) => {
                setSelected_weather(newValue);
            }}
            renderInput={(params:any) => <TextField {...params} label="Choose location" variant="outlined" />}
        />
        <div>
            {Object.entries(selected_weather).map(([key, value]) =>
                <p>{key} : {value}</p>
            )}
        </div>
    </div>
    );
};

export default Hydrological;