package com.example.FacturaYa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FacturaYa.entity.DetalleFactura;
import com.example.FacturaYa.repository.DetalleFacturaRepository;

@Service
public class DetalleFacturaService {

    @Autowired
    DetalleFacturaRepository detalleFacturaRepository;

    public List<DetalleFactura> getAllDetallesFactura() {
        return detalleFacturaRepository.findAll();
    }

    public Optional<DetalleFactura> getDetalleFactura(Long id) {
        return detalleFacturaRepository.findById(id);
    }

    public void saveOrUpdate(DetalleFactura detalleFactura) {
        detalleFacturaRepository.save(detalleFactura);
    }

    public void delete(Long id) {
        detalleFacturaRepository.deleteById(id);
    }
}
