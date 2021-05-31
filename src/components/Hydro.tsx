import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import { useSpring, animated } from 'react-spring';
import HydroSingleObject from './HydroSingleObject';

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
            return (
                <HydroSingleObject stacja={object.stacja} województwo={object.województwo}  rzeka={object.rzeka} temperatura_wody={object.temperatura_wody} temperatura_wody_data_pomiaru={object.temperatura_wody_data_pomiaru} stan_wody={object.stan_wody} stan_wody_data_pomiaru= {object.stan_wody_data_pomiaru} zjawisko_lodowe={object.zjawisko_lodowe} zjawisko_lodowe_data_pomiaru={object.zjawisko_lodowe_data_pomiaru} zjawisko_zarastania={object.zjawisko_zarastania} zjawisko_zarastania_data_pomiaru={object.zjawisko_zarastania_data_pomiaru}/>
            )
        }
    }
    useEffect(()=>{
        fetchData();
    }, []);
    return (
        <div className="container">
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
                        style={{ width: 350 }}
                        onChange={(event, newValue) => {
                            setSelected_data(newValue);
                        }}
                        renderInput={(params:any) => <TextField {...params} label="Choose station name" variant="outlined" />}
                    />
                    <div className='result'>
                        {renderObject(selected_data)}
                    </div>
                </animated.div>
            </Grid>
        </div>
    );
};

export default Hydrological;