package com.manytoone.models;

import javax.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Double precio;
    private String imagen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    public java.lang.Long getId() {
        return id;
    }

    public void setId(java.lang.Long id) {
        this.id = id;
    }

    public java.lang.String getNombre() {
        return nombre;
    }

    public void setNombre(java.lang.String nombre) {
        this.nombre = nombre;
    }

    public java.lang.Double getPrecio() {
        return precio;
    }

    public void setPrecio(java.lang.Double precio) {
        this.precio = precio;
    }

    public java.lang.String getImagen() {
        return imagen;
    }

    public void setImagen(java.lang.String imagen) {
        this.imagen = imagen;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
