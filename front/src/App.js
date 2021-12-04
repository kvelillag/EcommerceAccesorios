import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/router/router";
import Menu from "./components/navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
