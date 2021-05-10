import { useDispatch, useSelector } from "react-redux"

import Link from 'next/link'
import { setCount } from '../../redux/counterSlice'

export default function ReduxCount() {
    const dispatch = useDispatch()
    const num = 989797

    const count = useSelector(state => state.counter.count)

    return (<div>
        <h1> Redux example, state persists when routing with nextjs Link component</h1>
        <h1> Count is {count}</h1>
        <button style={{ margin: "50px" }} onClick={() => dispatch(setCount(num))}>Set Redux Count to {num}</button>

        <br />
        <Link href="/redux/count">Link to Redux Count</Link>
        <br />
        <Link href="/redux/count-with-ssr">Link to Redux Count With Server Side Rendering</Link>
    </div>)
}