import "./App.css";
import { useSessionContext } from "./contexts/SessionContext";
import Navigation from "./navigation/Navigation";

function App() {
  const { toggleAuthentication, toggleCharte, authenticationFlag, charteFlag } =
    useSessionContext();

  return (
    <div className="App">
      <button onClick={toggleCharte}>
        Charte Flag ({charteFlag ? "on" : "off"})
      </button>
      <button onClick={toggleAuthentication}>
        Authentication Flag ({authenticationFlag ? "on" : "off"})
      </button>
      <Navigation />
    </div>
  );
}

export default App;
