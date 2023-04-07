package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Advertisements")
public class Advertisement {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adId;

    @Column(name = "title")
    private String adTitle;

    @Column(name = "content")
    private String adContent;

    @Column(name = "author")
    private String adAuthor;

    @Column(name = "image") 
    private String adImage;

    public Advertisement(){
        
    }

    public Advertisement(int adId, String adTitle, String adContent, String adAuthor, String adImage) {
        this.adId = adId;
        this.adTitle = adTitle;
        this.adContent = adContent;
        this.adAuthor = adAuthor;
        this.adImage = adImage;
    }

    public int getAdId() {
        return adId;
    }

    public void setAdId(int adId) {
        this.adId = adId;
    }

    public String getAdTitle() {
        return adTitle;
    }

    public void setAdTitle(String adTitle) {
        this.adTitle = adTitle;
    }

    public String getAdContent() {
        return adContent;
    }

    public void setAdContent(String adContent) {
        this.adContent = adContent;
    }

    public String getAdAuthor() {
        return adAuthor;
    }

    public void setAdAuthor(String adAuthor) {
        this.adAuthor = adAuthor;
    }

    public String getAdImage() {
        return adImage;
    }

    public void setAdImage(String adImage) {
        this.adImage = adImage;
    }
    
}
