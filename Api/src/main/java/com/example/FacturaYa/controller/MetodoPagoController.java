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

import com.example.FacturaYa.entity.MetodoPago;
import com.example.FacturaYa.service.MetodoPagoService;

@RestController
@RequestMapping(path = "api/metodos-pago")
public class MetodoPagoController {

    @Autowired
    MetodoPagoService metodoPagoService;

    @GetMapping
    public List<MetodoPago> getAll() {
        return metodoPagoService.getAllMetodosPago();
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody MetodoPago metodoPago) {
        metodoPagoService.saveOrUpdate(metodoPago);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long metodoPagoId) {
        metodoPagoService.delete(metodoPagoId);
    }

    @GetMapping("/{id}")
    public Optional<MetodoPago> getById(@PathVariable("id") Long metodoPagoId) {
        return metodoPagoService.getMetodoPago(metodoPagoId);
    }
}
