import Link from 'next/link'

export default function Prefetch() {


    return (<div>
        <h1>Pre fetching example</h1>

        <h3> Pre fetching Only works in production</h3>

        <ul>
            <li>
                <a href="/pre-fetch/WITHOUT-PREFETCH">normal &lt;a&gt; tag - no prefetch</a>
            </li>

            <li>
            <div style={{ border: "2px solid black" }}>
            <Link href="/pre-fetch/WITHOUT-PREFETCH" prefetch={false}
            >Link Component WITHOUT PREFETCH - still prefetches on hover</Link>
        </div>
            </li>

            <li>
            <Link href="/pre-fetch/WITH-PREFETCH">prefetch</Link>
            </li>
        </ul>
    </div>)
}

