import { useSelector } from "react-redux"

export default function Count() {
    const count = useSelector(state => state.counter.count)

    return (<div>
        Redux Count is {count}
    </div>

    )
}