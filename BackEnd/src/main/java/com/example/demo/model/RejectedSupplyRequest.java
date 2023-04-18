package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rejectedRequests")
public class RejectedSupplyRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long supplyRequestID;

	@Column(name = "itemName")
	private String itemName;

	@Column(name = "description")
	private String description;

	@Column(name = "unitPrice")
	private String unitPrice;

	@Column(name = "quantity")
	private String quantity;

	@Column(name = "images")
	private String images;

	@Column(name = "contactPersonName")
	private String contactPersonName;

	@Column(name = "contactPersonNumber")
	private String contactPersonNumber;

	@Column(name = "contactPersonEmail")
	private String contactPersonEmail;

	@Column(name = "rejectedReson")
	private String rejectedReson;

	public RejectedSupplyRequest() {

	}

	public RejectedSupplyRequest(long supplyRequestID, String itemName, String description, String unitPrice,
			String quantity, String images, String contactPersonName, String contactPersonNumber,
			String contactPersonEmail, String rejectedReson) {
		super();
		this.supplyRequestID = supplyRequestID;
		this.itemName = itemName;
		this.description = description;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
		this.images = images;
		this.contactPersonName = contactPersonName;
		this.contactPersonNumber = contactPersonNumber;
		this.contactPersonEmail = contactPersonEmail;
		this.rejectedReson = rejectedReson;
	}

	public long getSupplyRequestID() {
		return supplyRequestID;
	}

	public void setSupplyRequestID(long supplyRequestID) {
		this.supplyRequestID = supplyRequestID;
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

	public String getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(String unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public String getContactPersonName() {
		return contactPersonName;
	}

	public void setContactPersonName(String contactPersonName) {
		this.contactPersonName = contactPersonName;
	}

	public String getContactPersonNumber() {
		return contactPersonNumber;
	}

	public void setContactPersonNumber(String contactPersonNumber) {
		this.contactPersonNumber = contactPersonNumber;
	}

	public String getContactPersonEmail() {
		return contactPersonEmail;
	}

	public void setContactPersonEmail(String contactPersonEmail) {
		this.contactPersonEmail = contactPersonEmail;
	}

	public String getRejectedReson() {
		return rejectedReson;
	}

	public void setRejectedReson(String rejectedReson) {
		this.rejectedReson = rejectedReson;
	}

}
