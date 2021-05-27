import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import { useSpring, animated } from 'react-spring'

const Hydrological = () => {
    const [data, setData] = useState([]);
    const [selected_data, setSelected_data] = useState([]);
    const fetchData = async () => {
        const data = await fetch('https://danepubliczne.imgw.pl/api/data/hydro/')
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
        setData(data);
    }
    const style = {
        margin: "20px",
        padding: "5px",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "#3f51b5",
        fontFamily: "Arial",
        verticalAlign: "center",
    };
    const springPropsH1 = useSpring({
        from: { opacity: 0, marginLeft: -100 },
        to: { opacity: 1, marginLeft: 0 }
    })
    const springPropsDropList = useSpring({
        from: { opacity: 0, marginRight: -100 },
        to: { opacity: 1, marginRight: 0 }
    })
    const renderObject = (object:any) =>{
        if(Object.keys(object).length === 0){
            return(<div><p>No location selected</p></div>);
        }
        else{
            Object.keys(object).forEach(function(key) {
                if(object[key] === null) {
                    object[key] = '-missing data-';
                }
            })
            return (
                <div style={style}>
                    <p><span className="material-icons">home</span>{object.stacja}</p>
                    <p><span>Voivodeship:</span>{object.województwo}</p>
                    <p><span className="material-icons">water</span>{object.rzeka}</p>
                    <p><span className="material-icons">thermostat</span>{object.temperatura_wody} &#8451;</p>
                    <p><span className="material-icons">schedule</span>{object.temperatura_wody_data_pomiaru}</p>
                    <p><span>Water level:</span>{object.stan_wody}</p>
                    <p><span className="material-icons">schedule</span>{object.stan_wody_data_pomiaru}</p>
                    <p><span className="material-icons">ac_unit</span>{object.zjawisko_lodowe}</p>
                    <p><span className="material-icons">schedule</span>{object.zjawisko_lodowe_data_pomiaru}</p>
                    <p><span>Fouling factor:</span>{object.zjawisko_zarastania}</p>
                    <p><span className="material-icons">schedule</span>{object.zjawisko_zarastania_data_pomiaru}</p>
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
                <animated.div style={springPropsH1}>
                    <Typography
                        variant="h5"
                        color="inherit"
                        align="center"
                        gutterBottom
                    >
                        Hydrological data from IMGW Api
                    </Typography>

                </animated.div>
            </Grid>
            <Grid container
                  spacing={0}
                  alignItems="center"
                  justify="center">
                <animated.div style={springPropsDropList}>
                    <Autocomplete
                        id="combo-box"
                        disableClearable
                        options={data}
                        getOptionLabel={(option:any) => option.stacja}
                        style={{ width: 300 }}
                        onChange={(event, newValue) => {
                            setSelected_data(newValue);
                        }}
                        renderInput={(params:any) => <TextField {...params} label="Choose location" variant="outlined" />}
                    />
                    <div>
                        <div>
                            {renderObject(selected_data)}
                        </div>
                    </div>
                </animated.div>
            </Grid>
        </div>
    );
};

export default Hydrological;