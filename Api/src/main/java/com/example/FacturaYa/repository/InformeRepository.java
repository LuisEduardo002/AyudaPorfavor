package com.example.FacturaYa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FacturaYa.entity.Informe;

@Repository
public interface InformeRepository extends JpaRepository<Informe, Long> {

}
