package com.example.FacturaYa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FacturaYa.entity.Informe;
import com.example.FacturaYa.repository.InformeRepository;

@Service
public class InformeService {

    @Autowired
    InformeRepository informeRepository;

    public List<Informe> getAllInformes() {
        return informeRepository.findAll();
    }

    public Optional<Informe> getInforme(Long id) {
        return informeRepository.findById(id);
    }

    public void saveOrUpdate(Informe informe) {
        informeRepository.save(informe);
    }

    public void delete(Long id) {
        informeRepository.deleteById(id);
    }
}
