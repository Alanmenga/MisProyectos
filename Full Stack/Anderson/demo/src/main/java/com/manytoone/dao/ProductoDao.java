package com.manytoone.dao;

import com.manytoone.models.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoDao extends JpaRepository<Producto, Long> {
}
