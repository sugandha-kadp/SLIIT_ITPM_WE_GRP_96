import { BrowserRouter, Route, Routes } from "react-router-dom"
import ViewAllAds from './components/Advertisement_management_IT20301736/allAdvertisements';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/allAdvertisments" element={< ViewAllAds />} />
          console.log("Hello");
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;