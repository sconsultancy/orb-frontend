import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>
        <Header></Header>
        <Outlet></Outlet>
      </h1>
    </div>
  );
}

export default App;
