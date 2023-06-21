import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";

function App() {
  return <>
  {/* This strips away the browsers default styling */}
  <CssBaseline />
  <h1>Todos</h1>
  <TodoList/>
  </>;
}

export default App;