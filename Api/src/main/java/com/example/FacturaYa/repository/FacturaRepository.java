package com.example.FacturaYa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FacturaYa.entity.Factura;

@Repository
public interface FacturaRepository extends JpaRepository<Factura, Long> {

}
