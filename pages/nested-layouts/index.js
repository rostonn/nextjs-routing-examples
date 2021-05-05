

export default function NestedLayouts({ children}) {

    return (<div>
        <h1>Nested Routes, using React to route for us instead of re-rendering the whole page</h1>
        <ul>
            <li>Tab 1</li>
            <li>Tab 2</li>
        </ul>

        {children}
    </div>)
}

NestedLayouts.Layout