<script>
import toolbarContent from './public/components/toolbar.component.vue';
import ProfileService from './profile/services/profile.service.js';

export default {
  components: {
    toolbarContent,
  },
  data() {
    return {
      profile: {},  // El objeto profile, vacío al inicio
      userId: null,  // Inicializamos userId
    };
  },
  methods: {
    /**
     * Método que almacena el perfil en el localStorage
     * y actualiza el perfil en el estado local.
     */
    onProfileLoaded(value) {
      this.profile = value;  // Actualizamos el perfil
      localStorage.setItem('profile', JSON.stringify(this.profile)); // Guardamos el perfil en localStorage
    },

    loadProfile(userId) {
      const profileService = new ProfileService();
      profileService.getProfileByUserId(userId)
          .then(response => {
            if (response.data) {
              this.profile = response.data; // Actualizamos el perfil con los datos obtenidos
              this.onProfileLoaded(this.profile); // Emitimos el perfil cargado
            } else {
              console.error('No profile data found');
            }
          })
          .catch(error => {
            console.error('Error fetching profile:', error.message);
          });
    }
  },

  mounted() {
    // Recupera userId desde localStorage
    const savedUserId = localStorage.getItem('userId');

    if (savedUserId) {
      this.userId = savedUserId; // Asigna el userId
      this.loadProfile(this.userId); // Carga el perfil desde la API
    } else {
      console.error('User is not authenticated or userId is missing');
    }
  },
};
</script>

<template>
  <div class="app__container h-screen flex flex-col lg:overflow-hidden">
    <header v-if="$route.meta.showToolbar" class="header">
      <!-- Pasamos el perfil y userId al componente de la barra de herramientas -->
      <toolbar-content :profile="profile" :userId="userId"/>
    </header>

    <main class="main h-full flex flex-col items-center justify-center">
      <router-view />
    </main>
  </div>
</template>
