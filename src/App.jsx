import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  return <>
  {/* This strips away the browsers default styling */}
  <CssBaseline />
  <Navbar />
  <TodoList/>
  </>;
}

export default App;
