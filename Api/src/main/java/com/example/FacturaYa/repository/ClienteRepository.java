package com.example.FacturaYa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FacturaYa.entity.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}