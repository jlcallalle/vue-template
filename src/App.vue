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
      </div>

      <router-view />

      <footer class="footer bg-gray fixed-bottom text-white">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 text-center my-auto small ">
              <div>Ministerio de Trabajo y Promocion del Empleo</div>
              <div>©codivyright - {{ new Date().getFullYear() }}</div>
            </div>
            <div class="col-12 col-md-4 text-center my-auto small ">
              <div>Sistema de Gestión de Consultas de divlanilla Electrónica</div>
            </div>
            <div class="col-12 col-md-4 my-auto small text-center text-md-left">
              <p>
                Si presenta algún incidente en el sistema puede utilizar los medios
                de contacto:
              </p>
              <div>Teléfono 016306000 anexo 9009</div>
              <div>correo electrónico mds@trabajo.gob.pe</div>
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
