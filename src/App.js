import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/roboto"; // Defaults to weight 400.
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        
      </header>
    </div>
  );
}

export default App;
