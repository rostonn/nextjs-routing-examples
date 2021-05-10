import { getAsyncNumberOfDevices } from '../../site-generation/isr'
import { useSelector } from "react-redux"

 export default function SSR(props) {
    const count = useSelector(state => state.counter.count)

    console.log(props)
    return ( <div>
       <h1> Server Side Rendering - Number of devices generated during each request</h1>
       <h1>reporting devices {props.numberOfDevices}</h1>

       Redux Count is {count}

    </div>)
}

export async function getServerSideProps() {

    const numberOfDevices = await getAsyncNumberOfDevices();
    console.log("number of devices: " + numberOfDevices);

    return { props: { numberOfDevices: numberOfDevices }};

}


