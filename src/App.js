import logo from './logo.svg';
import './App.css';
import Home from "./routes/home/home.component";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Home/>
    </div>
  );
}

export default App;
