import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Grid} from "@material-ui/core";

const Hydrological = () => {
    const [weather, setWeather] = useState([]);
    const [selected_weather, setSelected_weather] = useState([]);
    const fetchData = async () => {
        const data = await fetch('https://danepubliczne.imgw.pl/api/data/synop/')
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
        setWeather(data);
    }
    const style = {
        margin: "20px",
        padding: "5px",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
        verticalAlign: "center"
    };
    const renderObject = (object:any) =>{
        if(Object.keys(object).length === 0){
            return(<div><p>No location selected</p></div>);
        }
        else {
            return (
                <div style={style}>
                    <p><span className="material-icons">thermostat</span>{object.temperatura} &#8451;</p>
                    <p><span className="material-icons"><span
                        className="material-icons">schedule</span></span>{object.data_pomiaru} {object.godzina_pomiaru}:00
                    </p>
                    <p><span className="material-icons">air</span>{object.predkosc_wiatru} km/h</p>
                    <p><span className="material-icons">explore</span>{object.kierunek_wiatru} &#176;</p>
                    <p><span>Humidity:</span>{object.wilgotnosc_wzgledna} %</p>
                    <p><span className="material-icons">water_drop</span>{object.suma_opadu} mm</p>
                    <p><span className="material-icons">compress</span>{object.cisnienie} hPa</p>
                </div>
            )
        }
    }
    useEffect(()=>{
        fetchData();
    }, []);
    return (
        <div className="App">
            <Grid container
                  spacing={0}
                  alignItems="center"
                  justify="center">
                <div>
                    <h1>Synoptic data from IMGW Api</h1>
                </div>
            </Grid>
            <Grid container
                  spacing={0}
                  alignItems="center"
                  justify="center">
                <div>
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
                        <div>
                            {renderObject(selected_weather)}
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default Hydrological;