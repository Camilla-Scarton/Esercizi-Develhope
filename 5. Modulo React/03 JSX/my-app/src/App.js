function Welcome(name){
  return <h1>Hello, {name}!</h1> 
}

// Calling without passing parameter affects render: it's rendered "Hello, !"
const output = Welcome();

function App() {
  return (
    <div>
      {output}
    </div>
  );
}

export default App;