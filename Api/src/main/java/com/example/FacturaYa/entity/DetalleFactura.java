package com.example.FacturaYa.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "detalle_factura")
public class DetalleFactura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int cantidad;

    @Column(name = "valor_total")
    private BigDecimal valorTotal;

    private BigDecimal descuento;

    @ManyToOne
    @JoinColumn(name = "id_factura", referencedColumnName = "id") // Referencia a la columna 'id_factura'
    private Factura factura;

    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id") // Referencia a la columna 'producto_id'
    private Producto producto;

}
