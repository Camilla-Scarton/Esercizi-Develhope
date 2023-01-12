// JSX expression with tag: it's rendered a h1 title
const htmlName = <h1>Camilla</h1>

// It's rendered Camilla as the div content returned
const stringName = "Camilla"

// It's rendered a h1 title with "Camilla" as content
const htmlStringName = <h1>"Camilla"</h1>

// If we pass tags, we nest tags: only stringName works well.
function Welcome(name) {
  return <h1>Hello, {name}!</h1>
}

function App() {
  return (
    <div>
      {htmlName}
      {stringName}
      {htmlStringName}
      
      {Welcome(htmlName)}
      {Welcome(stringName)}
      {Welcome(htmlStringName)}
    </div>
  );
}

export default App;
