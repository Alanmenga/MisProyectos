package com.manytoone.services;

import com.manytoone.dao.CategoriaDao;
import com.manytoone.models.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServiceImpl implements CategoriaService{

    @Autowired
    private CategoriaDao categoriaDao;

    @Override
    public java.util.List<Categoria> findAll() {
        return null;
    }
}
