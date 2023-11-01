import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TextForm from "./components/TextForm";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="textform" element={<TextForm />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
