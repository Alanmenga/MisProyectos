package com.manytoone.controllers;

import com.manytoone.models.Producto;
import com.manytoone.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Minuto 21:48
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/listar")
    public ResponseEntity<List<Producto>> listarProductos() {
        return new ResponseEntity<>(productoService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/crear")
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        return new ResponseEntity<>(productoService.save(producto), HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id,@RequestBody Producto producto) {
        Producto productoEncontrado = productoService.finById(id);

        if(productoEncontrado == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        try{
            productoEncontrado.setNombre(producto.getNombre());
            productoEncontrado.setPrecio(producto.getPrecio());
            productoEncontrado.setImagen(producto.getImagen());
            productoEncontrado.setCategoria(producto.getCategoria());
            return new ResponseEntity<>(productoService.save(productoEncontrado), HttpStatus.CREATED);
        }catch (DataAccessException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> actualizarProducto(@PathVariable Long id){
        productoService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
