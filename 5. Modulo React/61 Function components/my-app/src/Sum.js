export function Sum({ numbers }) {
    return <h1>Sum is: {numbers.reduce((a,b) => a+b, 0)}.</h1>
}