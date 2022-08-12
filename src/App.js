import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Links from "./components/Links";
import SignUp from "./pages/SignUp";
import Iphone from "./pages/Iphone";
import Mac from "./pages/Mac";

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/basket/:id" element={<Basket />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
