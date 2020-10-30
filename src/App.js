import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const user = null;

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
