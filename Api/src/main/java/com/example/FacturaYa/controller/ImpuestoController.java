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

import com.example.FacturaYa.entity.Impuesto;
import com.example.FacturaYa.service.ImpuestoService;
@RestController
@RequestMapping(path = "api/impuestos")
public class ImpuestoController {

    @Autowired
    ImpuestoService impuestoService;


    @GetMapping
    public  List<Impuesto> getAll() {
        return impuestoService.getAllImpuestos();
    }

    @PostMapping
    public void saveUpdate(@RequestBody Impuesto impuesto) {
        impuestoService.saveOrUpdate(impuesto);
    }

    @DeleteMapping("/{id}")
    public void saveUpdate(@PathVariable("id") Long impuestoId) {
        impuestoService.delete(impuestoId);
    }

    @GetMapping("/{id}")
    public Optional<Impuesto> getById(@PathVariable("id") Long impuestoId) {
        return impuestoService.getImpuesto(impuestoId);
    }
}
