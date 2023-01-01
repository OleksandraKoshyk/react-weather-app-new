import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/roboto"; // Defaults to weight 400.
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/OleksandraKoshyk"
            target="_blank"
            rel="noreferrer"
          >
            Oleksandra Koshyk
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/OleksandraKoshyk/react-weather-app-new"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
