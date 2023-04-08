package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.ApprovedSupplyRequest;
import com.example.demo.repository.ApprovedSupplyRequestRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class ApprovedSupplyRequestController {

	@Autowired
	private ApprovedSupplyRequestRepository ApprovedSupplyRequestRepository;
	
	//get all Approved Supply Request
	
	@GetMapping("/ApprovedSupplyRequest")
	public List<ApprovedSupplyRequest> getAllApprovedSupplyRequest(){
		return ApprovedSupplyRequestRepository.findAll();
	}
	
	// create Approved Supply Request rest API
	@PostMapping("/ApprovedSupplyRequest")
	public ApprovedSupplyRequest createApprovedSupplyRequest(@RequestBody ApprovedSupplyRequest approvedSupplyRequest) {
		return ApprovedSupplyRequestRepository.save(approvedSupplyRequest);
	
	}
	
	//get Approved Supply Request by id rest API
	@GetMapping("/ApprovedSupplyRequest/{approvedSupplyRequestID}")
	public ResponseEntity<ApprovedSupplyRequest> getApprovedSupplyRequestById(@PathVariable Long approvedSupplyRequestID) {
		ApprovedSupplyRequest approvedSupplyRequest = ApprovedSupplyRequestRepository.findById(approvedSupplyRequestID).orElseThrow(()-> new ResourceNotFoundException("Did not have Approved Supply Request ID : " + approvedSupplyRequestID));
		return ResponseEntity.ok(approvedSupplyRequest);
	}
	
	
	//Update Approved Supply Request rest API
	@PutMapping("/ApprovedSupplyRequest/{approvedSupplyRequestID}")
	public ResponseEntity<ApprovedSupplyRequest> updateSupplyRequest(@PathVariable Long approvedSupplyRequestID, @RequestBody ApprovedSupplyRequest applySupplyRequests){
		
		ApprovedSupplyRequest ApprovedSupplyRequest = ApprovedSupplyRequestRepository.findById(approvedSupplyRequestID).orElseThrow(()-> new ResourceNotFoundException("Did not have Approved Supply Request ID : " + approvedSupplyRequestID));

		ApprovedSupplyRequest.setApprovedSupplyRequestID(ApprovedSupplyRequest.getApprovedSupplyRequestID());
		ApprovedSupplyRequest.setItemName(ApprovedSupplyRequest.getItemName());
		ApprovedSupplyRequest.setDescription(ApprovedSupplyRequest.getDescription());
		ApprovedSupplyRequest.setUnitPrice(ApprovedSupplyRequest.getUnitPrice());
		ApprovedSupplyRequest.setQuantity(ApprovedSupplyRequest.getQuantity());
		ApprovedSupplyRequest.setImages(ApprovedSupplyRequest.getImages());
		ApprovedSupplyRequest.setContactPersonName(ApprovedSupplyRequest.getContactPersonName());
		ApprovedSupplyRequest.setContactPersonNumber(ApprovedSupplyRequest.getContactPersonNumber());
		ApprovedSupplyRequest.setContactPersonEmail(ApprovedSupplyRequest.getContactPersonEmail());
		
		ApprovedSupplyRequest updatedsupplyRequest = ApprovedSupplyRequestRepository.save(ApprovedSupplyRequest);
		return ResponseEntity.ok(updatedsupplyRequest);
	}
	
	
}
