package com.manytoone.services;

import com.manytoone.models.Producto;

import java.util.List;

public interface ProductoService {
    public Producto save(Producto producto);

    public Producto finById(Long id);

    public List<Producto> findAll();

    public void delete(Long id);
}
