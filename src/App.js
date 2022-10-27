import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Active from "./components/Active";
import Left from "./components/Left";
import Navbar from "./components/Navbar";
import Right from "./components/Right";

function App() {
  const [screen, setScreen] = useState(window.innerWidth);
  const max = 800;
  useEffect(() => {
    const handleWindowSize = () => setScreen(window.innerWidth);
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);
  const [active, setActive] = useState([
    { item: "<<< Tik here to mark as completed", id: 1 },
    { item: "Press here to delete >>>", id: 2 },
  ]);
  const [del, setDel] = useState([]);
  const [Completed, setCompleted] = useState([]);

  function change(val, ch, k) {
    if (ch === "+") {
      setActive(active.concat({ item: val, id: k }));
      console.log(active);
    } else if (ch === "-") {
      let i = active.findIndex((elem) => elem.id === k);
      setDel(del.concat(active[i]));
      setActive([...active.slice(0, i), ...active.slice(i + 1)]);
    } else if (ch === "*") {
      let i = active.findIndex((elem) => elem.id === k);
      setCompleted(Completed.concat(active[i]));
      setActive([...active.slice(0, i), ...active.slice(i + 1)]);
    }
  }
  return screen < max ? (
    <div>
      <Navbar />
      <div className="main">
        <Active list={active} changeToList={change} />
        <Left list={Completed} />
        <Right list={del} />
      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className="main">
        <Left list={Completed} />
        <Active list={active} changeToList={change} />
        <Right list={del} />
      </div>
    </div>
  );
}

export default App;
