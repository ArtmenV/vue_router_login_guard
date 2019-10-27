<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script>
export default {
  // computed: {
  //   destroy() {
  //     this.$store.dispatch('destroyToken')
  //   }
  // }
  created() {
    this.$store.dispatch("destroyToken").then(response => {
      this.$router.push({ name: "home" });
    });
  }
};
</script>

<style>
</style>