import MyCounter from "./components/MyCounter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Zachary Jewett - r64s554
      </h2>

      <hr />
      <div>
        <MyCounter incBy={1}/>
        <hr />
        <MyGitHub />
        <hr />
        <MyCounter incBy={19} decBy={23}/>
      </div>

    </div>
  );
}

export default App;