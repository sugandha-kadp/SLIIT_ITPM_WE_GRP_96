package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.RejectSupplyRequest;
import com.example.demo.model.SupplyRequest;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SupplyRequestController {
	
	@Autowired
	private com.example.demo.repository.SupplyRequestRepository supplyRequestRepository;
	
	@Autowired
	private com.example.demo.repository.RejectSupplyRequestRepository rejectSupplyRequestRepository;
	

	@GetMapping("/RejectSupplyRequest")
	public List<RejectSupplyRequest> getAllRejectSupplyRequest(){
		return rejectSupplyRequestRepository.findAll();
	}

	
//get all Supply Request
//	@GetMapping("/SupplyRequest")
//	public List<SupplyRequest> getAllSupplyRequest(){
//		return supplyRequestRepository.findAll();
//	}
	
	@GetMapping("/PendingSupplyRequest")
	public List<SupplyRequest> getAllPendingSupplyRequest() {
	    List<SupplyRequest> allSupplyRequests = supplyRequestRepository.findAll();
	    List<SupplyRequest> filteredSupplyRequests = new ArrayList<>();

	    for (SupplyRequest request : allSupplyRequests) {
	        if (request.getPrice() == null || request.getPrice().isEmpty()) {
	            filteredSupplyRequests.add(request);
	        }
	    }

	    return filteredSupplyRequests;
	}
	
	
	//Approved Supply Request
	@GetMapping("/ApprovedSupplyRequest")
	public List<SupplyRequest> getAllApprovedSupplyRequest(){
	    List<SupplyRequest> allSupplyRequests = supplyRequestRepository.findAll();
	    List<SupplyRequest> filteredSupplyRequests = new ArrayList<>();

	    for (SupplyRequest request : allSupplyRequests) {
	        if (request.getPrice() != null) {
	            filteredSupplyRequests.add(request);
	        }
	    }

	    return filteredSupplyRequests;
	}
	
	
	// Get Approved Supply Request by ID
	@GetMapping("/ApprovedSupplyRequest/{requestID}")
	public ResponseEntity<SupplyRequest> getApprovedSupplyRequestById(@PathVariable Long requestID) {
	    SupplyRequest request = supplyRequestRepository.findById(requestID)
	            .filter(req -> req.getPrice() != null)
	            .orElseThrow(() -> new ResourceNotFoundException("Approved request not found with ID: " + requestID));
	    return ResponseEntity.ok(request);
	}
	
//	// create Supply Request rest API
//	@PostMapping("/PendingSupplyRequest")
//	public SupplyRequest createSupplyRequest(@RequestBody SupplyRequest request) {
//		return supplyRequestRepository.save(request);
//	
//	}
	
	@PostMapping("/PendingSupplyRequest")
	public SupplyRequest createSupplyRequest(@RequestBody SupplyRequest request) {
	    request.setPrice(null); // Set price as null
	    return supplyRequestRepository.save(request);
	}

	
	//get Supply Request id rest API
	@GetMapping("/PendingSupplyRequest/{requestID}")
	public ResponseEntity<SupplyRequest> getSupplyRequestById(@PathVariable Long requestID) {
		SupplyRequest request = supplyRequestRepository.findById(requestID).orElseThrow(()-> new ResourceNotFoundException("Did not have requestID : " + requestID));
		return ResponseEntity.ok(request);
	}
	
	
	//Update Supply Request rest API
	@PutMapping("/PendingSupplyRequest/{requestID}")
	public ResponseEntity<SupplyRequest> updateSupplRequest(@PathVariable Long requestID, @RequestBody SupplyRequest supplyRequests){
		
		SupplyRequest supplyRequest = supplyRequestRepository.findById(requestID).orElseThrow(()-> new ResourceNotFoundException("Did not have requestID : " + requestID));

		supplyRequest.setItemCode(supplyRequests.getItemCode());
		supplyRequest.setItemName(supplyRequests.getItemName());
		supplyRequest.setDescription(supplyRequests.getDescription());
		supplyRequest.setPrice(supplyRequests.getPrice());
		supplyRequest.setImages1(supplyRequests.getImages1());

		SupplyRequest updatedstockItem = supplyRequestRepository.save(supplyRequest);
		return ResponseEntity.ok(updatedstockItem);
	}
	
    // Delete Supply Request rest API
    @DeleteMapping("/PendingSupplyRequest/{requestID}")
    public ResponseEntity<SupplyRequest> deleteSupplyRequest(@PathVariable Long requestID) {
        SupplyRequest supplyRequest = supplyRequestRepository.findById(requestID)
                .orElseThrow(() -> new ResourceNotFoundException("Did not have requestID : " + requestID));

        supplyRequestRepository.delete(supplyRequest);
        return ResponseEntity.ok(supplyRequest);
    }
	

	
}
