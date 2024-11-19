<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import ProfileService from '../services/profile.service.js';
import ProfileDetail from "../components/profile-detail.component.vue";

defineOptions({
  name: 'profile-view'
})

const profile = ref(null);
const userId = ref(null);

// Service Instance
const profileService = new ProfileService();

// Get URL Parameters
const route = useRoute();
userId.value = parseInt(route.params.userId);

// User upload method
const loadProfile = async () => {
  try {
    const response = await profileService.getProfileByUserId(userId.value);
    profile.value = response.data;
  } catch (error) {
    console.error('Error loading profile:', error);
  }
};

onMounted(loadProfile);
</script>

<template>
  <div class="min-h-screen flex flex-col items-center py-8">
    <header class="bg-white max-w-md rounded">
      <div class="container mx-auto px-4 py-6 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Profile Details</h1>
        <p class="text-gray-600">View detailed information about the user</p>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <section class="p-6">
        <profile-detail v-if="profile" :profile="profile" />
      </section>
    </main>

    <footer class="bg-gray-800 w-full py-4 text-center">
      <p class="text-gray-300 text-sm">
        &copy; 2024 AgroControl. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos específicos para la vista */
</style>
