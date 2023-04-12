package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.RejectedSupplyRequest;

@Repository
public interface RejectedSupplyRequestRepository extends JpaRepository<RejectedSupplyRequest, Long>{

}
