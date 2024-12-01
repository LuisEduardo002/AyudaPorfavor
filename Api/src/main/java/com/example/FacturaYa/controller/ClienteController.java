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

import com.example.FacturaYa.entity.Cliente;
import com.example.FacturaYa.service.ClienteService;

@RestController
@RequestMapping(path = "api/clientes")
public class ClienteController {

    @Autowired
    ClienteService clienteService;


    @GetMapping
    public  List<Cliente> getAll() {
        return clienteService.getAllClientes();
    }

    @PostMapping
    public void saveUpdate(@RequestBody Cliente cliente) {
        clienteService.saveOrUpdate(cliente);
    }

    @DeleteMapping("/{id}")
    public void saveUpdate(@PathVariable("id") Long clienteId) {
        clienteService.delete(clienteId);
    }

    @GetMapping("/{id}")
    public Optional<Cliente> getById(@PathVariable("id") Long clienteId) {
        return clienteService.getCliente(clienteId);
    }
}
