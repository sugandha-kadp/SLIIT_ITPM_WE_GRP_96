package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "marketItems")
public class MarketItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long marketItemsID;

	@Column(name = "productName")
	private String productName;
	
	@Column(name = "images")
	private String images;

	@Column(name = "stock")
	private String stock;

	@Column(name = "itemCode")
	private String itemCode;

	@Column(name = "price")
	private String price;
	
	@Column(name = "description")
	private String description;

	public MarketItem() {

	}

	public MarketItem(long marketItemsID, String productName, String images, String stock, String itemCode,
			String price, String description) {
		super();
		this.marketItemsID = marketItemsID;
		this.productName = productName;
		this.images = images;
		this.stock = stock;
		this.itemCode = itemCode;
		this.price = price;
		this.description = description;
	}

	public long getMarketItemsID() {
		return marketItemsID;
	}

	public void setMarketItemsID(long marketItemsID) {
		this.marketItemsID = marketItemsID;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public String getStock() {
		return stock;
	}

	public void setStock(String stock) {
		this.stock = stock;
	}

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}