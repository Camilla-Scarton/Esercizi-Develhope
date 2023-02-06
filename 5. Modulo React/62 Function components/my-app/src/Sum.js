// With default value
export function Sum({ numbers = [0] }) {
    return <h1>Sum is: {numbers.reduce((a,b) => a+b, 0)}.</h1>
}

// With check
export function SumWithCheck({ numbers }) {
    return <h1>Sum is: {numbers ? numbers.reduce((a,b) => a+b, 0) : "unknown"}.</h1>
}
