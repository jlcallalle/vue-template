<template>
  <div
    id="app"
    class="wrapper">
    <div
      id="content-wrapper"
      class="d-flex flex-column">
      <div id="content">
        <nav class="navbar navbar-expand navbar-light bg-brand topbar mb-4 static-top shadow">
          <a class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="logo-brand">
              <img src="@/assets/logo.png">
            </div>
          </a>
        </nav>
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
                <div class="box-botton">
                  <button
                    type="button"
                    class="btn btn-block btn-warning">
                    Ingresar con reconoicimiento Facial
                  </button>
                  <button
                    type="button"
                    class="btn btn-block btn-outline-secondary">
                    Ingrese con usuario y contraseña
                  </button>
                </div>
                <div class="box-descargas mt-4">
                  <a
                    href="#"
                    class="btn btn-danger btn-icon-split">
                    <span class="icon text-white-50">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.25 11.25L6 10.5L9.74999 10.5L9.74999 12L6.75 12L6.75 18L17.25 18L17.25 12L14.25 12L14.25 10.5L18 10.5L18.75 11.25L18.75 18.75L18 19.5L6 19.5L5.25 18.75L5.25 11.25ZM12.75 7.06064L12.75 15L11.25 15L11.25 7.06075L9.53039 8.78037L8.46973 7.71971L12.0001 4.18937L15.5304 7.71971L14.4697 8.78037L12.75 7.06064Z"
                          fill="white" />
                      </svg>
                    </span>
                    <span class="text">Descargar solicitud de acceso</span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-danger btn-icon-split">
                    <span class="icon text-white-50">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.25 11.25L6 10.5L9.74999 10.5L9.74999 12L6.75 12L6.75 18L17.25 18L17.25 12L14.25 12L14.25 10.5L18 10.5L18.75 11.25L18.75 18.75L18 19.5L6 19.5L5.25 18.75L5.25 11.25ZM12.75 7.06064L12.75 15L11.25 15L11.25 7.06075L9.53039 8.78037L8.46973 7.71971L12.0001 4.18937L15.5304 7.71971L14.4697 8.78037L12.75 7.06064Z"
                          fill="white" />
                      </svg>
                    </span>
                    <span class="text">Descargar manual de acceso</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer bg-gray fixed-bottom text-white">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center my-auto small ">
              <p>Ministerio de Trabajo y Promocion del Empleo</p>
              <div>©codivyright - {{ new Date().getFullYear() }}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- <Header />
    <Content />
    <Footer /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapState(['posts']),
  },
  created() {
    // this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts']),
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}

</style>
