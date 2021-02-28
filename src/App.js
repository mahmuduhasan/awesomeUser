import "./App.css";
import MainComponent from "./Components/MainComponent";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import dataStore from "./Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={dataStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
