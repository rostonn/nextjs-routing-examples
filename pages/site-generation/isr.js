
export async function getAsyncNumberOfDevices () {
   return await new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
       return Math.floor((Math.random() * 1000) + 1);
   })
}


export default function Isr(props) {
    console.log(props)
    return ( <div>
       <h1> Incremental Static Regeneration - Number of devices generated during build time, and during the revalidate interval of {" " + props.revalidateSeconds} seconds
       </h1>
       <h1>reporting devices {"" + props.numberOfDevices}</h1>
    </div>)
    }

export async function getStaticProps() {
    const revalidateSeconds = 5;

    const numberOfDevices = await getAsyncNumberOfDevices();
    console.log("number of devices: " + numberOfDevices);

    return { props: { numberOfDevices: numberOfDevices, revalidateSeconds: revalidateSeconds }, revalidate: revalidateSeconds };

}


