import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
