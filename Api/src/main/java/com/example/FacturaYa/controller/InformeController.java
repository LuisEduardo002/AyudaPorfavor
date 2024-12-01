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

import com.example.FacturaYa.entity.Informe;
import com.example.FacturaYa.service.InformeService;

@RestController
@RequestMapping(path = "api/informes")
public class InformeController {

    @Autowired
    InformeService informeService;

    @GetMapping
    public List<Informe> getAll() {
        return informeService.getAllInformes();
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Informe informe) {
        informeService.saveOrUpdate(informe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long informeId) {
        informeService.delete(informeId);
    }

    @GetMapping("/{id}")
    public Optional<Informe> getById(@PathVariable("id") Long informeId) {
        return informeService.getInforme(informeId);
    }
}
