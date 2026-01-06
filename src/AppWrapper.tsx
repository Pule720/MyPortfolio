// src/AppWrapper.jsx
import { HashRouter } from "react-router-dom";
import App from "./App";

export default function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
