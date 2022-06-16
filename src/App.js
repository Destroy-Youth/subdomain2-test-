import logo from './logo.svg';
import './App.css';

const domains = ["http://localhost:3000", "http://localhost:3001"];

window.addEventListener("message", messageHandler, false);

function messageHandler(event) {
  const { action, key, value } = event.data;
  if (action == "returnData") {
    console.log("host returns data", event.data);
    localStorage.setItem("sessionFromAfar", value);
    console.log(localStorage);
  }
}

function App() {
  function fetchData() {
    const iframe = document.getElementById("ifr");
    iframe.contentWindow.postMessage(
      {
        action: "get",
        key: "session",
      },
      "*"
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <iframe id="ifr" src={domains[0]}></iframe>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchData}>Get data from host</button>
        <button onClick={() => console.log(localStorage)}>
          print localStorage
        </button>
      </header>
    </div>
  );
}

export default App;
