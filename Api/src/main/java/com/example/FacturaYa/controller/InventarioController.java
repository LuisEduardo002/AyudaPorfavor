package com.example.FacturaYa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FacturaYa.entity.Inventario;
import com.example.FacturaYa.service.InventarioService;

@RestController
@RequestMapping(path = "api/inventarios")
public class InventarioController {

    @Autowired
    InventarioService inventarioService;

    @GetMapping
    public List<Inventario> getAll() {
        return inventarioService.getAllInventarios();
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Inventario inventario) {
        inventarioService.saveOrUpdate(inventario);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long inventarioId) {
        inventarioService.delete(inventarioId);
    }

    @GetMapping("/{id}")
    public Optional<Inventario> getById(@PathVariable("id") Long inventarioId) {
        return inventarioService.getInventario(inventarioId);
    }
}
