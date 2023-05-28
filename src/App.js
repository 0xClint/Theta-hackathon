import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Header, Sidebar } from "./components";

function App() {
  return (
    <div className="App flex bg-[#1F1D2B] text-white">
      <div className="sticky w-64">
        <Sidebar />
      </div>
      <div className="w-[100%] flex flex-col flex-1 z-1000">
        <div className=" h-[70px] z-1000">
          <Header />
        </div>
        <div className="-z-1000">
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
