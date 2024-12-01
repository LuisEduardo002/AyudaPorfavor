package com.example.FacturaYa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FacturaYa.entity.MetodoPago;
import com.example.FacturaYa.repository.MetodoPagoRepository;

@Service
public class MetodoPagoService {

    @Autowired
    MetodoPagoRepository metodoPagoRepository;

    public List<MetodoPago> getAllMetodosPago() {
        return metodoPagoRepository.findAll();
    }

    public Optional<MetodoPago> getMetodoPago(Long id) {
        return metodoPagoRepository.findById(id);
    }

    public void saveOrUpdate(MetodoPago metodoPago) {
        metodoPagoRepository.save(metodoPago);
    }

    public void delete(Long id) {
        metodoPagoRepository.deleteById(id);
    }
}
