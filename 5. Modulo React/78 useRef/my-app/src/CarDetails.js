import { useRef, useEffect } from "react";

// index.js (to render) > App.js (to pass a dynamic initialData) > CarDetails.js (to create the uncontrolled form)
export function CarDetails({ initialData }) {
    const { defaultModel, defaultYear, defaultColor } = initialData;

    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();

    // If initialData changes in values, the default values are updated.
    useEffect(() => {
        modelRef.current.value = defaultModel;
        yearRef.current.value = defaultYear;
        colorRef.current.value = defaultColor;
    }, [defaultModel, defaultYear, defaultColor]);

    function handleInput(event) {
        const { name, value } = event.target;
        switch(name) {
            case "model":
                modelRef.current.value = value;
                break;
            case "year":
                yearRef.current.value = value;
                break;
            case "color":
                colorRef.current.value = value;
                break;
            default:
                break;
        }
    }

    return (
        <>
        <h1>Uncontrolled Form</h1>
        <p>Default values are present, but user can write in inputs.</p>
        <form>
            <input ref={modelRef} name="model" onChange={handleInput}/>
            <input ref={yearRef} name="year" onChange={handleInput}/>
            <input ref={colorRef} name="color" onChange={handleInput}/>
        </form>
        </>
    )
}