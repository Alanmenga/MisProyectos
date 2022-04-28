package com.manytoone.dao;

import com.manytoone.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaDao extends JpaRepository<Categoria, Long> {
}
