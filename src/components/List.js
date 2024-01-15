import Item from "./Item";

function List() {
    return(
        <>
            <h1>
                <ul>
                    <Item marca="Ferrari" anoLancamento={1985} />
                    <Item marca="Fiat" anoLancamento={2023} />
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </h1>
        </>
    )
}

export default List