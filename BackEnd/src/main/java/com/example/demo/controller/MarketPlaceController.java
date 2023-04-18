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
import com.example.demo.model.MarketItem;
import com.example.demo.repository.MarketPlaceRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MarketPlaceController {

	@Autowired
	private MarketPlaceRepository MarketPlaceRepository;

	@GetMapping("/MarketItem")
	public List<MarketItem> getAllMarketItem() {
		return MarketPlaceRepository.findAll();
	}

	@PostMapping("/MarketItem")
	public MarketItem createMarketItem(@RequestBody MarketItem marketItem) {
		return MarketPlaceRepository.save(marketItem);
	}

	@GetMapping("/MarketItem/{marketItemsID}")
	public ResponseEntity<MarketItem> getMarketItemById(@PathVariable Long marketItemsID) {
		MarketItem marketItem = MarketPlaceRepository.findById(marketItemsID)
				.orElseThrow(() -> new ResourceNotFoundException("Did not have MarketItemID : " + marketItemsID));
		return ResponseEntity.ok(marketItem);
	}

	@PutMapping("/MarketItem/{marketItemsID}")
	public ResponseEntity<MarketItem> updateMarketItem(@PathVariable Long marketItemsID,
			@RequestBody MarketItem marketItems) {

		MarketItem marketItem = MarketPlaceRepository.findById(marketItemsID)
				.orElseThrow(() -> new ResourceNotFoundException("Did not have MarketItemID : " + marketItemsID));

		marketItem.setProductName(marketItem.getProductName());
		marketItem.setImages(marketItem.getImages());
		marketItem.setStock(marketItem.getStock());
		marketItem.setItemCode(marketItem.getItemCode());
		marketItem.setPrice(marketItem.getPrice());
		marketItem.setDescription(marketItem.getDescription());

		MarketItem updatedmarketItem = MarketPlaceRepository.save(marketItem);
		return ResponseEntity.ok(updatedmarketItem);
	}

	// Delete Market Item

	@DeleteMapping("/MarketItem/{marketItemsID}")
	public ResponseEntity<MarketItem> deleteMarketItem(@PathVariable Long marketItemsID) {
		MarketItem marketItem = MarketPlaceRepository.findById(marketItemsID)
			.orElseThrow(() -> new ResourceNotFoundException("Did not have MarketItemID : " + marketItemsID));
			MarketPlaceRepository.delete(marketItem);
	return ResponseEntity.ok(marketItem);
	}

}