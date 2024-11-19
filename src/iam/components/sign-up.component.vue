<script>
import { useAuthenticationStore } from "../services/authentication.store.js";
import { SignUpRequest } from "../model/sign-up.request.js";

export default {
  name: "sign-up",
  data() {
    return {
      authenticationStore: useAuthenticationStore(),
      username: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      dniNumber: "",
    };
  },
  methods: {
    onSignUp() {
      let signUpRequest = new SignUpRequest(
          this.username,
          this.password,
          this.fullName,
          this.phoneNumber,
          this.dniNumber
      );
      this.authenticationStore.signUp(signUpRequest, this.$router);
    },
  },
};
</script>

<template>
  <div>
    <h1 class="title">Sign Up</h1>
  </div>
  <div class="space-y-reverse"></div>
  <p class="p-fluid mb-5">Please enter the required information to sign up.</p>
  <div>
    <form @submit.prevent="onSignUp">
      <div class="p-fluid">
        <!-- Email -->
        <div class="field mt-5">
          <pv-float-label>
            <label for="email">Email</label>
            <pv-input-text id="email" v-model="username" :class="{'p-invalid': !username}"/>
            <small v-if="!username" class="p-invalid">Email is required.</small>
          </pv-float-label>
        </div>

        <!-- Password -->
        <div class="field mt-5">
          <pv-float-label>
            <label for="password">Password</label>
            <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password}" type="password"/>
            <small v-if="!password" class="p-invalid">Password is required.</small>
          </pv-float-label>
        </div>

        <!-- Full Name -->
        <div class="field mt-5">
          <pv-float-label>
            <label for="fullName">Full Name</label>
            <pv-input-text id="fullName" v-model="fullName" :class="{'p-invalid': !fullName}"/>
            <small v-if="!fullName" class="p-invalid">Full Name is required.</small>
          </pv-float-label>
        </div>

        <!-- Phone Number -->
        <div class="field mt-5">
          <pv-float-label>
            <label for="phoneNumber">Phone Number</label>
            <pv-input-text id="phoneNumber" v-model="phoneNumber" :class="{'p-invalid': !phoneNumber}"/>
            <small v-if="!phoneNumber" class="p-invalid">Phone Number is required.</small>
          </pv-float-label>
        </div>

        <!-- DNI Number -->
        <div class="field mt-5">
          <pv-float-label>
            <label for="dniNumber">DNI Number</label>
            <pv-input-text id="dniNumber" v-model="dniNumber" :class="{'p-invalid': !dniNumber}"/>
            <small v-if="!dniNumber" class="p-invalid">DNI Number is required.</small>
          </pv-float-label>
        </div>

        <!-- Submit Button -->
        <div class="p-field mt-5">
          <div class="mb-4">
            <button
                type="submit"
                class="w-full bg-black text-white py-2 rounded-lg hover:bg-[#8298E7] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>

          <div class="text-center text-gray-600 text-sm">
            <p>Already have an account?
              <router-link to="/sign-in" class="hover:underline">
                <span class="font-semibold">Sign-In</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.title {
  font-size: 60px;
}

.p-invalid {
  margin-right: 20px;
}
</style>
