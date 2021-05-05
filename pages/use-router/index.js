import { useRouter } from 'next/router'


export default function UseRouter() {
    const router = useRouter()

    const navigateHome = () => router.push('/')

    return (<div>
        <h1>Routing Using Next.js useRouter hook</h1>

        <button onClick={navigateHome}>Click to Navigate Home</button>

    </div>)
}