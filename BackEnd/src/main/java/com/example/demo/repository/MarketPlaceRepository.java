

package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.MarketItem;

@Repository
public interface MarketPlaceRepository extends JpaRepository<MarketItem, Long>{

}
