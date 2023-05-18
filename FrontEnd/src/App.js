import { BrowserRouter, Route, Routes } from "react-router-dom"
import ViewAllAds from './components/Advertisement_management_IT20301736/allAdvertisements';
import AddAdvertisement from './components/Advertisement_management_IT20301736/addAdvertisement';
import ViewAd from './components/Advertisement_management_IT20301736/singleview';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/allAdvertisments" element={< ViewAllAds />} />
          <Route path="/advertisementadd" element={< AddAdvertisement />} />
          <Route path="/editAd:id" element={< ViewAd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;