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
import com.example.demo.model.Advertisement;
import com.example.demo.repository.AdvertisementRequestRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class AdvertisementController {
    @Autowired
	private AdvertisementRequestRepository AdvertisementRequestRepository;
	
	// get all Advertisements
	@GetMapping("/Advertisment")
	public List<Advertisement> getAllAdvertisements(){
		return AdvertisementRequestRepository.findAll();
	}
	
	// create Advertisements rest API
	@PostMapping("/Advertisment")
	public Advertisement createAdvertisement(@RequestBody Advertisement advertisement) {
		return AdvertisementRequestRepository.save(advertisement);
	}
	
	//get Advertisement by id rest API
	@GetMapping("/Advertisment/{adId}")
	public ResponseEntity<Advertisement> getAdvertismentById(@PathVariable Long adId) {
		Advertisement advertisement = AdvertisementRequestRepository.findById(adId).orElseThrow(()-> new ResourceNotFoundException("Did not have Advertisement ID : " + adId));
		return ResponseEntity.ok(advertisement);
	}
	
	
	//Update Advertisement rest API
	@PutMapping("/Advertisment/{adId}")
	public ResponseEntity<Advertisement> updateAdvertisement(@PathVariable Long adId, @RequestBody Advertisement advertisements){
		
		Advertisement advertisement = AdvertisementRequestRepository.findById(adId).orElseThrow(()-> new ResourceNotFoundException("Did not have Advertisement ID : " + adId));
		//advertisement = AdvertisementRequestRepository.findById(adId).orElseThrow(()-> new ResourceNotFoundException("Did not have Advertisement ID : " + adId));

		advertisement.setAdId(advertisements.getAdId());
		advertisement.setAdTitle(advertisements.getAdTitle());
		advertisement.setAdAuthor(advertisements.getAdAuthor());
		advertisement.setAdContent(advertisements.getAdContent());
		advertisement.setAdImage(advertisements.getAdImage());
		
		Advertisement updatedAdvertisementRequest = AdvertisementRequestRepository.save(advertisement);
		return ResponseEntity.ok(updatedAdvertisementRequest);
	}

		// Delete Advertisement
		@DeleteMapping("/Advertisment/{adId}")
		public ResponseEntity<Advertisement> deleteAdvertisement(@PathVariable Long adId) {
	
			Advertisement advertisement = AdvertisementRequestRepository.findById(adId)
					.orElseThrow(() -> new ResourceNotFoundException("Did not have Advertisement ID : " + adId));
					AdvertisementRequestRepository.delete(advertisement);
			return ResponseEntity.ok(advertisement);
		}
}
