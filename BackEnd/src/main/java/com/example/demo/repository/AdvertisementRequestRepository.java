package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Advertisement;

@Repository
public interface AdvertisementRequestRepository extends JpaRepository<Advertisement, Long>{
    
}