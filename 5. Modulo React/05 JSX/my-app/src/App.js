const Sum = (a,b) => <h2>{a+b}</h2>

const FancySum = (a,b) => {
  return (
    <h2>
      La somma tra {a} e {b} è uguale a {a+b}!
    </h2>
  )
}

function App() {
  return (
    <div>
      <h2>La somma è:</h2> 
      {Sum(1,4)}
      ---
      {FancySum(4,6)}
    </div>
  );
 }
  
 export default App;
 