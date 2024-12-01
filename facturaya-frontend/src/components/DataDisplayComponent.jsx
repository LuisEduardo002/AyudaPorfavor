import React from 'react'

export const DataDisplayComponent = () => {
  return (
    <div>
        <div className="card" style={{width: "25rem"}}>
    <div className="card-body">
      <div className="lead">Clientes Totales</div>
      <h2 className="card-title">1,057,891</h2>
      <p className="small text-muted">Oct 1 - Dec 31,<i className="fa fa-globe"></i> Worldwide</p>
    </div>
  </div>
  <div className="card">
    <div className="card-body p-0">
        <div id="profit-spark" className="apex-charts"></div>
    </div>
</div>
  </div>
  )
}
