import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";

function App() {
  return (
    <div>
      <h1>
        <Toaster position="top-center" richColors />
        <Header></Header>
        <Outlet></Outlet>
      </h1>
    </div>
  );
}

export default App;
