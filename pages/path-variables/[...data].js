import { useRouter } from 'next/router'

export default function () {
    const router = useRouter()
    const { data } = router.query

    return (<div>
        <h1>Filename: [...data].js</h1>
        <h1>data is the variable name</h1>
        <h1>Array of route values</h1>
        <h1>{JSON.stringify(data)}</h1>
    </div>)

}
