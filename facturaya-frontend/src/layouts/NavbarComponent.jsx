import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './NavbarComponent.css'; // Archivo CSS para los estilos personalizados

export const NavbarComponent = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light">
        <div className="sidebar-header text-center py-3">
          <h5 className="mb-0">FacturaYa</h5>
          <small className="text-muted">Sistema de Facturación</small>
        </div>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className="text-dark">
            <i className="bi bi-house-door-fill"></i> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/cliente" className="text-dark">
            <i className="bi bi-people-fill"></i> Clientes
          </Nav.Link>
          <Nav.Link as={Link} to="/impuesto" className="text-dark">
            <i className="bi bi-receipt-cutoff"></i> Impuestos
          </Nav.Link>
          <Nav.Link as={Link} to="/productos" className="text-dark">
            <i className="bi bi-box-seam"></i> Productos
          </Nav.Link>
        </Nav>
      </div>

      {/* Contenido principal */}
      <div className="content flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );
};
