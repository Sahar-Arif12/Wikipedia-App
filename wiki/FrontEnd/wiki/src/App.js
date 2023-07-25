import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import User from './components/User';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
