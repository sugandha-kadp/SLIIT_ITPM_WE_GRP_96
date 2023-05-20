import axios from 'axios';

const SUPPLY_REQUEST_API_BASE_URL = "http://localhost:8080/api/v1/PendingSupplyRequest";

const REJECTED_SUPPLY_REQUEST_API_BASE_URL = "http://localhost:8080/api/v1/RejectSupplyRequest";

const APPROVED_SUPPLY_REQUEST_API_BASE_URL = "http://localhost:8080/api/v1/ApprovedSupplyRequest";

// const ISSUED_STOCK_API_BASE_URL = "http://localhost:8080/api/v1/IssuedStockItem";

class SupplyRequestService {

    getSupplyRequest(){
        return axios.get(SUPPLY_REQUEST_API_BASE_URL);
    }

    addSupplyRequest(requestID){
        return axios.post(SUPPLY_REQUEST_API_BASE_URL,requestID)
    }
    getSupplyRequestById(requestID){
        return axios.get(SUPPLY_REQUEST_API_BASE_URL + '/' + requestID);
    }
    approveSupplyRequest(supplyRequest, requestID){
        return axios.put(SUPPLY_REQUEST_API_BASE_URL + '/' + requestID, supplyRequest);
    }

    rejectSupplyRequest(requestID){
        return axios.delete(SUPPLY_REQUEST_API_BASE_URL + '/' + requestID);
    }

    getRejectedSupplyRequest(){
        return axios.get(REJECTED_SUPPLY_REQUEST_API_BASE_URL);
    }

    getApprovedSupplyRequest(){
        return axios.get(APPROVED_SUPPLY_REQUEST_API_BASE_URL);
    }

    getApprovedSupplyRequestByID(requestID){
        return axios.get(APPROVED_SUPPLY_REQUEST_API_BASE_URL + '/' + requestID);
    }
}

export default new SupplyRequestService()