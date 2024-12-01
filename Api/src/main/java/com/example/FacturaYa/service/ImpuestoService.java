package com.example.FacturaYa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FacturaYa.entity.Impuesto;
import com.example.FacturaYa.repository.ImpuestoRepository;

@Service
public class ImpuestoService {
    @Autowired
    ImpuestoRepository impuestoRepository;
    
    public List<Impuesto> getAllImpuestos() {
        return impuestoRepository.findAll();
    }

    public Optional<Impuesto> getImpuesto(Long id) {
        return impuestoRepository.findById(id);
    }

    public void saveOrUpdate(Impuesto impuesto) {
        impuestoRepository.save(impuesto);
    }

    public void delete(Long id) {
        impuestoRepository.deleteById(id);
    }
}
