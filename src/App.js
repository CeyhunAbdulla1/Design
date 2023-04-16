import "../src/main.css"
import Desktop from "./pages/Desktop";
import CommentList from "./pages/Details";
import Editing from "./pages/Editing";
import Roadmap from "./pages/Roadmap";
import NewFeedback from "./pages/NewFeedback";
import DesktopEmpty from "./pages/DesktopEmpty";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
            <Routes>
            <Route path="/" element={<Desktop/>} />
            <Route path="/empty" element={<DesktopEmpty/>} />
            <Route path="/details" element={<CommentList/>}></Route>
            <Route path="/newfeedback" element={<NewFeedback/>}></Route>
            <Route path="/editing" element={<Editing/>}></Route>
            <Route path="/roadmap" element={<Roadmap/>}></Route>
            </Routes>

    </div>
  );
}

export default App;
