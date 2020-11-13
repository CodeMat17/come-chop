<template>
  <div>
    <v-card max-width="420px" class="mx-auto">
      <v-card-title>{{ formTitle }}</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="username"
            label="Username"
            type="text"
            :rules="usernameRules"
            v-if="hasName"
          />
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="emailRules"
          />
          <v-text-field
            v-model="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="passwordRules"
          />
          <v-btn @click="submitForm(userInfo)" :disabled="!valid" color="primary">
            {{ buttonText }}
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      username: "",
      email: "",
      password: "",

      usernameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name cannot be less than 3 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password cannot be less than 6 characters",
      ],
    };
  },
  props: ["submitForm", "buttonText", "hasName", "formTitle"],
};
</script>