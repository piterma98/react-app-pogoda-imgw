import FieldFromObject from './FieldFromObject'
import { WiThermometer, WiDust } from "react-icons/wi";
import { TiWaves, TiCalendar, TiHomeOutline } from "react-icons/ti";
import { FaSnowflake } from "react-icons/fa";
import '../App.css'

interface Props {
    stacja: string;
    województwo: string;
    rzeka: string;
    temperatura_wody: string;
    temperatura_wody_data_pomiaru: string;
    stan_wody: string;
    stan_wody_data_pomiaru: string;
    zjawisko_lodowe: string;
    zjawisko_lodowe_data_pomiaru: string;
    zjawisko_zarastania: string;
    zjawisko_zarastania_data_pomiaru: string;
 }

const HydroSingleObject = (props: Props) => {
    return (
        <>
            <FieldFromObject icon={<TiHomeOutline />} description='Station name:' field={props.stacja}/>
            <FieldFromObject description='Voivodeship:' field={props.województwo}/>
            <FieldFromObject icon={<TiWaves />} description='River name:' field={props.rzeka}/>
            <FieldFromObject icon={<WiThermometer />} description='Water temperature:' field={props.temperatura_wody} unit={'\u2103'}/>
            <FieldFromObject icon={<TiCalendar />} description='Date of water temperature measurement:' field={props.temperatura_wody_data_pomiaru}/>
            <FieldFromObject description='Water level:' field={props.stan_wody} unit='mm'/>
            <FieldFromObject icon={<TiCalendar />} description='Date of water level measurement:' field={props.stan_wody_data_pomiaru}/>
            <FieldFromObject icon={<FaSnowflake />} description='Icing phenomenon:' field={props.zjawisko_lodowe}/>
            <FieldFromObject icon={<TiCalendar />} description='Date of icing phenomenon measurement:' field={props.zjawisko_lodowe_data_pomiaru}/>
            <FieldFromObject icon={<WiDust />} description='Fouling phenomenon:' field={props.zjawisko_zarastania}/>
            <FieldFromObject icon={<TiCalendar />}  description='Date of fouling phenomenon measurement:' field={props.zjawisko_zarastania_data_pomiaru}/>
        </>
    )
}

export default HydroSingleObject
