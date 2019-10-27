<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      this.$store
        .dispatch("retriveToken", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: "home" });
        });
      // $router.push("/");
    }
  }
};
</script>

<style>
</style>