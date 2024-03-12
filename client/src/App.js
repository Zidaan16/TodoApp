import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Sidebar from "./components/Sidebar.js";
import Add from "./pages/Add.js"

function App() {

  const wrapper = {
    padding: "4rem 4rem 4rem 8.5rem"
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div style={wrapper}>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/add"
              element={<Add />}
            />
            <Route 
              path="*"
              element="404"
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
