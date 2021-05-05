import { Router, useRouter } from 'next/router'

export default function QueryParameters() {
    const router = useRouter()

    const exampleQueryParams = {id: 123, name: 'tester', data: {foo: 123}, bar: ['abc', 'hello']}

    const addQueryParams = () => {
        router.push({
            pathname: '/query-parameters',
            query: exampleQueryParams
        })
    }
    console.log(router.query)

    return ( <div>
        <h1>Query Parameters available from useRouter in router.query</h1>
        <button onClick={addQueryParams}>Add Query Parameters</button>
        <br/>
        <p>objects aren't passed data: {"{foo:123}"}</p>
        {JSON.stringify(exampleQueryParams)}
        <br/>

        <h2>Query Parameters read from the URL:</h2>
        {JSON.stringify(router.query)}
    </div>

    )

}