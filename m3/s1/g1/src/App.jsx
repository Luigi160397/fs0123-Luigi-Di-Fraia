import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import ClassComponent from "./components/ClassComponent";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent content="Ciao a tutti!" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponent numero1="1" numero2="2" numero3="3" numero4="4" />
        <ButtonComponent bgColor="red" textSize="2" buttonText="Bottone 1" />
        <ImageComponent
          larghezza="600px"
          altezza="400px"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/640px-Colosseo_2020.jpg"
          alt="Colosseo"
        />
        <ButtonComponent bgColor="green" textSize="3" buttonText="Bottone 2" />
        <ImageComponent
          larghezza="500px"
          altezza="300px"
          url="https://www.turismoroma.it/sites/default/files/Fontana%20di%20Trevi3.jpg"
          alt="Fontana di trevi"
        />
      </header>
    </div>
  );
}

export default App;
