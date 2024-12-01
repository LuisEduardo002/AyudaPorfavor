package com.example.FacturaYa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FacturaYa.entity.Impuesto;

@Repository
public interface ImpuestoRepository extends JpaRepository<Impuesto, Long> {
    
}
