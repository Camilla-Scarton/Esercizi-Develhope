function Welcome(name){
  return <h1>Hello, {name}!</h1> 
}

// Alternative solution
//const Welcome = (name) => <h1>Hello, {name}!</h1>

// No need to save variable: we can call {Welcome("Camilla")} too
const output = Welcome("Camilla");

function App() {
  return (
    <div>
      {output}
    </div>
  );
}

export default App;
