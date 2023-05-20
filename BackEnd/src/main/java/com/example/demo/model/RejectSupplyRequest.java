package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "rejected_supply_request")
public class RejectSupplyRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long requestID;
	
	@Column(name = "itemCode")
	private String itemCode;
	
	@Column(name = "itemName")
	private String itemName;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "price")
	private String price;
	
	@Column(name = "lotQuantity")
	private String lotQuantity;
	
	@Column(name = "images1")
	private String images1;
	
	@Column(name = "dateTime")
	private String dateTime;
	
	public RejectSupplyRequest() {
		
	}

	public RejectSupplyRequest(long requestID, String itemCode, String itemName, String description, String price,
			String lotQuantity, String images1, String dateTime) {
		super();
		this.requestID = requestID;
		this.itemCode = itemCode;
		this.itemName = itemName;
		this.description = description;
		this.price = price;
		this.lotQuantity = lotQuantity;
		this.images1 = images1;
		this.dateTime = dateTime;
	}

	public long getRequestID() {
		return requestID;
	}

	public void setRequestID(long requestID) {
		this.requestID = requestID;
	}

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getLotQuantity() {
		return lotQuantity;
	}

	public void setLotQuantity(String lotQuantity) {
		this.lotQuantity = lotQuantity;
	}

	public String getImages1() {
		return images1;
	}

	public void setImages1(String images1) {
		this.images1 = images1;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	
	
}