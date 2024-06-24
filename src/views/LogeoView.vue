<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="box-login bg-gray-light radius">
          <div class="circle">
            <img src="@/assets/escudo.png">
          </div>
          <div class="title mb-4">
            Sistema de Gestión de Consultas de Planilla Electrónica
          </div>
          <div class="box-form-login">
            <div class="form-group">
              <input
                id="ingreseUsuario"
                type="text"
                class="form-control"
                placeholder="Ingrese Usuario">
            </div>
            <div class="form-group">
              <button
                type="button"
                class="btn btn-block btn-warning">
                Ingresar
              </button>
            </div>
          </div>
          <div class="box-descargas">
            <a
              href="#"
              class="btn btn-danger btn-icon-split">
              <span class="text">Descargar solicitud de acceso</span>
            </a>
            <a
              href="#"
              class="btn btn-danger btn-icon-split">
              <span class="text">Descargar manual de acceso</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
