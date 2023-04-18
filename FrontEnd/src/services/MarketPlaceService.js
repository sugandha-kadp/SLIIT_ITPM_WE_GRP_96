import axios from 'axios';

const MARKETITEM_API_BASE_URL = "http://localhost:8087/api/v1/MarketItem";

class MarketPlaceService {

    getMarketItemRequest() {
        return axios.get(MARKETITEM_API_BASE_URL);
    }

    addMarketItemRequest(marketItems) {
        return axios.post(MARKETITEM_API_BASE_URL, marketItems)
    }

    getMarketItemRequestById(marketItemsID) {
        return axios.get(MARKETITEM_API_BASE_URL + '/' + marketItemsID);
    }

    updateMarketItemRequest(marketItems, marketItemsID) {
        return axios.put(MARKETITEM_API_BASE_URL + '/' + marketItemsID, marketItems);
    }

}


export default new MarketPlaceService()