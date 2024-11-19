<script setup>
import { defineProps } from 'vue';

defineOptions({
  name: 'profile-detail'
})

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <pv-card v-if="props.profile" class="profile-detail-card">
    <template #header>

      <h2 class="typing-effect">Profile Details</h2>
    </template>

    <div class="profile-detail-content">
      <div>
        <p><strong>Name:</strong> {{ props.profile.name }}</p>
        <p><strong>Email:</strong> {{ props.profile.email }}</p>
        <p><strong>Role:</strong> {{ props.profile.role }}</p>
        <p><strong>Description:</strong> {{ props.profile.description }}</p>
      </div>
    </div>
  </pv-card>
</template>

<style scoped>
.profile-detail-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.profile-detail-content {
  padding: 20px;
}

.typing-effect {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: .1em solid black;
  width: 0;
  animation: typing 3s steps(30) 1s 1 normal both, blink 0.75s step-end infinite;
}

@keyframes typing {
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
