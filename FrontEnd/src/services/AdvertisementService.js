import axios from 'axios';

const ADVERTISEMENT_API_BASE_URL = "http://localhost:8087/api/v2/Advertisement";

class AdvertisementService {

    getallAdvertisement() {
        return axios.get(ADVERTISEMENT_API_BASE_URL);
    }

    addAdvertisement(advertisement) {
        return axios.post(ADVERTISEMENT_API_BASE_URL, advertisement)
    }

    getAdvertisementById(advertisementID) {
        return axios.get(ADVERTISEMENT_API_BASE_URL + '/' + advertisementID);
    }

    updateAdvertisement(advertisement, advertisementID) {
        return axios.put(ADVERTISEMENT_API_BASE_URL + '/' + advertisementID, advertisementID);
    }

}

export default new AdvertisementService();