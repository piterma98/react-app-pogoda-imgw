import FieldFromObject from './FieldFromObject'
import { WiThermometer, WiDust } from "react-icons/wi";
import { TiWaves, TiCalendar, TiHomeOutline } from "react-icons/ti";
import { FaSnowflake } from "react-icons/fa";
import '../App.css'

interface Props {
    stacja: string,
    data_pomiaru: string,
    godzina_pomiaru: string,
    temperatura: string,
    predkosc_wiatru: string,
    kierunek_wiatru: string,
    wilgotnosc_wzgledna: string,
    suma_opadu: string,
    cisnienie: string
 }

export const SynopticSingleObject = (props: Props) => {
    return (
        <>
            <FieldFromObject icon={<TiHomeOutline />} description='Station name:' field={props.stacja}/>
            <FieldFromObject icon={<TiWaves />} description='Measurement date' field={props.data_pomiaru}/>
            <FieldFromObject description='Measurement hour:' field={props.godzina_pomiaru}/>
            <FieldFromObject icon={<WiThermometer />} description='Temperature:' field={props.temperatura} unit={'\u2103'}/>
            <FieldFromObject description='Wind speed:' field={props.predkosc_wiatru} unit='m/s'/>
            <FieldFromObject description='Wind direction:' field={props.kierunek_wiatru} />
            <FieldFromObject description='Humidity:' field={props.wilgotnosc_wzgledna} unit='%'/>
            <FieldFromObject description='Total rainfall:' field={props.suma_opadu} unit='mm'/>
            <FieldFromObject description='Air pressure:' field={props.cisnienie} unit='hPa'/>
        </>
    )
}
export default SynopticSingleObject