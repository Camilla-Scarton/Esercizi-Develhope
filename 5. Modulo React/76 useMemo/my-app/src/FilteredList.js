import { useMemo } from "react";

export function FilteredList({ list }) {

    // filteredList is computed again only if list changes
    const filteredList = useMemo(() => {
        return list.filter(obj => obj.age > 18); // filter creates a shallow copy: original list remains the same
    }, [list]);

    return (
        <>
        <h1>Original list</h1>
        {list.map((obj) => <div key={obj.id}>{obj.name} has age equal to {obj.age}.</div>)}
        <h1>Filtered list</h1>
        {filteredList.map((obj) => <div key={obj.id}>{obj.name} is rendered because {obj.age} is greater than 18!</div>)}
        </>
    )
}