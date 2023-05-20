package com.example.demo.controller;

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
import com.example.demo.model.ApprovedSupplyRequest;
import com.example.demo.model.RejectedSupplyRequest;
import com.example.demo.model.SupplyRequest;
import com.example.demo.repository.ApprovedSupplyRequestRepository;
import com.example.demo.repository.RejectedSupplyRequestRepository;
import com.example.demo.repository.SupplyRequestRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SupplyRequestController {

	@Autowired
	private SupplyRequestRepository SupplyRequestRepository;
	private ApprovedSupplyRequestRepository ApprovedSupplyRequestRepository;
	private RejectedSupplyRequestRepository RejectedSupplyRequestRepository;

	// get all Supply Request

	@GetMapping("/SupplyRequest")
	public List<SupplyRequest> getAllSupplyRequest() {
		return SupplyRequestRepository.findAll();
	}

	// create Supply Request rest API
	@PostMapping("/SupplyRequest")
	public SupplyRequest createSupplyRequest(@RequestBody SupplyRequest supplyRequest) {
		return SupplyRequestRepository.save(supplyRequest);

	}

	// get Supply Request by id rest API
	@GetMapping("/SupplyRequest/{supplyRequestID}")
	public ResponseEntity<SupplyRequest> getSupplyRequestById(@PathVariable Long supplyRequestID) {
		SupplyRequest supplyRequest = SupplyRequestRepository.findById(supplyRequestID).orElseThrow(
				() -> new ResourceNotFoundException("Did not have Supply Request ID : " + supplyRequestID));
		return ResponseEntity.ok(supplyRequest);
	}

	// Update Supply Request rest API
	@PutMapping("/SupplyRequest/{supplyRequestID}")
	public ResponseEntity<SupplyRequest> updateSupplyRequest(@PathVariable Long supplyRequestID,
			@RequestBody SupplyRequest supplyRequests) {

		SupplyRequest supplyRequest = SupplyRequestRepository.findById(supplyRequestID).orElseThrow(
				() -> new ResourceNotFoundException("Did not have Supply Request ID : " + supplyRequestID));

		supplyRequest.setSupplyRequestID(supplyRequests.getSupplyRequestID());
		supplyRequest.setItemName(supplyRequests.getItemName());
		supplyRequest.setDescription(supplyRequests.getDescription());
		supplyRequest.setUnitPrice(supplyRequests.getUnitPrice());
		supplyRequest.setQuantity(supplyRequests.getQuantity());
		supplyRequest.setImages(supplyRequests.getImages());
		supplyRequest.setContactPersonName(supplyRequests.getContactPersonName());
		supplyRequest.setContactPersonNumber(supplyRequests.getContactPersonNumber());
		supplyRequest.setContactPersonEmail(supplyRequests.getContactPersonEmail());

		SupplyRequest updatedsupplyRequest = SupplyRequestRepository.save(supplyRequest);
		return ResponseEntity.ok(updatedsupplyRequest);
	}

	// Delete Supply Request
	@DeleteMapping("/SupplyRequest/{supplyRequestID}")
	public ResponseEntity<SupplyRequest> deleteSupplyRequest(@PathVariable Long supplyRequestID) {

		SupplyRequest supplyRequest = SupplyRequestRepository.findById(supplyRequestID)
				.orElseThrow(() -> new ResourceNotFoundException("Did not have supplyRequestID : " + supplyRequestID));
		SupplyRequestRepository.delete(supplyRequest);
		return ResponseEntity.ok(supplyRequest);

	}
	
	////////////////////////////////////////////APPROVED_SUPPLY REQUESTs///////////////////////////////////////////////////////
	
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
	
	////////////////////////////////////////////REJECTED_SUPPLY REQUESTs///////////////////////////////////////////////////////
	
	//get all Rejected Supply Request
	@GetMapping("/RejectedSupplyRequest")
	public List<RejectedSupplyRequest> getAllRejectedSupplyRequest(){
		return RejectedSupplyRequestRepository.findAll();
	}
	
	// create Rejected Supply Request rest API
	@PostMapping("/RejectedSupplyRequest")
	public RejectedSupplyRequest createRejectedSupplyRequest(@RequestBody RejectedSupplyRequest rejectedSupplyRequest) {
		return RejectedSupplyRequestRepository.save(rejectedSupplyRequest);
	
	}
	
	//get Rejected Supply Request by id rest API
	@GetMapping("/RejectedSupplyRequest/{approvedSupplyRequestID}")
	public ResponseEntity<RejectedSupplyRequest> getRejectedSupplyRequestById(@PathVariable Long rejectedSupplyRequestID) {
		RejectedSupplyRequest rejectedSupplyRequest = RejectedSupplyRequestRepository.findById(rejectedSupplyRequestID).orElseThrow(()-> new ResourceNotFoundException("Did not have Rejected Supply Request ID : " + rejectedSupplyRequestID));
		return ResponseEntity.ok(rejectedSupplyRequest);
	}

}