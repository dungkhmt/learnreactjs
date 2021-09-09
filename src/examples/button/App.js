import "./App.css";
function App() {
  function handleClick() {
    alert("You clicked the button");
    console.log("You clicked the button");
  }
  return (
    <div>
      <button className="button" onClick={handleClick}>
        Click me to do something
      </button>
    </div>
  );
}

export default App;
