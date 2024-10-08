import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index={true} path="/" element={<HomeScreen></HomeScreen>}></Route>
      <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
      <Route
        path="/register"
        element={<RegisterScreen></RegisterScreen>}
      ></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  </Provider>
);
