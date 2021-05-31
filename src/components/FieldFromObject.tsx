import { VscDebugBreakpointData } from "react-icons/vsc";
import { useSpring, animated } from 'react-spring';
import '../App.css'

interface Props {
    description: string;
    field: string;
    unit: string;
    icon: object;
 }

const FieldFromObject = (props: Props) => {
    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    })
    const isFieldMissing = props.field === null ? true : false;
    return (
        <animated.div style={animation}>
            <h4>{props.icon} {props.description}</h4>
            {isFieldMissing? <p style={{color: "red", fontWeight: 'bold'}}>-data is missing-</p> : <p>{props.field} {props.unit}</p>}
        </animated.div>
    )
}
FieldFromObject.defaultProps = {
    unit: '',
    icon: <VscDebugBreakpointData />
}

export default FieldFromObject
