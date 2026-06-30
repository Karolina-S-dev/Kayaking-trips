import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import HomeScreen from "./components/HomeScreen";
import TripsScreen from "./components/TripsScreen";
import GalleryScreen from "./components/GalleryScreen";
import FaqScreen from "./components/FaqScreen";
import ContactScreen from "./components/ContactScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/trips" element={<TripsScreen />} />
      <Route path="/gallery" element={<GalleryScreen />} />
      <Route path="/faq" element={<FaqScreen />} />
       <Route path="/contact" element={<ContactScreen />} />
    </Routes>
  );
}

export default App;
