import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DataDisplayComponent = () => {
  // Datos simulados
  const reportData = {
    lastInvoice: {
      id: 'INV-2024-001',
      date: '2024-11-01',
      client: 'John Doe',
      total: '$1,250.00',
    },
    recentClient: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    totalInvoices: 2547,
    totalClients: 847,
    totalRevenue: '$124,578',
  };

  const topProductos = [
    { producto: 'Producto A', cantidad: 120, facturas: ['INV-001', 'INV-002'] },
    { producto: 'Producto B', cantidad: 95, facturas: ['INV-003'] },
    { producto: 'Producto C', cantidad: 90, facturas: ['INV-004'] },
  ];

  const ventasMensuales = {
    '2024-11': [
      {
        factura: 'INV-001',
        productos: [
          { nombre: 'Producto A', cantidad: 5, total: '$50.00' },
          { nombre: 'Producto B', cantidad: 3, total: '$30.00' },
        ],
        totalFactura: '$80.00',
      },
    ],
  };

  const revenueData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Ingresos Mensuales ($)',
        data: [10000, 12000, 14000, 13000, 15000, 16000, 17000, 18000, 20000, 22000, 23000, 25000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Ingresos ($)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
    },
  };

  return (
    <div className="container mt-4">
      {/* Estadísticas Principales */}
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Facturas Emitidas</h5>
              <h2 className="card-text">{reportData.totalInvoices}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Clientes Activos</h5>
              <h2 className="card-text">{reportData.totalClients}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Ingresos Totales</h5>
              <h2 className="card-text">{reportData.totalRevenue}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Última Factura y Cliente Reciente */}
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3 h-100">
            <div className="card-body">
              <h5 className="card-title">Última Factura</h5>
              <p><strong>ID:</strong> {reportData.lastInvoice.id}</p>
              <p><strong>Fecha:</strong> {reportData.lastInvoice.date}</p>
              <p><strong>Cliente:</strong> {reportData.lastInvoice.client}</p>
              <p><strong>Total:</strong> {reportData.lastInvoice.total}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3 h-100">
            <div className="card-body">
              <h5 className="card-title">Cliente Reciente</h5>
              <p><strong>Nombre:</strong> {reportData.recentClient.name}</p>
              <p><strong>Email:</strong> {reportData.recentClient.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Informe del Top 10 de Productos Más Vendidos */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Top 10 Productos Más Vendidos</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad Vendida</th>
                    <th>Facturas Asociadas</th>
                  </tr>
                </thead>
                <tbody>
                  {topProductos.map((producto, index) => (
                    <tr key={index}>
                      <td>{producto.producto}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.facturas.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Informe de Ventas Mensuales */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Informe de Ventas por Mes</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Factura</th>
                    <th>Productos</th>
                    <th>Total Factura</th>
                  </tr>
                </thead>
                <tbody>
                  {ventasMensuales['2024-11'].map((venta, index) => (
                    <tr key={index}>
                      <td>{venta.factura}</td>
                      <td>
                        {venta.productos.map((producto, i) => (
                          <div key={i}>
                            {producto.nombre} - {producto.cantidad} unidades ({producto.total})
                          </div>
                        ))}
                      </td>
                      <td>{venta.totalFactura}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de Ingresos Mensuales */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ingresos Mensuales</h5>
              <Line data={revenueData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
