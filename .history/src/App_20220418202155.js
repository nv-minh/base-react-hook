import "./App.css";
import logo from "./logo.svg";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <img src={logo} className="App-logo" alt="logo" />
        <Home></Home>
      </header>
      <div className="content-right">
      <AddNewProduct></AddNewProduct>
      </div>
    </div>
  );
}

export default App;
