import { BrowserRouter, Route, Routes } from "react-router-dom"
import ViewAllAds from './components/Advertisement_management_IT20301736/allAdvertisements';
import AddAdvertisement from './components/Advertisement_management_IT20301736/addAdvertisement';
import ViewAd from './components/Advertisement_management_IT20301736/singleview';
import AdEdit from './components/Advertisement_management_IT20301736/editAd';
import AdManage from './components/Advertisement_management_IT20301736/manageAds';
import Header from './components/Advertisement_management_IT20301736/header';

function App() {
  return (
    <div>
      <BrowserRouter>
      {<Header/>}
        <Routes>
          <Route path="/allAdvertisments" element={< ViewAllAds />} />
          <Route path="/advertisementadd" element={< AddAdvertisement />} />
          <Route path="/viewSingle/:id" element={< ViewAd />} />
          <Route path="/editAd/:id" element={< AdEdit />} />
          <Route path="/manageAds" element={< AdManage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;