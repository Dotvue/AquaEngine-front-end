<script>
import {useRouter} from "vue-router";
import {useAuthenticationStore} from "../services/authentication.store.js";

export default {
  name: "authentication-section",

  props: {
    profile: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      router: useRouter(),
      authenticationStore: useAuthenticationStore()
    };
  },
  computed: {
    isSignedIn() {
      return this.authenticationStore.isSignedIn;
    },
    currentFullName() {
      return this.profile?.fullName || 'Guest';
    }
  },
  methods: {
    onSignIn() {
      this.router.push({name: "sign-in"});
    },
    onSignUp() {
      this.router.push({name: "sign-up"});
    },
    onSignOut() {
      this.authenticationStore.signOut(this.router);
    }
  }
}
</script>

<template>
  <div>
    <div class="header" v-if="isSignedIn">
      <h2 class="username">{{ $t('Authentication') }} {{ currentFullName }}</h2>
      <pv-button class="sign-out__button" text @click="onSignOut">{{ $t('Log-Out') }}</pv-button>
    </div>
  </div>
</template>

<style scoped>
.username {
  font-size: 30px;
}

.header {
  display: flex;
  flex-direction: row;
}

.sign-out__button {
  margin-left: 50px;
  font-size: 20px;
  color: white;
  padding: 10px;
}
</style>
