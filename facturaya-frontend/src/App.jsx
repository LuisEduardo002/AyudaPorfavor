import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ListProductoComponent } from './components/ListProductoComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { Footer } from './components/FooterComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProductoCrearComponent } from './components/ProductoComponent'
import { DataDisplayComponent } from './components/DataDisplayComponent'
import { ListIvaComponet } from './components/ListImpuestoComponet'
import { Impuesto } from './components/Impuesto'
import { ListClienteComponent } from './components/ListClienteComponent'
import { ClienteCrearComponent } from './components/ClienteComponent'
import {  NavbarComponent } from './layouts/NavbarComponent'

function App() {

  return (
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavbarComponent></NavbarComponent>}>
      <Route index element={<DataDisplayComponent></DataDisplayComponent>}/>


      <Route path='/cliente' element={<ListClienteComponent></ListClienteComponent>}></Route>
      <Route path='/add-cliente' element={<ClienteCrearComponent/>}></Route>
      <Route path='/edit-cliente/:id' element={<ClienteCrearComponent></ClienteCrearComponent>}></Route>

      <Route path='/impuesto' element={<ListIvaComponet></ListIvaComponet>}></Route>
      <Route path='/add-impuesto' element={<Impuesto></Impuesto>}></Route>
      <Route path='/edit-impuesto/:id' element={<Impuesto></Impuesto>}></Route>

      <Route path='productos' element={<ListProductoComponent></ListProductoComponent>}/>

      <Route path = "/add-producto" element = {<ProductoCrearComponent></ProductoCrearComponent>}></Route>


      <Route path='/edit-producto/:id' element = {<ProductoCrearComponent></ProductoCrearComponent>}></Route>
    </Route>

    </Routes>
       </BrowserRouter>

  )
}

export default App
