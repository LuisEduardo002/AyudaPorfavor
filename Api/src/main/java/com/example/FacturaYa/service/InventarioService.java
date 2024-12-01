package com.example.FacturaYa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FacturaYa.entity.Inventario;
import com.example.FacturaYa.repository.InventarioRepository;

@Service
public class InventarioService {

    @Autowired
    InventarioRepository inventarioRepository;

    public List<Inventario> getAllInventarios() {
        return inventarioRepository.findAll();
    }

    public Optional<Inventario> getInventario(Long id) {
        return inventarioRepository.findById(id);
    }

    public void saveOrUpdate(Inventario inventario) {
        inventarioRepository.save(inventario);
    }

    public void delete(Long id) {
        inventarioRepository.deleteById(id);
    }
}
