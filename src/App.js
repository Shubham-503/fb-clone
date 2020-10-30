import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <h1>
          <Login />
        </h1>
      ) : (
        <>
          <Header />
          <Body />
        </>
      )}
    </div>
  );
}

export default App;
