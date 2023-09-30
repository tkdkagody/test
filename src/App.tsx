import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const token = import.meta.env.VITE_USER_TOKEN;
  console.log(token);
  const [count, setCount] = useState(0);

  return <> github action + firebase ci/cd 성공했으면 좋겠다, </>;
}

export default App;
