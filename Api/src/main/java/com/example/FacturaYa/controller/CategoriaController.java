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

import com.example.FacturaYa.entity.Categoria;
import com.example.FacturaYa.service.CategoriaService;

@RestController
@RequestMapping(path = "api/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @GetMapping
    public List<Categoria> getAll() {
        return categoriaService.getAllCategorias();
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Categoria categoria) {
        categoriaService.saveOrUpdate(categoria);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long categoriaId) {
        categoriaService.delete(categoriaId);
    }

    @GetMapping("/{id}")
    public Optional<Categoria> getById(@PathVariable("id") Long categoriaId) {
        return categoriaService.getCategoria(categoriaId);
    }
}
