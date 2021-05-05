import { getAsyncNumberOfDevices } from './isr'

 export default function SSG(props) {
     console.log(props)
     return ( <div>
        <h1> Static Site Generation - Number of devices generated once during build</h1>
        <h1>reporting devices {props.numberOfDevices}</h1>
     </div>)

 }
 
 export async function getStaticProps() {
 
     const numberOfDevices = await getAsyncNumberOfDevices();
     console.log("number of devices: " + numberOfDevices);
 
     return { props: { numberOfDevices: numberOfDevices }};

 }
 
 
 