import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Header, Sidebar } from "./components";

function App() {
  return (
    <div className="App flex bg-[#1F1D2B] text-white">
      <Sidebar />
      <div className="w-[100%] flex flex-col">
        <Header />
        <div>
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
