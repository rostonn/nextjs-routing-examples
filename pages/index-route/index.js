import Link from 'next/link'
function IndexRoute() {
    return (<div>
        <h1>Index Route - index.js file in pages/index-route folder</h1>

        <ul>
            <li>
                <Link href="/index-route/nested">/index-route/nested</Link>
            </li>
            <li>
                <Link href="/index-route/nested/more-nested">/index-route/nested/more-nested</Link>
            </li>
        </ul>

    </div>

    )
}

export default IndexRoute