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

import com.example.FacturaYa.entity.Factura;
import com.example.FacturaYa.service.FacturaService;

@RestController
@RequestMapping(path = "api/facturas")
public class FacturaController {

    @Autowired
    FacturaService facturaService;

    @GetMapping
    public List<Factura> getAll() {
        return facturaService.getAllFacturas();
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Factura factura) {
        facturaService.saveOrUpdate(factura);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long facturaId) {
        facturaService.delete(facturaId);
    }

    @GetMapping("/{id}")
    public Optional<Factura> getById(@PathVariable("id") Long facturaId) {
        return facturaService.getFactura(facturaId);
    }
}
