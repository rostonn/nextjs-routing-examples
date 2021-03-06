import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next js Routing Examples</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>NextJS Routing Examples</h1>
        <ul>
          <li>
          <Link href="/index-route">Index Route - folder about-index-route/index.js</Link>
          </li>
          <li>
          <Link href="/static-route" >Static Route - file static-route.js</Link>
          </li>


          <li>
          <Link href="/site-generation/ssr" >Server Side Rendered component - /site-generation/ssr</Link>
          </li>


          <li>
          <Link href="/site-generation/ssg" >Static Site Rendered component - /site-generation/ssg</Link>
          </li>

          <li>
          <Link href="/site-generation/isr" >Incremental Static Site Rendered component - /site-generation/isr</Link>
          </li>

          <li>
          <Link href="/pre-fetch" >Examples showing nextjs prefetching</Link>
          </li>

          <li>
          <Link href="/use-router" >useRouter Example - /use-router</Link>
          </li>

          <li>
          <Link href="/query-parameters" >Query Parameters Example - /query-parameters</Link>
          </li>

          <li>
          <Link href="/path-variables/1234" >Path Variable Single Param Example - filename /pages/path-variables/[id].js</Link>
          </li>

          <li>
          <Link href="/query-parameters" >Path Variable Multiple Params Example - /query-parameters</Link>
          </li>

          <li>
          <Link href="/redux" >Redux examples maintain state while routing - /redux</Link>
          </li>

        </ul>

        <style jsx>{`
          li {
            padding: 25px;
            
          }     
  `}</style>



      </main>

    </div>
  )
}
