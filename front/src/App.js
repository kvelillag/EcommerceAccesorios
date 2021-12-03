import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/router/router";
import Menu from "./components/navbar/navbar";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Router />
    </div>
  );
}

export default App;
