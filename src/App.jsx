import "./App.css";
import List from "./components/List/List.jsx";
import ItemDetails from "./components/ItemDetails/ItemDetails.jsx";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/photo/:id" element={<ItemDetails />} />
    </Routes>
  );
}
