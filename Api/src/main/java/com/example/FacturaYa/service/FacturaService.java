package com.example.FacturaYa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FacturaYa.entity.Factura;
import com.example.FacturaYa.repository.FacturaRepository;

@Service
public class FacturaService {

    @Autowired
    FacturaRepository facturaRepository;

    public List<Factura> getAllFacturas() {
        return facturaRepository.findAll();
    }

    public Optional<Factura> getFactura(Long id) {
        return facturaRepository.findById(id);
    }

    public void saveOrUpdate(Factura factura) {
        facturaRepository.save(factura);
    }

    public void delete(Long id) {
        facturaRepository.deleteById(id);
    }
}
