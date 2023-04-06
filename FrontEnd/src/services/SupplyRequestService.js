import axios from 'axios';

const SUPPLYREQUEST_API_BASE_URL = "http://localhost:8087/api/v1/SupplyRequest";

class SupplyRequestService {

    getSupplyRequest() {
        return axios.get(SUPPLYREQUEST_API_BASE_URL);
    }

    addSupplyRequest(supplyRequest) {
        return axios.post(SUPPLYREQUEST_API_BASE_URL, supplyRequest)
    }

    getSupplyRequestById(supplyRequestID) {
        return axios.get(SUPPLYREQUEST_API_BASE_URL + '/' + supplyRequestID);
    }

    updateSupplyRequest(supplyRequest, supplyRequestID) {
        return axios.put(SUPPLYREQUEST_API_BASE_URL + '/' + supplyRequestID, supplyRequest);
    }

}

export default new SupplyRequestService()