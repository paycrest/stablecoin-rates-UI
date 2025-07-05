import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Developers from "./pages/Developers";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col relative pb-21">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Developers />} path="/developers" />
      </Routes>
    </div>
  );
}

export default App;
