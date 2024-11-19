<script>
import ProfileService from "../../profile/services/profile.service.js";

export default {
  name: "home-view",

  data() {
    return {
      profileService: new ProfileService(),
      profile: {},
    };
  },

  methods: {
    _getProfileById(id) {
      this.profileService.getProfileByUserId(id)
          .then(response => {
            if (response.data) {
              this.profile = response.data;
            } else {
              console.error('No profile data found');
            }
          })
          .catch(error => {
            console.error('Error fetching profile:', error.message);
          });
    },

    _getUserIdFromLocalStorage() {
      const userId = localStorage.getItem('userId');
      return userId ?? null;
    }
  },

  created() {
    const userId = this._getUserIdFromLocalStorage();

    if (userId) {
      this._getProfileById(userId);
    } else {
      console.error('User is not authenticated or userId is missing');
    }
  }
}
</script>


<template>
  <section class="w-full mt-6 sm:mt-4 xl:-mt-4">

    <div class="container home pb-6 pt-5 px-4">

      <h2 class="home__title title mb-5">{{ $t('home.routerlink') }}</h2>

      <div class="home__features features">

        <router-link to="/inventory" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/inventory.svg" alt="inventory-icon" class="feature__icon"/>
                <span>{{ $t('home.inventory') }}</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="/invoicing" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/invoicing.svg" alt="invoicing-icon" class="feature__icon"/>
                <span>{{ $t('home.invoicing') }}</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="/monitoring" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/monitoring.svg" alt="monitoring-icon" class="feature__icon"/>
                <span>{{ $t('home.monitoring') }}</span>
              </div>
            </template>
          </pv-card>
        </router-link>

        <router-link to="/ordering-machinery" class="feature__item">
          <pv-card class="feature__card">
            <template #content>
              <div class="feature__content">
                <img src="../../assets/images/machinery.svg" alt="machinery-icon" class="feature__icon"/>
                <span>{{ $t('home.ordering') }}</span>
              </div>
            </template>
          </pv-card>
        </router-link>


      </div>
    </div>
  </section>

</template>

<style scoped>
.features {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10 ;
}

.feature__item {
  @apply w-full col-span-1;
}

.feature__card {
  @apply lg:h-[100px] justify-center;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);
}

.feature__content {
  @apply flex flex-row items-center gap-10 w-full h-full;
}

.feature__icon {
  @apply w-10 h-10;
}

</style>