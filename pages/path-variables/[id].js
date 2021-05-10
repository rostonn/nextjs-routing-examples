import { useRouter } from 'next/router'

export default function () {
    const router = useRouter()
    const { id } = router.query

    return (<div>
        <h1>Filename is [id].js</h1>
        <h1>Variable is id</h1>
        <h1>ID is {id}</h1>
    </div>
    )
}