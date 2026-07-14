import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import HomeScreen from "./components/HomeScreen";
import TripsScreen from "./components/TripsScreen";
import GalleryScreen from "./components/GalleryScreen";
import FaqScreen from "./components/FaqScreen";
import ContactScreen from "./components/ContactScreen";
import PrivacyPolicy from "./components/Home/PrivacyPolicy";
import FamilyTripsScreen from "./components/Trips/FamilyTripsScreen";
import OneDayTripsScreen from "./components/Trips/OneDayTripsScreen";
import MultiDayTripsScreen from "./components/Trips/MultiDayTripsScreen";
import OnRequestTripsScreen from "./components/Trips/OnRequestTripsScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/trasy-splywow" element={<TripsScreen />} />
      <Route
        path="/trasy-splywow/splywy-rodzinne"
        element={<FamilyTripsScreen />}
      />
      <Route
        path="/trasy-splywow/splywy-jednodniowe"
        element={<OneDayTripsScreen />}
      />
       <Route
        path="/trasy-splywow/splywy-kilkudniowe"
        element={<MultiDayTripsScreen />}
      />
      <Route
        path="/trasy-splywow/splywy-na-zyczenie"
        element={<OnRequestTripsScreen />}
      />
      <Route path="/galeria" element={<GalleryScreen />} />
      <Route path="/faq" element={<FaqScreen />} />
      <Route path="/kontakt" element={<ContactScreen />} />
      <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
