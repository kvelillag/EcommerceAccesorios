import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/router/router";
import Menu from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Menu />
      <Router />
    </div>
  );
}

export default App;
