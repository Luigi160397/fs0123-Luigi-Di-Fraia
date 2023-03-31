import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* <Profile /> */}
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
