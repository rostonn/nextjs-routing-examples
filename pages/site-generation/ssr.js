import { getAsyncNumberOfDevices } from './isr'

 export default function SSR(props) {
    console.log(props)
    return ( <div>
       <h1> Server Side Rendering - Number of devices generated during each request</h1>
       <h1>reporting devices {props.numberOfDevices}</h1>
    </div>)
}

export async function getServerSideProps() {

    const numberOfDevices = await getAsyncNumberOfDevices();
    console.log("number of devices: " + numberOfDevices);

    return { props: { numberOfDevices: numberOfDevices }};

}


