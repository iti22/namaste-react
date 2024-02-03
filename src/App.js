import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1 className="font-bold">Namaste React</h1> */}
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
